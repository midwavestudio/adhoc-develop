"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { db } from '@/lib/firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

interface ProjectData {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export default function EditProject({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState<ProjectData>({
    title: '',
    description: '',
    url: '',
    imageUrl: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const projectRef = doc(db, 'projects', id);
        const projectSnap = await getDoc(projectRef);
        
        if (projectSnap.exists()) {
          const projectData = projectSnap.data() as ProjectData;
          setFormData({
            title: projectData.title || '',
            description: projectData.description || '',
            url: projectData.url || '',
            imageUrl: projectData.imageUrl || '',
          });
          
          if (projectData.imageUrl) {
            setImagePreview(projectData.imageUrl);
          }
        } else {
          setError('Project not found');
          setTimeout(() => {
            router.push('/admin');
          }, 2000);
        }
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Failed to load project. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProject();
  }, [id, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG, PNG, GIF, WEBP)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }

    setError(null);
    setImageFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const uploadImageToBlob = async (file: File): Promise<string> => {
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      // Create a unique filename with timestamp
      const timestamp = Date.now();
      const filename = `project-${timestamp}-${file.name.replace(/\s+/g, '-').toLowerCase()}`;
      
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(filename)}`, {
        method: 'POST',
        body: file,
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      
      const blob = await response.json();
      return blob.url;
    } catch (err) {
      console.error('Error uploading image:', err);
      throw new Error('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadProgress(100);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description) {
      setError('Title and description are required');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      let updatedData = { ...formData };
      
      // Upload new image if selected
      if (imageFile) {
        const imageUrl = await uploadImageToBlob(imageFile);
        updatedData.imageUrl = imageUrl;
      }
      
      // Update project in Firebase
      const projectRef = doc(db, 'projects', id);
      await updateDoc(projectRef, updatedData);
      
      // Redirect to admin dashboard
      router.push('/admin');
    } catch (err) {
      console.error('Error updating project:', err);
      setError('Failed to update project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 max-w-2xl">
        <Card>
          <CardContent className="flex justify-center items-center py-8">
            <div className="text-center py-8">Loading project data...</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Edit Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-md">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="title">Project Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter project title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter project description"
                className="w-full min-h-32 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="url">Project URL</Label>
              <Input
                id="url"
                name="url"
                type="url"
                value={formData.url}
                onChange={handleInputChange}
                placeholder="https://example.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Project Image</Label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {formData.imageUrl ? 'Change Image' : 'Select Image'}
                </Button>
                <Input
                  ref={fileInputRef}
                  id="image"
                  name="image"
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {imageFile && (
                  <span className="text-sm text-gray-500">
                    {imageFile.name} ({Math.round(imageFile.size / 1024)} KB)
                  </span>
                )}
              </div>
              
              {imagePreview && (
                <div className="mt-4">
                  <div className="border rounded-md overflow-hidden w-64 h-40">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {isUploading && (
                <div className="mt-2">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 mt-1">
                    Uploading: {uploadProgress}%
                  </span>
                </div>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin')}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || isUploading}
          >
            {isSubmitting ? 'Updating...' : 'Update Project'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 