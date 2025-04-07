"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send form data to our API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || 'Not provided',
          message: values.message,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        console.error('Server returned error:', data.error || 'Unknown error');
        throw new Error(data.error || 'Failed to send email');
      }
      
      console.log('Email sent successfully:', data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setError(error instanceof Error ? error.message : 'Failed to send your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
      form.reset();
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      {isSubmitted ? (
        <div className="p-6 rounded-lg text-center">
          <div className="mx-auto w-12 h-12 bg-stone-100 dark:bg-stone-800/30 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-stone-600 dark:text-stone-400" />
          </div>
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
            Thank You!
          </h3>
          <p className="text-stone-600 dark:text-stone-400 mb-6">
            Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
          </p>
          <Button
            type="button"
            onClick={() => setIsSubmitted(false)}
            variant="outline"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" suppressHydrationWarning>
            {error && (
              <div className="p-3 bg-red-50 text-red-600 rounded-md">
                {error}
              </div>
            )}
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem suppressHydrationWarning>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem suppressHydrationWarning>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email address" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem suppressHydrationWarning>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" type="tel" {...field} />
                  </FormControl>
                  <FormDescription>
                    We&apos;ll never share your phone number with anyone else.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem suppressHydrationWarning>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project or question"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
} 