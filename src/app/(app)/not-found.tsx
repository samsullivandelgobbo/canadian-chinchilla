import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, Heart } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found - Canadian Chinchilla Rescue",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-8xl md:text-9xl font-bold text-foreground select-none">
              404
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-foreground">
            It looks like this chinchilla has hopped away! The page you&apos;re
            looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="flex items-center gap-2">
              <Link href="/">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Link href="/adopt">
                <Search className="w-5 h-5" />
                Browse Chinchillas
              </Link>
            </Button>
          </div>

          <div className="pt-4">
            <p className="text-sm text-foreground mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/adopt"
                className="text-sm text-primary hover:text-primary/80 underline"
              >
                Available Chinchillas
              </Link>
              <span className="text-foreground">•</span>
              <Link
                href="/apply"
                className="text-sm text-primary hover:text-primary/80 underline"
              >
                Adoption Application
              </Link>
              <span className="text-foreground">•</span>
              <Link
                href="/care"
                className="text-sm text-primary hover:text-primary/80 underline"
              >
                Care Guide
              </Link>
              <span className="text-foreground">•</span>
              <Link
                href="/contact"
                className="text-sm text-primary hover:text-primary/80 underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
