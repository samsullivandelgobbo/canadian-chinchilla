import { AlertTriangle, Phone, Clock, MapPin, Heart } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function EmergencyPage() {
  return (
    <div className="min-h-screen">
      {/* Emergency Header */}
      <section className="relative px-4 py-20 md:py-28 bg-destructive/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full mb-4">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Emergency Chinchilla Care
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            If your chinchilla is experiencing a medical emergency, please seek
            veterinary care immediately. This page provides resources for urgent
            situations.
          </p>
        </div>
      </section>

      {/* Critical Warning */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Alert className="border-destructive/50 bg-destructive/5 mb-12">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertDescription className="text-destructive">
              <strong>Medical Emergency:</strong> If your chinchilla is showing
              signs of heat stroke, respiratory distress, seizures, or severe
              injury, contact an emergency vet immediately. Do not wait.
            </AlertDescription>
          </Alert>

          <div className="space-y-16">
            {/* When to Seek Emergency Care */}
            <div className="space-y-8">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                When to Seek Emergency Care
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Heat Stroke",
                    symptoms: [
                      "Panting or open-mouth breathing",
                      "Lethargy or weakness",
                      "Drooling excessively",
                      "Red or pale gums",
                    ],
                  },
                  {
                    title: "Respiratory Distress",
                    symptoms: [
                      "Labored breathing",
                      "Wheezing or crackling sounds",
                      "Blue-tinged gums",
                      "Gasping for air",
                    ],
                  },
                  {
                    title: "Gastrointestinal Issues",
                    symptoms: [
                      "No droppings for 12+ hours",
                      "Severe diarrhea",
                      "Bloated abdomen",
                      "Loss of appetite for 24+ hours",
                    ],
                  },
                  {
                    title: "Trauma or Injury",
                    symptoms: [
                      "Bleeding that won't stop",
                      "Broken bones or limping",
                      "Eye injuries",
                      "Seizures or convulsions",
                    ],
                  },
                ].map((emergency) => (
                  <Card key={emergency.title} className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{emergency.title}</h3>
                    <ul className="space-y-2">
                      {emergency.symptoms.map((symptom, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-destructive mt-1">"</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Emergency Vet Resources */}
            <div className="space-y-8">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Emergency Veterinary Clinics
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Always call ahead to confirm they can treat exotic pets
                (chinchillas). Not all emergency vets have exotic animal
                specialists on staff.
              </p>
              <div className="space-y-4">
                {[
                  {
                    name: "Toronto Emergency Veterinary Clinic",
                    phone: "(416) 247-VETS (8387)",
                    hours: "24/7 Emergency Care",
                    address: "21 Rolark Drive, Scarborough, ON",
                  },
                  {
                    name: "Veterinary Emergency Clinic",
                    phone: "(416) 920-2002",
                    hours: "Evenings, Weekends, Holidays",
                    address: "920 Yonge Street, Toronto, ON",
                  },
                  {
                    name: "Alta Vista Animal Hospital",
                    phone: "(613) 731-7755",
                    hours: "24/7 Emergency Care",
                    address: "2616 Alta Vista Drive, Ottawa, ON",
                  },
                ].map((clinic) => (
                  <Card key={clinic.name} className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{clinic.name}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-primary" />
                          <a
                            href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
                            className="hover:text-foreground transition-colors"
                          >
                            {clinic.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{clinic.hours}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{clinic.address}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* First Aid Tips */}
            <div className="space-y-8">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Emergency First Aid
              </h2>
              <div className="space-y-6">
                <Card className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-destructive">
                    Heat Stroke Response
                  </h3>
                  <ol className="space-y-2 text-muted-foreground pl-5 list-decimal">
                    <li>Move chinchilla to a cool, air-conditioned room</li>
                    <li>
                      Place cool (not cold) water bottles wrapped in towels near
                      them
                    </li>
                    <li>
                      Gently wipe paws and ears with cool (not cold) water
                    </li>
                    <li>Contact emergency vet immediately</li>
                    <li>Never submerge chinchilla in water</li>
                  </ol>
                </Card>

                <Card className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-destructive">
                    Choking or Respiratory Distress
                  </h3>
                  <ol className="space-y-2 text-muted-foreground pl-5 list-decimal">
                    <li>Keep the chinchilla calm and reduce stress</li>
                    <li>Ensure good air circulation</li>
                    <li>Do not attempt to remove objects from throat</li>
                    <li>Transport to emergency vet immediately</li>
                    <li>Keep chinchilla upright during transport</li>
                  </ol>
                </Card>

                <Card className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-destructive">
                    Bleeding or Injury
                  </h3>
                  <ol className="space-y-2 text-muted-foreground pl-5 list-decimal">
                    <li>
                      Apply gentle pressure with clean gauze to stop bleeding
                    </li>
                    <li>Keep chinchilla warm and calm</li>
                    <li>Do not give food or water</li>
                    <li>Minimize movement and handling</li>
                    <li>Seek immediate veterinary care</li>
                  </ol>
                </Card>
              </div>
            </div>

            {/* Contact Us */}
            <div className="space-y-8">
              <Card className="p-8 md:p-10 bg-accent/50 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3
                    className="text-2xl md:text-3xl font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Need Help with Rescue or Surrender?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    If you can no longer care for your chinchilla or have found
                    one in need of rescue, please contact us. We're here to
                    help.
                  </p>
                </div>
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/contact">Contact Canadian Chinchilla Rescue</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
