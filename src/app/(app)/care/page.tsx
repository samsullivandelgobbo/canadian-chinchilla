import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Thermometer,
  Droplets,
  Home,
  Utensils,
  Heart,
  AlertTriangle,
  Clock,
  Shield,
  BookOpen,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Chinchilla Care Guide - Canadian Chinchilla Rescue",
  description:
    "Complete guide to caring for your chinchilla including housing, diet, temperature, and health care.",
};

export default function CarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-28 md:py-36 lg:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Chinchilla <span className="text-primary">Care Guide</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Everything you need to know to provide excellent care for your
            chinchilla. These guidelines will help ensure your furry friend
            lives a long, healthy, and happy life.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Quick <span className="text-primary">Facts</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Thermometer className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Temperature</h3>
              <p className="text-muted-foreground">60–70°F ideal<br/>Never above 75°F</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Utensils className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Diet</h3>
              <p className="text-muted-foreground">Unlimited timothy hay<br/>+ 1–2 tbsp pellets daily</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Lifespan</h3>
              <p className="text-muted-foreground">15–20 years<br/>with proper care</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Exercise</h3>
              <p className="text-muted-foreground">1–2 hours supervised daily<br/>+ 15" wheel minimum</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Droplets className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Dust Baths</h3>
              <p className="text-muted-foreground">2–3 times per week<br/>10–15 minutes each</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Climate Rule</h3>
              <p className="text-muted-foreground">Temp (°F) + Humidity (%)<br/>Must be ≤ 150</p>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Control */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full">
                <Thermometer className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">CRITICAL</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Temperature <span className="text-primary">Control</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chinchillas originate from the cool Andes mountains and have the densest fur of any land animal. They cannot tolerate heat and humidity.
              </p>

              <div className="space-y-5">
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                  <h3 className="text-xl font-semibold mb-3">Ideal Range</h3>
                  <p className="text-3xl font-semibold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>60–70°F</p>
                  <p className="text-muted-foreground">(15.5–21°C)</p>
                </div>

                <Alert className="border-destructive/50 bg-destructive/5">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <AlertDescription className="text-destructive">
                    <strong>Never above 75°F (24°C)</strong> - Heat stress can be fatal. Air conditioning is mandatory for chinchilla owners.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Essential Requirements</h3>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Air conditioning is mandatory during warm months</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Keep cage away from direct sunlight and windows</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Use fans for air circulation (not direct drafts)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Monitor with accurate thermometer constantly</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Have backup cooling plan for power outages</span>
                </li>
              </ul>

              <div className="p-6 bg-destructive/10 rounded-2xl border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-3">Signs of Overheating</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lethargy, rapid breathing, drooling, red ears, lying flat. <strong>Seek immediate veterinary care!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h3 className="text-2xl font-semibold">Cage Requirements</h3>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Multi-level cages are highly recommended</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Bar spacing: ½ inch maximum to prevent escapes</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Solid shelves and platforms (no wire floors)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Provide hiding spots, tunnels, and ledges</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Only chew-safe materials (no plastic)</span>
                </li>
              </ul>

              <div className="p-6 bg-background rounded-2xl border">
                <p className="text-sm text-muted-foreground">
                  <strong>Recommended brands:</strong> Ferret Nation, Critter Nation, Quality Cage Crafters
                </p>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full">
                <Home className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">HOUSING</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Safe & Spacious <span className="text-primary">Living</span>
              </h2>

              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-semibold mb-3">Minimum Cage Size</h3>
                <p className="text-3xl font-semibold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>30" × 18" × 30"</p>
                <p className="text-muted-foreground">Width × Depth × Height<br/>Larger is always better!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diet & Nutrition */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Diet & <span className="text-primary">Nutrition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Proper nutrition is essential for digestive health and dental care
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 md:gap-12">
            <div className="space-y-6">
              <div className="text-center">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Daily Diet</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Unlimited</strong> timothy hay</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>1–2 tbsp</strong> high-quality pellets</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Fresh water</strong> daily</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Recommended Pellets</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Oxbow Chinchilla Deluxe</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mazuri Chinchilla Diet</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tradition Chinchilla Food</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">16–20% protein, ≤3.5% fat, ≥18–20% fiber</p>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="mx-auto w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="w-10 h-10 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-destructive">Foods to Avoid</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fresh fruits and vegetables</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span>Nuts, seeds, dried fruits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dairy products</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sugary or colored treats</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dust Baths */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full">
                <Droplets className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">GROOMING</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Dust <span className="text-primary">Baths</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chinchillas need dust baths to maintain their incredibly dense fur. Their fur is so thick that water cannot dry properly and can cause fungal infections.
              </p>

              <Alert className="border-primary/50 bg-primary/5">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <AlertDescription>
                  <strong>Never get chinchillas wet!</strong> Their dense fur doesn't dry properly and can cause serious health issues.
                </AlertDescription>
              </Alert>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-semibold mb-3">Bath Schedule</h3>
                <p className="text-3xl font-semibold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>2–3× Weekly</p>
                <p className="text-muted-foreground">10–15 minutes per session</p>
              </div>

              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Use only chinchilla dust (Blue Cloud or Blue Sparkle)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Provide proper dust bath house or container</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Remove bath after use to prevent overuse</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Rolling and flipping is normal behavior!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Exercise */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Health & <span className="text-primary">Exercise</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Daily Exercise</h3>
              </div>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Provide large exercise wheel (15" minimum diameter)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Supervised playtime outside cage (1-2 hours daily)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Chinchilla-proof the play area thoroughly</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Provide climbing opportunities and platforms</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-semibold">Warning Signs</h3>
              </div>
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Lethargy or excessive hiding</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Not eating or drinking for 12+ hours</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Soft or absent droppings</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">Difficulty breathing or discharge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Veterinary Care CTA */}
      <section className="px-4 py-28 md:py-36 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Find an <span className="text-primary">Exotic Vet</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Not all veterinarians are experienced with chinchillas. Look for "exotic animal" or "small mammal" specialists in your area for the best care.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Regular Care</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Annual wellness exams</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dental checks (teeth grow continuously)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Weight monitoring</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-destructive">Emergencies</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span>Overheating symptoms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span>Not eating 24+ hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span>Labored breathing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Remember */}
      <section className="px-4 py-28 md:py-36">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Remember
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-4">
              <Clock className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Long Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chinchillas live 15-20 years with proper care
              </p>
            </div>
            <div className="space-y-4">
              <Thermometer className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Temperature Critical</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep cool, dry environment always
              </p>
            </div>
            <div className="space-y-4">
              <Heart className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Social Animals</h3>
              <p className="text-muted-foreground leading-relaxed">
                They thrive with companionship and interaction
              </p>
            </div>
          </div>

          <div className="p-8 bg-secondary/30 rounded-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Questions about chinchilla care? We're here to help! Contact us anytime for guidance and support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
