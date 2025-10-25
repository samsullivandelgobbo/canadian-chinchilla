import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Calendar, Users, Palette } from "lucide-react";
import {
  getChinchillaBySlug,
  getAvailableChinchillas,
  generateSlug,
} from "@/lib/payload/chinchillas";

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;
  const chinchilla = await getChinchillaBySlug(slug);
  if (!chinchilla) {
    return {
      title: "Chinchilla Not Found - Canadian Chinchilla Rescue",
      description: "The chinchilla you are looking for could not be found.",
    };
  }
  return {
    title: `${chinchilla.name} - Canadian Chinchilla Rescue`,
    description: chinchilla?.description,
  };
};

export const revalidate = 300; // Revalidate every 5 minutes

export async function generateStaticParams() {
  const chinchillas = await getAvailableChinchillas();
  return chinchillas.map((chinchilla) => ({
    slug: generateSlug(chinchilla.name),
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ChinchillaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const chinchilla = await getChinchillaBySlug(slug);

  if (!chinchilla) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}

      <div className="max-w-6xl mx-auto px-4 sm:px-0 py-4">
        <Button variant="ghost" asChild>
          <Link href="/adopt" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Available Chinchillas
          </Link>
        </Button>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Photos */}
            <div className="space-y-4">
              {chinchilla.photos.length > 0 ? (
                <div className="grid gap-4">
                  {/* Main photo */}
                  <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={chinchilla.photos[0].url}
                      alt={chinchilla.photos[0].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>

                  {/* Additional photos */}
                  {chinchilla.photos.length > 1 && (
                    <div className="grid grid-cols-3 gap-4">
                      {chinchilla.photos.slice(1).map((photo, index) => (
                        <div
                          key={index}
                          className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={photo.url}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 33vw, 16vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-24 h-24 text-gray-400" />
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{chinchilla.name}</h1>
                  <Badge
                    variant={
                      chinchilla.status === "Available"
                        ? "default"
                        : "secondary"
                    }
                    className="text-sm"
                  >
                    {chinchilla.status}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>
                      {chinchilla.age} {chinchilla.age === 1 ? "year" : "years"}{" "}
                      old
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{chinchilla.gender}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    <span>{chinchilla.color}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>About {chinchilla.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {chinchilla.description ||
                      `${chinchilla.name} is a wonderful chinchilla looking for a loving home. Contact us to learn more about their personality and needs.`}
                  </p>
                </CardContent>
              </Card>

              {/* Personality Traits */}
              <Card>
                <CardHeader>
                  <CardTitle>Personality & Compatibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">
                      Friendly with other chinchillas
                    </span>
                    <Badge
                      variant={
                        chinchilla.friendlyWithOthers ? "default" : "outline"
                      }
                    >
                      {chinchilla.friendlyWithOthers ? "Yes" : "Unknown"}
                    </Badge>
                  </div>

                  {chinchilla.dateAdded && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">In rescue since</span>
                      <span className="text-gray-600">
                        {new Date(chinchilla.dateAdded).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Adoption CTA */}
              <div className="space-y-4 pt-6">
                {chinchilla.status === "Available" ? (
                  <>
                    <Button asChild size="lg" className="w-full">
                      <Link
                        href={`/apply?chinchilla=${encodeURIComponent(
                          chinchilla.name
                        )}`}
                      >
                        Apply to Adopt {chinchilla.name}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full"
                    >
                      <Link href="/contact">
                        Ask Questions About {chinchilla.name}
                      </Link>
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-600 mb-4">
                      {chinchilla.name} is currently{" "}
                      {chinchilla.status.toLowerCase()}.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="/adopt">
                        View Other Available Chinchillas
                      </Link>
                    </Button>
                  </div>
                )}
              </div>

              {/* Important Notice */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Important Adoption Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-blue-800">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      All adoptions include a thorough application review
                      process
                    </li>
                    <li>
                      We provide ongoing support and guidance for new chinchilla
                      parents
                    </li>
                    <li>
                      Adoption fees help cover medical care and rescue
                      operations
                    </li>
                    <li>
                      We may require a home visit before finalizing the adoption
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
