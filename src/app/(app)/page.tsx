import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Home,
  Users,
  ArrowRight,
} from "lucide-react";
import {
  GenderMaleIcon,
  GenderFemaleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { getAvailableChinchillas, generateSlug } from "@/lib/payload/chinchillas";

export const revalidate = 300;

export default async function HomePage() {
  const chinchillas = await getAvailableChinchillas();
  const featuredChinchillas = chinchillas.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Clean and Modern */}
      <section className="relative px-4 py-28 md:py-36 lg:py-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-7">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Every Chinchilla
                  <br />
                  <span className="text-primary">Deserves a Home</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  We rescue, rehabilitate, and rehome chinchillas across Canada,
                  giving each one the care and love they deserve.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/adopt" className="flex items-center gap-2">
                    Meet Our Chinchillas
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>

              {chinchillas.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary text-base">
                    {chinchillas.length}
                  </span>{" "}
                  chinchilla{chinchillas.length !== 1 ? "s" : ""} waiting for homes
                </p>
              )}
            </div>

            {/* Hero Image Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-4 lg:space-y-6">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/flower.avif"
                    alt="Chinchilla"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/summer.png"
                    alt="Chinchilla"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-12">
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/autumn.png"
                    alt="Chinchilla"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/halloween.png"
                    alt="Chinchilla"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-24 md:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Chinchillas Rescued
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                450+
              </div>
              <div className="text-sm text-muted-foreground">
                Forever Homes
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                15+
              </div>
              <div className="text-sm text-muted-foreground">
                Years
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Volunteer Powered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Chinchillas */}
      {featuredChinchillas.length > 0 && (
        <section className="px-4 py-28 md:py-36">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Meet Some of <span className="text-primary">Our Friends</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                These sweet chinchillas are looking for their forever families.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              {featuredChinchillas.map((chinchilla) => (
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

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-medium">{chinchilla.name}</h3>
                        {chinchilla.gender === "Male" ? (
                          <GenderMaleIcon className="w-5 h-5 text-blue-500" />
                        ) : (
                          <GenderFemaleIcon className="w-5 h-5 text-pink-500" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {chinchilla.description || "A wonderful chinchilla looking for love."}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        {chinchilla.age} {chinchilla.age === 1 ? "year" : "years"} • {chinchilla.color}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/adopt" className="flex items-center gap-2">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Why Adopt */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Why Adopt from <span className="text-primary">a Rescue?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you adopt, you're not just getting a pet—you're saving a life
                and gaining a loving companion.
              </p>
            </div>

            <div className="grid gap-10">
              <div className="flex gap-7">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Give a Second Chance</h3>
                  <p className="text-muted-foreground">
                    Many chinchillas come to us through no fault of their own. Your
                    adoption gives them the loving home they deserve.
                  </p>
                </div>
              </div>

              <div className="flex gap-7">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    We've been caring for chinchillas for over 15 years. We'll help
                    you find the perfect match and provide lifetime support.
                  </p>
                </div>
              </div>

              <div className="flex gap-7">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Health & Care</h3>
                  <p className="text-muted-foreground">
                    All our chinchillas are vet-checked, assessed for temperament,
                    and socialized before adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Ready to <span className="text-primary">Welcome a Chinchilla Home?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your adoption journey today. Our team is here to help you find
            your perfect companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/adopt" className="flex items-center gap-2">
                Browse Chinchillas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/apply">Start Application</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Questions?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Get in touch
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
