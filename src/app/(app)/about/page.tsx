import { Heart, Users, HomeIcon, Shield } from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about our mission to rescue and rehome chinchillas across Canada.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-28 md:py-36 lg:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            About <span className="text-primary">Canadian Chinchilla Rescue</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We're dedicated to rescuing, rehabilitating, and finding loving
            homes for chinchillas across Canada. Every chinchilla deserves a
            safe, caring environment where they can thrive.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mission is to provide a safe and loving environment for
              chinchillas in need and to educate prospective owners on the
              complexities of chinchilla care. We are dedicated to helping
              chinchillas in need and will continue to do so for as long as we
              can.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Rescue</h3>
              <p className="text-muted-foreground leading-relaxed">
                We rescue chinchillas from neglect, abandonment, and
                unsuitable living conditions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Rehabilitate</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide medical care, proper nutrition, and socialization
                to help chinchillas recover.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <HomeIcon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Rehome</h3>
              <p className="text-muted-foreground leading-relaxed">
                We carefully match chinchillas with loving families who can
                provide lifelong care.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Educate</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide ongoing support and education to ensure successful
                adoptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Our Story
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              For over 15 years, we have been rescuing chinchillas from all over
              the world. We provide a safe and loving environment for them to
              live in. We have helped countless chinchillas find their forever
              homes and have given them a second chance at life.
            </p>
            <p>
              We understand the complexities of chinchilla care and are dedicated to educating
              prospective owners, as well as providing a safe haven for
              chinchillas in need. The Canadian Chinchilla Rescue is a non-profit organization
              that relies on donations to keep our doors open.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Our Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                500+
              </div>
              <div className="text-lg font-medium">Chinchillas Rescued</div>
              <div className="text-sm text-muted-foreground">Since our founding</div>
            </div>

            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                450+
              </div>
              <div className="text-lg font-medium">Successful Adoptions</div>
              <div className="text-sm text-muted-foreground">Happy forever homes</div>
            </div>

            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                100+
              </div>
              <div className="text-lg font-medium">Volunteers</div>
              <div className="text-sm text-muted-foreground">Across Canada</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              How We Help
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold">
                For Chinchillas in Need
              </h3>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Emergency rescue and intake services</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">
                    Comprehensive health assessments and veterinary care
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Behavioral assessment and socialization</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Specialized foster care in experienced homes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold">
                For Adopting Families
              </h3>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Thorough application and screening process</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">
                    Careful matching based on lifestyle and experience
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Comprehensive care education and resources</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Ongoing support and guidance after adoption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
