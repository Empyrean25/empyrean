import { ContentCard } from "@/components/content-card";
import CustomSolutions from "@/components/custom-solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Owner Services | Empyrean - Real Estate Solutions",
  description:
    "Maximize your property's potential with Empyrean. We offer comprehensive property management services, from maintenance to brokerage, ensuring effective market placement.",
  openGraph: {
    title: "Property Owner Services | Empyrean - Real Estate Solutions",
    description:
      "Access our extensive network of in-house sellers and incentivized brokers. We provide complete Real Estate Solutions for maintenance, leasing, and sales.",
    type: "website",
  },
};

export default function PropertyOwnerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl  font-bold text-center mb-8">
          YOU ACCESS US, YOU ACCESS EVERYONE.
        </h1>

        <p className="text-lg text-center mb-16 max-w-4xl mx-auto">
          In Empyrean, we value the effectiveness of putting your property in
          the market, we utilise our in-house sellers, and we also tap our
          incentivised broker network to get you a buyer, tenant, or guest as
          soon as possible! Regardless of our commission share, as long as we
          deliver effective service.
        </p>

        <div className="mb-12" aria-label="Property Management Services">
          <ContentCard
            title="ENLIST WITH US."
            description="A true one-stop shop for all things real estate. May it just be
            for handling your property for maintenance and upkeep or profit
            and brokering, we can manage your property for you. Our Property
            Management can start managing your property with keyholding and
            maintenance services and we'll be ready once you decide to
            put it up in the market for profit, for short/long term lease or"
          />
        </div>

        <CustomSolutions />
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
