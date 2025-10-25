import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Heart,
  AlertTriangle,
  Users,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Canadian Chinchilla Rescue for questions about adoption, volunteering, or chinchilla care.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you have questions about adoption, need help with chinchilla
            care, or want to get involved with our rescue efforts, we&apos;re
            here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Badge variant="secondary" className="gap-2 px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>24-48 hour response</span>
            </Badge>
            <Badge variant="secondary" className="gap-2 px-4 py-2">
              <Heart className="w-4 h-4" />
              <span>Always caring</span>
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 pb-28 md:pb-36">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2
                  className="text-3xl md:text-4xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Contact Methods
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Choose the contact method that works best for you. We aim to
                  respond to all inquiries within 24-48 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-md transition-shadow duration-150">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <CardTitle
                          className="text-xl font-semibold"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          Email Us
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          Best for detailed questions
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-muted-foreground">
                          General inquiries
                        </span>
                        <a
                          href="mailto:info@chinchillarescue.ca"
                          className="text-primary hover:text-primary/80 font-medium transition-colors duration-150"
                        >
                          info@chinchillarescue.ca
                        </a>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-muted-foreground">
                          Adoptions
                        </span>
                        <a
                          href="mailto:adopt@chinchillarescue.ca"
                          className="text-primary hover:text-primary/80 font-medium transition-colors duration-150"
                        >
                          adopt@chinchillarescue.ca
                        </a>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-muted-foreground">
                          Surrenders
                        </span>
                        <a
                          href="mailto:surrender@chinchillarescue.ca"
                          className="text-primary hover:text-primary/80 font-medium transition-colors duration-150"
                        >
                          surrender@chinchillarescue.ca
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow duration-150">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <CardTitle
                          className="text-xl font-semibold"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          Response Times
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          When to expect a reply
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          General inquiries
                        </span>
                        <Badge variant="secondary">24-48 hours</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Adoption applications
                        </span>
                        <Badge variant="secondary">2-3 days</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Emergency surrenders
                        </span>
                        <Badge variant="destructive">Same day</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2
                  className="text-3xl md:text-4xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Quick Actions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Looking for something specific? These quick links might help
                  you find what you need faster.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Heart,
                    title: "I want to adopt",
                    description: "Start your adoption journey",
                    cta: "Apply Now",
                    href: "/apply",
                  },
                  {
                    icon: Users,
                    title: "I want to volunteer",
                    description: "Join our rescue team",
                    cta: "Learn More",
                    href: "/volunteer",
                  },
                  {
                    icon: HelpCircle,
                    title: "I need care help",
                    description: "Expert chinchilla guidance",
                    cta: "Care Guide",
                    href: "/care",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Emergency surrender",
                    description: "We can help immediately",
                    cta: "Contact Us",
                    href: "mailto:emergency@chinchillarescue.ca",
                  },
                ].map((action, idx) => (
                  <Card
                    key={idx}
                    className="hover:shadow-md transition-shadow duration-150 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <action.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className="font-semibold mb-1"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {action.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {action.description}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={action.href}>{action.cta}</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Alert className="border-destructive/50 bg-destructive/5">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <AlertDescription className="text-destructive">
                  <strong>Emergency Contact:</strong> If you have a chinchilla in
                  immediate distress, email{" "}
                  <a
                    href="mailto:emergency@chinchillarescue.ca"
                    className="font-semibold underline hover:no-underline"
                  >
                    emergency@chinchillarescue.ca
                  </a>{" "}
                  with &quot;EMERGENCY&quot; in the subject line.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
