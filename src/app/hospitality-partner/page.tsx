import { ContentCard } from "@/components/content-card";
import CustomSolutions from "@/components/custom-solutions";
import StackedCollage10 from "@/components/StackedCollage10";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hospitality Partner | Empyrean Real Estate Solutions",
  description:
    "Join Empyrean&apos;s Hospitality Circle and be part of a centralized real estate platform. Partner with us to provide accomodation across the metro!",
  openGraph: {
    title: "Hospitality Partner | Empyrean Real Estate Solutions",
    description:
      "Join Empyrean&apos;s Hospitality Circle and be part of a centralized real estate platform. Partner with us to provide accomodation across the metro!",
    type: "website",
  },
};

export default function BrokerAgentDeveloperPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Become a Hospitality Partner!
        </h1>

        <p className="text-sm md:text-base text-center mb-14 max-w-4xl mx-auto">
          We are glad to have your interests in joining us at Empyrean as a Hospitality Hosting Partner. This page shall serve as your <strong>Hospitality Partner Primer</strong> to help you understand our services, partnership offer, and navigate our system at Empyrean better. It contains FAQs, link directories, and everything you need to know about being a Hospitality Partner here at Empyrean.
        </p>

        {/* Your First Steps Section */}
        <section className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            The Empyrean Hospitality Branding
          </h2>

          {/* stacked collage with spacing and centered on all screens */}
          <div className="flex justify-center">
            <StackedCollage10
              spacingClass="mt-6"
              images={[
                "/assets/airbnb 1.jpeg",
                "/assets/airbnb 2.jpeg",
                "/assets/airbnb 3.jpeg",
                "/assets/airbnb 4.jpeg",
                "/assets/airbnb 5.jpeg",
                "/assets/airbnb 6.jpeg",
                "/assets/airbnb 7.jpeg",
                "/assets/airbnb 8.jpeg",
                "/assets/airbnb 9.jpeg",
                "/assets/airbnb 10.jpeg",
              ]}
            />
          </div>
        </section>

        <p className="text-sm md:text-base text-center mb-14 max-w-4xl mx-auto">
          Empyrean&apos;s branding rests on two of its core values: simplicity and quality. For all our designs, we strive to deliver simple yet elegant display and delivery of services. In this case, comfort, serenity, and beauty.
        </p>

        <div className="mb-12" aria-label="The Business Partnership Offer">
          <ContentCard title="The Business Partnership Offer">
            <>
              Empyrean Hospitality will be managing your property as your Official Property Manager. We would be maintaining and taking care of your property while maximising its profitability at the same time.
              Your property will be fixed, courtesy of both the owner and Empyrean, according to Empyrean Branding and standards. Empyrean shall also be responsible in securing decorations and essentials for the property should it deem necessary and better.
            </>
          </ContentCard>
        </div>
              
        <div className="mb-12" aria-label="Documents Needed">
          <ContentCard title="Documents Needed">
            <>
              Empyrean Real Estate Corporation and the owner as its business partner shall execute two (2) documents namely: The SPA Document and the Memorandum of Agreement for Property Management
              <br />
              <br />
              The SPA Document shall serve as our official authorization from the owner that Empyrean Real Estate Corporation
              shall from the date of execution become the official Property Manager of the owner for the property and can perform
              actions allowed by the owner strictly only to property management and leasing; Meanwhile the Memorandum of Agreement for Property Management shall serve as the document detailing the business partnership and its specifics.
            </>
          </ContentCard>
        </div>

        <div className="mb-12" aria-label="The Partnership Setups">
          <ContentCard title="The Partnership Setups">
            <>
              At Empyrean, we study each property accordingly and offer a business partnership setup according to the property&apos;s location, potential demographics, among many others.
              <br />
              <br />
              We offer three setups: subleasing, 70/30 setup (utilities excluded), or 65/35 (utilities included). Setup is upon agreement of both business partner and the company.
            </>
          </ContentCard>
        </div>

        <div className="mb-12" aria-label="Transparency and Reporting">
          <ContentCard title="Transparency and Reporting">
            <>
              At Empyrean, we value competency and accountability. In every step of our partnership, we will strive to always display these in all instances.
              <br />
              <br />
              We will be providing a Google Sheet for you to view your bookings and when to expect your next payout!
            </>
          </ContentCard>
        </div>

        {/* FAQs Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="bg-white border border-gray-300 rounded-lg p-8 md:p-12 text-gray-700">
            <p>
              <strong>What is Empyrean Hospitality?</strong>
              <br /><br />
              Empyrean Hospitality is our tradename for accommodation services utilising platforms like Airbnb, Agoda, Booking, among others for short-term leasing. It is associated with our Property Management Service, only with a separate branding since the service becomes a partnership with our client to accomodate guests.
              <br /><br />
              <strong>What does Empyrean Hospitality do?</strong>
              <br /><br />
              We partner up with property owners to put their properties up for short-term leasing for guest accomodations. Availing of our Property Management Service is a requisite for this.
              <br /><br />
              <strong>What is Empyrean Property Management Service?</strong>
              <br /><br />
              Our Property Management Service is a free-of-charge service we offer to our clients that designates our company to be their Official Property Manager for their property and authorise us to market their properties for both long-term, short-term leasing, or selling, whichever the property owner prefers.
            </p>
          </div>
        </section>

        <p className="text-sm md:text-base text-center mb-16 max-w-4xl mx-auto">
          Again, we are very glad to have you with us. Should you have any questions or feedback, please contact your Relationship Manager or reach out through our available channels.
          <br />
          <br />
          Upwards and onwards, flying high to the sky, through the clouds, Empyreans!
        </p>

        <div className="mt-12">
          <CustomSolutions />
        </div>
      </div>

      <Script
        id="structured-data"
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
