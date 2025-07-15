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
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          YOU ACCESS US, YOU ACCESS EVERYONE.
        </h1>

        <p className="text-lg text-center mb-16 max-w-4xl mx-auto">
          In Empyrean, we value the effectiveness of putting your property in
          the market, we utilise our in-house sellers, and we also tap our
          incentivised broker network to get you a buyer, tenant, or guest as
          soon as possible! Regardless of our commission share, as long as we
          deliver effective service.
        </p>

        {/* Box 1 */}
        <div className="mb-12" aria-label="Property Management Services">
          <ContentCard
            title="ENLIST WITH US."
            description="A true one-stop shop for all things real estate. May it just be for handling your property for upkeep and maintenance or profit and brokering, we can handle your property for you backed with our brand's core values."
          />
        </div>

   {/* OUR APPROACH Section */}
<div className="mb-12 flex flex-col items-center text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-6">OUR APPROACH</h2>
  <div className="w-full max-w-5xl px-4">
    <img
      src="/assets/our-approach-new.png"
      alt="Our approach"
      className="w-full h-auto rounded-lg"
    />
  </div>
</div>

        {/* Box 2 */}
        <div className="mb-12 border border-gray-300 rounded-lg p-8 md:p-12">
          <p className="text-gray-800">
            With Empyrean, you&rsquo;d have our guarantee that we will reflect our core values in all our transactions: we are simple, we are competent, we are accountable, and we are setting a quality standard.
            <br /><br />
            We are centralising Real Estate so it doesn&rsquo;t have to be complicated for you. Your effective Real Estate Solutions, on us.
          </p>
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
