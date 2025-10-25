import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Banner from "@/components/banner";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://canadianchinchillarescue.ca'),
  title: {
    default: "Canadian Chinchilla Rescue - Every Chinchilla Deserves a Home",
    template: "%s | Canadian Chinchilla Rescue",
  },
  description:
    "Providing loving homes for chinchillas in need across Canada. Adopt, foster, or support our mission to rescue and rehome chinchillas.",
  keywords: [
    "chinchilla",
    "rescue",
    "adoption",
    "pets",
    "Canada",
    "chinchilla care",
    "adopt chinchilla",
    "foster chinchilla",
    "exotic pets",
  ],
  authors: [{ name: "Canadian Chinchilla Rescue" }],
  creator: "Canadian Chinchilla Rescue",
  publisher: "Canadian Chinchilla Rescue",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://canadianchinchillarescue.ca",
    title: "Canadian Chinchilla Rescue",
    description: "Every Chinchilla Deserves a Home",
    siteName: "Canadian Chinchilla Rescue",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Chinchilla Rescue",
    description: "Every Chinchilla Deserves a Home",
    creator: "@canadianchinchillarescue",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className={`${inter.className} antialiased pb-8 md:pb-0`}>
        <Navbar />
        <Banner />
        <main className="min-h-screen texture-overlay">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
