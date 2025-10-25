import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Package, Home, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Donate",
  description: "Support our mission to rescue and rehome chinchillas across Canada.",
};

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-28 md:py-36 lg:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Support Our <span className="text-primary">Mission</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Your generous donations help us provide medical care, food, housing, and love to chinchillas in need. Every contribution makes a difference.
          </p>
          <Button asChild size="lg">
            <Link href="mailto:donate@chinchillarescue.ca" className="flex items-center gap-2">
              Donate Today
              <Heart className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              How Your <span className="text-primary">Donation Helps</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              100% of donations go directly to chinchilla care and rescue operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Medical Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                Veterinary exams, dental care, emergency treatments, and medications for sick or injured chinchillas.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Package className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Food & Supplies</h3>
              <p className="text-muted-foreground leading-relaxed">
                High-quality pellets, timothy hay, dust baths, toys, and other essential supplies for daily care.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Home className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Housing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cages, climate control equipment, bedding, and maintenance of safe housing environments.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Rescue Operations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transportation costs, intake assessments, and emergency rescue responses across Canada.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Operational Costs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Website maintenance, adoption processing, and administrative expenses to keep the rescue running.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Resources and support materials to help adopters provide the best care for their chinchillas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Ways to <span className="text-primary">Give</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold">Monetary Donations</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Financial contributions help us provide immediate care and support for chinchillas in need. All donations are tax-deductible.
              </p>
              <Button asChild size="lg">
                <Link href="mailto:donate@chinchillarescue.ca" className="flex items-center gap-2">
                  Make a Donation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold">Supply Donations</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We always need supplies for daily chinchilla care. Contact us to arrange drop-off or shipping:
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Timothy hay and quality pellets</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Chinchilla dust (Blue Cloud or Blue Sparkle)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Cages and accessories</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Fleece liners and bedding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Your Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See how your donations directly help chinchillas in need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-4">
              <p className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>$50</p>
              <p className="text-muted-foreground leading-relaxed">
                Provides one month of food and supplies for one chinchilla
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>$150</p>
              <p className="text-muted-foreground leading-relaxed">
                Covers a routine veterinary exam and basic health check
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>$500</p>
              <p className="text-muted-foreground leading-relaxed">
                Provides emergency medical care for a chinchilla in crisis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Every Dollar <span className="text-primary">Counts</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your support helps us continue our mission of rescuing and rehoming chinchillas across Canada.
          </p>
          <Button asChild size="lg">
            <Link href="mailto:donate@chinchillarescue.ca" className="flex items-center gap-2">
              Donate Now
              <Heart className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
