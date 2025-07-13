import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Empyrean Real Estate Solutions - Your credible access to the Philippine Real Estate",
  description:
    "Empyrean is a one-stop gateway for all things real estate in the Philippines. Backed by strong branding, an established system, and a built-in accountability in its name, the company delivers a seamless, transparent, and results-oriented service-based experience.",
  keywords:
    "real estate, real estate solutions, brokerage, property management, consulting",
  authors: [{ name: "Empyrean" }],
  creator: "Empyrean",
  publisher: "Empyrean",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://empyrean.ph",
    title:
      "Empyrean Real Estate Solutions - Your credible access to the Philippine Real Estate",
    description:
      "Empyrean is a one-stop gateway for all things real estate in the Philippines. Backed by strong branding, an established system, and a built-in accountability in its name, the company delivers a seamless, transparent, and results-oriented service-based experience.",
    siteName: "Empyrean",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Empyrean Real Estate Solutions - Your credible access to the Philippine Real Estate",
    description:
      "Empyrean is a company you can always get back to for all-things Real Estate in the Philippines.",
    creator: "@empyrean",
  },
  viewport: "width=device-width, initial-scale=1",
  verification: {
    google: "your-google-site-verification", // Replace with your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <Toaster />
      <Footer />
    </main>
  );
}
