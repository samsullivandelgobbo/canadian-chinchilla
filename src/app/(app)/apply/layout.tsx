import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to Adopt",
  description:
    "Start your chinchilla adoption journey. Fill out our application form and find your perfect furry companion.",
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
