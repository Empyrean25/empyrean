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
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          WHY DEAL WITH AN EMPYREAN?
        </h1>

        <p className="text-[14px] md:text-lg text-center mb-16 max-w-4xl mx-auto">
          Regardless of the nationality, the location, the type of deal, and its price,
          whoever all associated persons are: Property Owner, Broker, or Agent,{" "}
          <span className="font-bold">you deserve accountability</span> and a
          company that will be with you before, during, and most especially
          after your real estate transaction. 
          <br />
          <br />
          You will be assigned an <span className="font-bold">Empyrean Relationship Manager</span> to search the market for you with our In-House Sellers and our Broker Circle to get started. They shall also be the one responsible in handling your account with us and attend to all your inquiries in accessing our Business Network and Professional Circles or any concerns regarding your properties.
        </p>

        <div className="mb-16" aria-label="Service Benefits">
          <ContentCard
            title="Your Requirements Matter."
            description="Send us your information and requirements, we'll tap everything we can reach to find a property that matches your budget, personality, lifestyle, and preferences!"
          />
        </div>

      <ContentCard
          title="Empyrean Professional Services (Complementary and Add-On)"
          description="We are dedicated to being your one-stop gateway to the Real Estate Industry. We cultivate Empyrean Business Network and Empyrean Professional Circles should you need any more related services pertaining to your property. 

Empyrean also offers in-house and partner services that deliver an Empyrean-grade standard—from deep cleaning, regular maintenance, repairs, and even home renovations and improvements. We got your back!

You will be assigned an Empyrean Relationship Manager to attend to all your inquiries in accessing our Business Network and Professional Circles."
        />
        <div
          className="border border-gray-300 rounded-lg p-8 md:p-12 mb-16"
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
