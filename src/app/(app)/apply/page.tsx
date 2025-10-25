"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApplicationFormData, applicationSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  RESCUE_CONFIG,
  isApplicationsOpen,
  getAllowedProvinces,
  getProvinceRestrictionMessage,
} from "@/lib/config";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { submitApplication } from "./actions";

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchParams = useSearchParams();

  // Check if applications are currently open
  const applicationsOpen = isApplicationsOpen();
  const allowedProvinces = getAllowedProvinces();
  const provinceRestrictionMessage = getProvinceRestrictionMessage();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      hasCage: false,
      hasAirConditioning: false,
      hasExperience: false,
      hasPets: false,
      hasChildren: false,
      hasAllergies: false,
      readCareGuide: false,
      financialResponsibility: false,
      timeCommitment: false,
    },
  });

  // Pre-fill interested chinchilla if provided in URL
  useEffect(() => {
    const chinchilla = searchParams.get("chinchilla");
    if (chinchilla) {
      form.setValue("interestedChinchilla", decodeURIComponent(chinchilla));
    }
  }, [searchParams, form]);

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    try {
      await submitApplication(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-600">
                Application Submitted!
              </CardTitle>
              <CardDescription>
                Thank you for your interest in adopting a chinchilla. We&apos;ll
                review your application and get back to you within 2-3 business
                days.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Adoption Application</h1>
          <p className="text-xl ">
            Help us find the perfect chinchilla match for your family
          </p>
        </div>

        <Card className="">
          <CardHeader>
            <CardTitle>Application Form</CardTitle>
            <CardDescription>
              Please fill out all required fields. This helps us ensure the best
              possible match between you and your future chinchilla.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter your age"
                              {...field}
                              onChange={(e) =>
                                field.onChange(parseInt(e.target.value) || 0)
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="province"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Province *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your province" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="AB">Alberta</SelectItem>
                              <SelectItem value="BC">
                                British Columbia
                              </SelectItem>
                              <SelectItem value="MB">Manitoba</SelectItem>
                              <SelectItem value="NB">New Brunswick</SelectItem>
                              <SelectItem value="NL">
                                Newfoundland and Labrador
                              </SelectItem>
                              <SelectItem value="NS">Nova Scotia</SelectItem>
                              <SelectItem value="ON">Ontario</SelectItem>
                              <SelectItem value="PE">
                                Prince Edward Island
                              </SelectItem>
                              <SelectItem value="QC">Quebec</SelectItem>
                              <SelectItem value="SK">Saskatchewan</SelectItem>
                              <SelectItem value="NT">
                                Northwest Territories
                              </SelectItem>
                              <SelectItem value="NU">Nunavut</SelectItem>
                              <SelectItem value="YT">Yukon</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Housing & Setup */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Housing & Setup</h3>

                  <FormField
                    control={form.control}
                    name="hasCage"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I already have a cage suitable for chinchillas
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  {form.watch("hasCage") && (
                    <FormField
                      control={form.control}
                      name="cageType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cage Type/Brand</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Ferret Nation, Critter Nation, Custom built"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="hasAirConditioning"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I have air conditioning to keep temperatures below
                            70°F (21°C) *
                          </FormLabel>
                          <FormDescription>
                            Chinchillas are very sensitive to heat and require
                            cool temperatures.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Experience & Household */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">
                    Experience & Household
                  </h3>

                  <FormField
                    control={form.control}
                    name="hasExperience"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I have previous experience with chinchillas
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasPets"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>I have other pets</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  {form.watch("hasPets") && (
                    <FormField
                      control={form.control}
                      name="petTypes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What types of pets do you have?</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., cats, dogs, rabbits"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="hasChildren"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>I have children in my household</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasAllergies"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Someone in my household has allergies to animals
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Interest & Motivation */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">
                    Interest & Motivation
                  </h3>

                  <FormField
                    control={form.control}
                    name="interestedChinchilla"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Are you interested in a specific chinchilla?
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter chinchilla name or 'No preference'"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          If you saw a specific chinchilla on our website, let
                          us know!
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whyAdopt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Why do you want to adopt a chinchilla? *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your motivation for adopting a chinchilla, your expectations, and how you plan to care for them..."
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Please provide at least 100 characters explaining your
                          motivation and plans.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Agreements */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">
                    Agreements & Acknowledgments
                  </h3>

                  <FormField
                    control={form.control}
                    name="readCareGuide"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I have read and understood the chinchilla care guide
                            *
                          </FormLabel>
                          <FormDescription>
                            <a
                              href="/care"
                              target="_blank"
                              className="text-blue-600 hover:underline"
                            >
                              Click here to read our care guide
                            </a>
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="financialResponsibility"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I understand the financial responsibility of
                            chinchilla ownership *
                          </FormLabel>
                          <FormDescription>
                            Including food, bedding, toys, and veterinary care
                            costs.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeCommitment"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I understand the time commitment required for
                            chinchilla care *
                          </FormLabel>
                          <FormDescription>
                            Including daily interaction, cage cleaning, and
                            providing exercise time.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="px-8"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
