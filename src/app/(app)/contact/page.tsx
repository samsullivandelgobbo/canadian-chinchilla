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
  title: "Contact Us - Canadian Chinchilla Rescue",
  description:
    "Get in touch with Canadian Chinchilla Rescue for questions about adoption, volunteering, or chinchilla care.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            We're here to help
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            We&apos;d love to hear from you! Whether you have questions about
            adoption, need help with chinchilla care, or want to get involved
            with our rescue efforts, we&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <Badge variant="secondary" className="gap-1">
              <Clock className="w-3 h-3" />
              24-48 hour response
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Users className="w-3 h-3" />
              Expert support team
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Heart className="w-3 h-3" />
              Always caring
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Choose the contact method that works best for you. We aim to
                  respond to all inquiries within 24-48 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">Email Us</CardTitle>
                        <CardDescription>
                          Best for detailed questions and documentation
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Most Popular
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                        <span className="text-sm font-medium text-muted-foreground">
                          General inquiries:
                        </span>
                        <a
                          href="mailto:info@chinchillarescue.ca"
                          className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 group"
                        >
                          info@chinchillarescue.ca
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                        <span className="text-sm font-medium text-muted-foreground">
                          Adoptions:
                        </span>
                        <a
                          href="mailto:adopt@chinchillarescue.ca"
                          className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 group"
                        >
                          adopt@chinchillarescue.ca
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                        <span className="text-sm font-medium text-muted-foreground">
                          Surrenders:
                        </span>
                        <a
                          href="mailto:surrender@chinchillarescue.ca"
                          className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 group"
                        >
                          surrender@chinchillarescue.ca
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-7 h-7 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">Social Media</CardTitle>
                        <CardDescription>
                          Follow us for daily updates and success stories
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Follow us for daily updates, cute photos, and adoption
                      success stories!
                    </p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group"
                        asChild
                      >
                        <a href="#" className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Facebook
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group"
                        asChild
                      >
                        <a href="#" className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          Instagram
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-xl flex items-center justify-center">
                        <Clock className="w-7 h-7 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">
                          Response Times
                        </CardTitle>
                        <CardDescription>
                          When to expect a reply from our team
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="text-sm font-medium text-muted-foreground">
                          General inquiries:
                        </span>
                        <Badge variant="secondary">24-48 hours</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="text-sm font-medium text-muted-foreground">
                          Adoption applications:
                        </span>
                        <Badge variant="secondary">2-3 business days</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                        <span className="text-sm font-medium text-destructive">
                          Emergency surrenders:
                        </span>
                        <Badge variant="destructive">Same day</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Looking for something specific? These quick links might help
                  you find what you need faster.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Heart className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">
                          I want to adopt
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Start your adoption journey today
                        </p>
                      </div>
                      <Button className="group/btn" asChild>
                        <Link href="/apply" className="flex items-center gap-2">
                          Apply Now
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-7 h-7 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">
                          I need to surrender
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          We can help find a loving new home
                        </p>
                      </div>
                      <Button variant="outline" className="group/btn" asChild>
                        <a
                          href="mailto:surrender@chinchillarescue.ca"
                          className="flex items-center gap-2"
                        >
                          Email Us
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <HelpCircle className="w-7 h-7 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">
                          I need care help
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Get expert chinchilla care guidance
                        </p>
                      </div>
                      <Button variant="outline" className="group/btn" asChild>
                        <Link href="/care" className="flex items-center gap-2">
                          Care Guide
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="w-7 h-7 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">
                          I want to volunteer
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Join our passionate rescue team
                        </p>
                      </div>
                      <Button variant="outline" className="group/btn" asChild>
                        <a
                          href="mailto:volunteer@chinchillarescue.ca"
                          className="flex items-center gap-2"
                        >
                          Get Involved
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Emergency Contact */}
              <Alert
                variant="destructive"
                className="border-destructive/50 bg-destructive/5"
              >
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle className="text-lg font-semibold">
                  Emergency Contact
                </AlertTitle>
                <AlertDescription className="mt-2 space-y-3">
                  <p>
                    If you have a chinchilla in immediate distress or need
                    urgent surrender assistance, please email us at{" "}
                    <a
                      href="mailto:emergency@chinchillarescue.ca"
                      className="font-semibold underline hover:no-underline inline-flex items-center gap-1"
                    >
                      emergency@chinchillarescue.ca
                      <ArrowRight className="w-3 h-3" />
                    </a>{" "}
                    with &quot;EMERGENCY&quot; in the subject line.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="destructive" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      Monitored 24/7
                    </Badge>
                    <span className="text-muted-foreground">
                      We respond as quickly as possible
                    </span>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions. Don&apos;t see what you&apos;re
              looking for? Contact us!
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How long does the adoption process take?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our adoption process typically takes 1-2 weeks from
                  application submission to taking your new chinchilla home.
                  This includes application review, reference checks, and
                  sometimes a home visit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you have adoption fees?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, adoption fees help cover veterinary care, food, and
                  housing costs while chinchillas are in our care. Fees vary
                  based on age and any special needs, typically ranging from
                  $100-$200 per chinchilla.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I surrender my chinchilla if I can no longer care for
                  them?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Absolutely! We understand that circumstances change. Please
                  contact us at surrender@chinchillarescue.ca and we&apos;ll
                  work with you to ensure your chinchilla finds a loving new
                  home.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you provide ongoing support after adoption?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes! We&apos;re here to support you throughout your
                  chinchilla&apos;s life. We provide care resources, answer
                  questions, and even offer to take back any chinchilla if
                  circumstances change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
