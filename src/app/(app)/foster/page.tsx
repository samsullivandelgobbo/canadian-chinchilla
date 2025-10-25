import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Home, Clock, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Foster - Canadian Chinchilla Rescue",
  description: "Become a foster parent and provide temporary care for chinchillas in need.",
};

export default function FosterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-28 md:py-36 lg:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Become a <span className="text-primary">Foster Parent</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Foster homes are the heart of our rescue. By opening your home temporarily, you give chinchillas the care and love they need while waiting for their forever families.
          </p>
          <Button asChild size="lg">
            <Link href="mailto:foster@chinchillarescue.ca" className="flex items-center gap-2">
              Apply to Foster
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What is Fostering */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                What is <span className="text-primary">Fostering?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fostering means providing a temporary home for chinchillas while they await adoption. You'll give them a safe, loving environment and help them prepare for their forever homes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide all necessary supplies including cages, food, bedding, and veterinary care. You provide the love, attention, and daily care.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-background rounded-2xl border space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">We Provide</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cage and all supplies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Food, hay, and bedding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Veterinary care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 support and guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Foster <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We need dedicated foster parents who can provide proper care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Essential Requirements</h3>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Ability to maintain proper temperature (60-70°F)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Dedicated space for cage setup</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Time for daily care and interaction</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Willingness to learn proper care techniques</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Transportation for potential vet visits</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Time Commitment</h3>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Foster periods range from 2 weeks to several months</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Daily care: feeding, water changes, spot cleaning</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Weekly: full cage cleaning, dust baths</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">1-2 hours daily for exercise and socialization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Ready to <span className="text-primary">Foster?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Contact us to learn more about becoming a foster parent and saving chinchilla lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="mailto:foster@chinchillarescue.ca" className="flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Have Questions?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
