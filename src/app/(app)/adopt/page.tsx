import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, ArrowRight } from "lucide-react";
import {
  GenderMaleIcon,
  GenderFemaleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { getAvailableChinchillas, generateSlug } from "@/lib/payload/chinchillas";

export const metadata = {
  title: "Adopt a Chinchilla",
  description:
    "Browse our available chinchillas and find your perfect companion. We have a variety of chinchillas available for adoption.",
};

export const revalidate = 60;

export default async function AdoptPage() {
  const chinchillas = await getAvailableChinchillas();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-28 md:py-36 lg:py-48">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Find Your Perfect <span className="text-primary">Chinchilla</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Browse our available chinchillas looking for their forever homes.
            Each one has been lovingly cared for and is ready to bring joy to
            your family.
          </p>
          <Button asChild size="lg">
            <Link href="/apply" className="flex items-center gap-2">
              Start Your Application
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Chinchillas Grid */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          {chinchillas.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-semibold mb-5" style={{ fontFamily: "var(--font-display)" }}>
                No Available Chinchillas
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
                All our chinchillas have found their forever homes! Check back
                soon or submit an application to be notified when new
                chinchillas arrive.
              </p>
              <Button asChild size="lg">
                <Link href="/apply">Submit Application</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-semibold mb-5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Available Chinchillas <span className="text-primary">({chinchillas.length})</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Click on any chinchilla to learn more about their personality
                  and needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                {chinchillas.map((chinchilla) => (
                  <Link
                    key={chinchilla.id}
                    href={`/adopt/${generateSlug(chinchilla.name)}`}
                    className="group"
                  >
                    <div className="space-y-5">
                      <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-muted">
                        {chinchilla.photos.length > 0 ? (
                          <Image
                            src={chinchilla.photos[0].url}
                            alt={chinchilla.photos[0].alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <Heart className="w-12 h-12 text-muted-foreground" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">{chinchilla.name}</h3>
                          {chinchilla.gender === "Male" ? (
                            <GenderMaleIcon className="w-5 h-5 text-blue-500" />
                          ) : (
                            <GenderFemaleIcon className="w-5 h-5 text-pink-500" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {chinchilla.description ||
                            "A wonderful chinchilla looking for a loving home."}
                        </p>
                        <div className="text-sm text-muted-foreground">
                          {chinchilla.age} {chinchilla.age === 1 ? "year" : "years"} • {chinchilla.color}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Ready to <span className="text-primary">Adopt?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start your application process today. Our team will help match you
            with the perfect chinchilla for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/apply" className="flex items-center gap-2">
                Submit Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
