'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Separate component that uses useSearchParams
function SearchParamsHandler() {
  const searchParams = useSearchParams();
  const referrer = searchParams.get('referrer');
  
  return referrer ? (
    <p className="text-sm text-stone-500 mb-4">
      Referred from: {referrer}
    </p>
  ) : null;
}

export default function NotFoundPage() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-32 px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-8">Page Not Found</h2>
      
      {/* Wrap useSearchParams in a Suspense boundary */}
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler />
      </Suspense>
      
      <p className="text-lg text-center text-stone-400 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-[#eaccb4] hover:bg-[#d8b99e] text-stone-800">
        <Link href="/" className="flex items-center">
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </section>
  );
} 