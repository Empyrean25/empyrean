import { ContentCard } from "@/components/content-card";
import CustomSolutions from "@/components/custom-solutions";
import StackedCollage10 from "@/components/StackedCollage10";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hospitality Partner | Empyrean Real Estate Solutions",
  description:
    "Join Empyrean's Hospitality Circle and be part of a centralized real estate platform. Partner with us to provide accomodation across the metro!",
  openGraph: {
    title: "Hospitality Partner | Empyrean Real Estate Solutions",
    description:
      "Join Empyrean's Hospitality Circle and be part of a centralized real estate platform. Partner with us to provide accomodation across the metro!",
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

        <p className="text-[14px] md:text-lg text-center mb-14 max-w-4xl mx-auto">
          We are glad to have your interests in joining us at Empyrean as a Hospitality Hosting Partner. By having access to this page, you have
          expressed your interest and you have been invited to form a business partnership with Empyrean.
          <br />
          <br />
          This page shall serve as your <strong>Hospitality Partner Primer</strong> to help you navigate our system at Empyrean better. It contains FAQs, link directories, and everything you need to know about being a Hospitality Partner here at Empyrean.
        </p>

        {/* Your First Steps Section */}
        <section className="mb-4">
          <h2 className="text-2xl font-bold text-center mb-3">
            The Empyrean Hospitality Branding
          </h2>

          {/* stacked collage placed close under the heading */}
          <StackedCollage10
            spacingClass="mt-4"
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
        </section>

<p className="text-[10px] md:text-lg text-center mb-14 max-w-4xl mx-auto">
          Empyrean&apos;s branding rests on two of its core values: simplicity and quality. For all our designs, we strive to deliever simple yet elegant display and delievery of services. In this case, comfort, serenity, and beauty.
        </p>
        
<div className="mb-12" aria-label="Empyrean Hospitality: The Business Partnership Offer">
          <ContentCard title="Empyrean Hospitality: The Business Partnership Offer">
            <>
              <br />
              <br />
              Empyrean Hospitality will be managing your property as your Official Property Manager. We would be maintaining and taking care of your property while maximising its profitability at the same time.
              Your property will be fixed, courtesy of both the owner and Empyrean, according to Empyrean Branding and standards. Empyrean shall also be responsible in securing decorations and essentials for the property should it deem necessary and better.
               </>
          </ContentCard>
        </div>
              
        <div className="mb-12" aria-label="Documents Needed">
          <ContentCard title="Documents Needed">
            <>
              Empyrean Real Estate Corporation and the owner as its business partner shall execute two (2) douments namely: The SPA Document and the Memorandum of Agreement for Property Management
              <br />
              <br />
              The SPA Document shall serve as our official autorisation from the owner that Empyrean Real Estate Corporation
              shall from the date of execution become the official Property Manager of the owner for the property and can perform
              actions allowed by the owner strictly only to property managent and leasing; Meanwhile the Memorandum of Agreement for Property Managment shall serve as the document detailing the business partnership and its specifics.
            </>
          </ContentCard>
        </div>

        <div className="mb-12" aria-label="The Partnership Setups">
          <ContentCard title="The Setups">
            <>
              At Empyrean, we study each property accordingly and offer a business partnership setup according to the propety&apos;s location, potential demographics, among many others.
              <br />
              <br />
              We offer three setups: subleasing, 70/30 setup (utilities excluded), or 65/35 (utilities excluded). Setup is upon agreement of both business partner and the company.
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
              <strong>I am a freelancer, a broker, an agent under a broker, or a Real Estate firm, isn&apos;t Empyrean a competitor?</strong>
              <br /><br />
              No. Although Empyrean has in-house sellers to accommodate any influx of leads, we do not aim to compete with our partner professionals and experts in the industry. Instead, we aim to collaborate and partner with them to provide our primary service, which is supporting all key players in the industry, cultivating a centralised real estate system.
              <br /><br />
              This is why we incentivise our broker partners with attractive commission-split setups up to 75/25 in favour of the partner to support them in closing the leads our company generates.
              <br /><br />
              <strong>How do I avail better commission-splits as a partner?</strong>
              <br /><br />
              Better commission-splits are offered to our Official Broker Partners by invite-only, subject to Empyrean&apos;s Eligibility Requirements.
              <br /><br />
              <strong>I have a client looking to lease/buy. How can I avail your services?</strong>
              <br /><br />
              Please check our public listing database to see if one of our listings fits your client&apos;s requirements. If yes, you may request availability and viewing schedules. If not, you can request assistance from Empyrean by submitting a listing request.
              <br /><br />
              <strong>I have a property listing I want Empyrean to help market. How can I enlist the listing?</strong>
              <br /><br />
              For now, we only accept listings from partners who are direct to owners only. Please submit the full details and maximum ten (10) photos of the property through our link{" "}
              <a
                href="https://www.empyrean.ph/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-800"
              >
                here
              </a>{" "}
              or the submit listing option in our link directory with you as the listing contact.
              <br /><br />
              <strong>How do I submit a request for more listings or request property availability and/or viewing?</strong>
              <br /><br />
              Simply message the corresponding subgroup within our Sales Partner Platform in WhatsApp to be acknowledged and accomodated by a dedicated person from our team.
            </p>
          </div>
        </section>

        <p className="text-[14px] md:text-lg text-center mb-16 max-w-4xl mx-auto">
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
