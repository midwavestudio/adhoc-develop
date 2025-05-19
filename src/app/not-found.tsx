import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

// Correct viewport export - this is the only metadata we should keep
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function NotFound() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-32 px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-8">Page Not Found</h2>
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