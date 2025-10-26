import Image from "next/image";
import { ExternalLink, Heart, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Partners",
  description:
    "Our trusted partners who help us rescue and care for chinchillas in need.",
};

export default function PartnersPage() {
  const partners = [
    {
      name: "Helping Homeless Pets",
      description:
        "A dedicated organization working to rescue and rehome pets in need. We collaborate closely to ensure chinchillas find loving forever homes.",
      website: "https://helpinghomelesspets.com/",
      icon: (
        <Image
          src="https://img1.wsimg.com/isteam/ip/0d924db2-5d2e-4ed8-8e5a-acc4c5616e05/logo/fe4cea7c-8184-4872-a27d-f1861e9d8b47.png/:/rs=w:424,h:160,cg:true,m/cr=w:424,h:160/qt=q:100/ll"
          alt="Helping Homeless Pets"
          width={100}
          height={100}
        />
      ),
      type: "Rescue Partner",
    },
    {
      name: "Zoey and Lilo's Toy Box",
      description:
        "Premium toy shop offering high-quality, safe toys and enrichment products for chinchillas and other small animals.",
      website: "https://www.zoeyandlilostoybox.com",
      icon: (
        <Image
          src="https://www.zoeyandlilostoybox.com/cdn/shop/files/ZoeyandLilosTD05aR06aP02ZL-Madison6a_981d4c81-284b-4e2c-a36f-0d147a0a944a_100x@2x.png?v=1613160353"
          alt="Zoey and Lilo's Toy Box"
          width={100}
          height={100}
        />
      ),
      type: "Supply Partner",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our <span className="text-primary">Partners</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We work with trusted organizations and businesses who share our
            mission to provide the best care for chinchillas in need.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="px-4 pb-28 md:pb-36">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {partners.map((partner, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-md transition-shadow duration-150"
              >
                <div className="space-y-6">
                  {/* Icon and Type */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {partner.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
                        {partner.type}
                      </div>
                      <h2
                        className="text-2xl font-semibold tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {partner.name}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Website Link */}
                  {partner.website && (
                    <Button asChild variant="outline" className="w-full group">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Become a Partner CTA */}
          <Card className="mt-12 p-10 bg-accent/50 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-3">
                <h3
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Become a Partner
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Are you a business or organization interested in partnering
                  with Canadian Chinchilla Rescue? We'd love to hear from you.
                </p>
              </div>
              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
