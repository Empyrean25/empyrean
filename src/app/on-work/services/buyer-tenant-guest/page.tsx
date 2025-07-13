import ContactForm from "@/components/contact-form";
import { ContentCard } from "@/components/content-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer & Tenant Services | Empyrean - Your Real Estate Partner",
  description:
    "Find your perfect property with Empyrean. We provide comprehensive real estate services for buyers and tenants, ensuring accountability throughout your transaction.",
  openGraph: {
    title: "Buyer & Tenant Services | Empyrean - Your Real Estate Partner",
    description:
      "Experience exceptional real estate services with Empyrean. We're with you before, during, and after your transaction, ensuring your requirements are met.",
    type: "website",
  },
};

export default function BuyerTenantGuestPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl  font-bold text-center mb-8">
          WHY DEAL WITH AN EMPYREAN?
        </h1>

        <p className="text-lg text-center mb-16 max-w-4xl mx-auto">
          Regardless of the nationality, the location, the type of deal, and
          whoever all associated persons are: Property Owner, Broker, or Agent,{" "}
          <span className="font-bold">you deserve accountability</span> and a
          company that will be with your before, during, and most especially
          after your Real Estate Transaction.
        </p>

        <div className="mb-16" aria-label="Service Benefits">
          <ContentCard
            title="Your Requirements Matter."
            description="Send us your information and requirements, we'll tap everything we can reach to satisfy your needs!"
          />
        </div>

        <div
          className="border border-gray-300 rounded-lg p-8 md:p-12"
          aria-label="Contact Form"
        >
          <ContactForm />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Real Estate Buyer and Tenant Services",
            provider: {
              "@type": "Organization",
              name: "Empyrean",
            },
            description:
              "Comprehensive real estate services for buyers and tenants, ensuring accountability throughout your transaction.",
            offers: {
              "@type": "Offer",
              category: "Real Estate Services",
              description:
                "We provide end-to-end support for buyers and tenants, from property search to transaction completion and beyond.",
            },
            serviceType: [
              "Property Search",
              "Real Estate Consultation",
              "Transaction Support",
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
