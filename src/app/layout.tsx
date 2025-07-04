import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
const cinzel = Cinzel({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empyrean - Your Trusted Partner in Business Solutions",
  description:
    "Empyrean provides innovative business solutions and services to help your company grow. Expert consulting, digital transformation, and strategic planning services.",
  keywords:
    "business solutions, consulting, digital transformation, strategic planning, business growth",
  authors: [{ name: "Empyrean" }],
  creator: "Empyrean",
  publisher: "Empyrean",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://empyrean.com",
    title: "Empyrean - Your Trusted Partner in Business Solutions",
    description:
      "Empyrean provides innovative business solutions and services to help your company grow. Expert consulting, digital transformation, and strategic planning services.",
    siteName: "Empyrean",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empyrean - Your Trusted Partner in Business Solutions",
    description:
      "Empyrean provides innovative business solutions and services to help your company grow.",
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
    <html lang="en">
      <body className={`${cinzel.variable} ${lora.variable} antialiased`}>
        {/* <Header /> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
