import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Users, Home, Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Volunteer - Canadian Chinchilla Rescue",
  description: "Join our volunteer team and help chinchillas in need across Canada.",
};

export default function VolunteerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-28 md:py-36 lg:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Volunteer <span className="text-primary">With Us</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Join our passionate team of volunteers helping chinchillas across Canada find their forever homes. Every hour you donate makes a difference.
          </p>
          <Button asChild size="lg">
            <Link href="mailto:volunteer@chinchillarescue.ca" className="flex items-center gap-2">
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              How You Can <span className="text-primary">Help</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We have opportunities for all skill levels and time commitments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Foster Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                Provide temporary homes for chinchillas while they await adoption. We provide supplies and support.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Adoption Events</h3>
              <p className="text-muted-foreground leading-relaxed">
                Help at adoption events, meet potential adopters, and share information about chinchilla care.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Home className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Home Visits</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conduct pre-adoption home visits to ensure suitable environments for our chinchillas.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Transport</h3>
              <p className="text-muted-foreground leading-relaxed">
                Help transport chinchillas to vet appointments, foster homes, or adoptive families.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Administrative</h3>
              <p className="text-muted-foreground leading-relaxed">
                Help with applications, social media, website updates, and general organization.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fundraising</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organize or participate in fundraising events to support our rescue operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                What We <span className="text-primary">Look For</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We welcome volunteers of all backgrounds and experience levels. What matters most is your dedication to helping animals.
              </p>
            </div>

            <div className="space-y-6">
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Passion for animal welfare and chinchilla care</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Reliability and commitment to scheduled tasks</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Willingness to learn proper chinchilla handling</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Good communication and teamwork skills</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">18+ years old (or parental supervision)</span>
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
            Ready to <span className="text-primary">Make a Difference?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Contact us today to learn more about volunteer opportunities and how you can help chinchillas in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="mailto:volunteer@chinchillarescue.ca" className="flex items-center gap-2">
                Email Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
