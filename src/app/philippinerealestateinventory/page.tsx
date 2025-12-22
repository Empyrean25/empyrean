import CustomSolutions from "@/components/custom-solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philippine Real Estate Inventory | Empyrean Real Estate Solutions",
  description:
    "View all Property Listings in the Philippine Real Estate Market",
  openGraph: {
    title: "Philippine Real Estate Inventory | Empyrean Real Estate Solutions",
    description:
      "View all Property Listings in the Philippine Real Estate Market.",
    type: "website",
  },
};

export default function PropertyOwnerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          The Philippine Real Estate Inventory.
        </h1>

        <p className="text-[14px] md:text-lg text-center mb-16 max-w-4xl mx-auto">
          Access all Property Listings in the Philippines across multiple Real
          Estate Brokers and Agents.
        </p>

        {/* Scaled Google Sheet Embed */}
        <div className="w-full overflow-hidden border rounded-lg">
          <div
            style={{
              transform: "scale(0.9)",
              transformOrigin: "top left",
              width: "111%",
            }}
          >
            <iframe
              src="https://docs.google.com/spreadsheets/d/1G0GFhhoLTbLBi5UOjukyDQpvvtPsuUbHzHAAg2NTYdU/edit?rm=minimal"
              className="w-full h-[600px]"
              frameBorder="0"
            />
          </div>
        </div>

        <div className="mt-12">
          <CustomSolutions />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Property Management Services",
            provider: {
              "@type": "Organization",
              name: "Empyrean",
            },
            description:
              "Comprehensive property management services including maintenance, leasing, and sales through our extensive network.",
            offers: {
              "@type": "Offer",
              category: "Property Management",
              description:
                "Complete Real Estate Solutions including maintenance, keyholding, leasing, and sales services.",
            },
            serviceType: [
              "Property Management",
              "Maintenance Services",
              "Property Sales",
              "Property Leasing",
            ],
            areaServed: {
              "@type": "Country",
              name: "Philippines",
            },
          }),
        }}
      />
    </main>
  );
}
