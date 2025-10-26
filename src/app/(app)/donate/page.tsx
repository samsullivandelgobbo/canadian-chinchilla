import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, DollarSign, Package, Home, Users, ArrowRight, ExternalLink } from "lucide-react";
import { ETransferDonation } from "@/components/etransfer-donation";

export const metadata = {
  title: "Donate",
  description: "Support our mission to rescue and rehome chinchillas across Canada.",
};

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-28 md:py-36 lg:py-48">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Support Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your generous donations help us provide medical care, food, housing, and love to chinchillas in need. Every contribution makes a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group min-w-[200px]">
              <a
                href="https://www.canadahelps.org/gp/18298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Donate Now
                <ExternalLink className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px]">
              <a href="#etransfer">
                e-Transfer Info
              </a>
            </Button>
          </div>
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
      <section id="etransfer" className="px-4 py-28 md:py-36 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Ways to <span className="text-primary">Give</span>
            </h2>
          </div>

          {/* Featured: Canada Helps */}
          <Card className="p-8 md:p-12 mb-16 bg-accent/50">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <Image
                  src="/canadahelps-logo.png"
                  alt="CanadaHelps"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <div className="space-y-4">
                <h3
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Donate via CanadaHelps
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Make a secure, tax-deductible donation through CanadaHelps. Your contribution goes directly to supporting chinchillas in need.
                </p>
              </div>
              <Button asChild size="lg" className="group">
                <a
                  href="https://www.canadahelps.org/gp/18298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Donate Now
                  <ExternalLink className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </Card>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <ETransferDonation />
            </div>

            <div className="space-y-6">
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Supply Donations
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We always need supplies for daily chinchilla care. Contact us to arrange drop-off or shipping:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Timothy hay and quality pellets</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Chinchilla dust (Blue Cloud or Blue Sparkle)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Cages and accessories</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Fleece liners and bedding</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-4">
                <Link href="mailto:donate@chinchillarescue.ca" className="flex items-center gap-2">
                  Contact About Supplies
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
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
