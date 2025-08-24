import { ContentCard } from "@/components/content-card";
import CustomSolutions from "@/components/custom-solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Partner | Empyrean Real Estate Solutions",
  description:
    "Join Empyrean's Broker Circle and be part of a centralized real estate platform. Partner with us to provide effective services and achieve faster market turnover.",
  openGraph: {
    title: "Sales Partner | Empyrean Real Estate Solutions",
    description:
      "Become an Empyrean broker partner and access our centralized real estate platform. Join our network of professional brokers for better market reach and faster transactions.",
    type: "website",
  },
};

export default function BrokerAgentDeveloperPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          WELCOME TO EMPYREAN, SALES PARTNER!
        </h1>

        <p className="text-[14px] md:text-lg text-center mb-16 max-w-4xl mx-auto">
          We are glad to have your interests in joining us at Empyrean as a Sales Partner whether
          an In-House or under a separate Broker Partner.
          <br />
          <br />
          By having access to this page, you have expressed your interests and you have been invited
          to form partnership. We should have your full contact details
          by now. If you haven&apos;t yet, please make sure to formally sign up through our{" "}
              <a
                href="https://www.empyrean.ph/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-800"
              >
                contact form
              </a>
              .
          <br />
          <br />
          This page shall serve as your <strong>Sales Partner Primer</strong> to help you navigate our system at Empyrean better. It shall contain FAQs, link directories, and everything you need to
              know as a Sales Partner here at Empyrean..
        </p>

        {/* Your First Steps Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-6">Your First Steps</h2>
        </section>

        <div className="mb-12" aria-label="Join Empyrean Partner Announcements in Viber">
          <ContentCard title="Join Empyrean Partner Announcements in Viber">
            <>
              While your email address is automatically added to our mailing list, joining our
                Announcement channel ensures you receive realtime updates for any of our opportunities,
                system improvements, and events.
                <br />
                <br />
              You may join Empyrean Parner Announcement by clicking {" "}
              <a
                href="https://invite.viber.com/?g2=AQBuDuOs8ZakelU1VdhF1fsQyuyf9PWwqRG2%2FtfJjnjrMG8X%2BaGMrHnbBzjOu5rx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-800"
              >
                here
              </a>
              .
            </>
          </ContentCard>
        </div>

        <div className="mb-12" aria-label="Join Empyrean Sales Partner Platform in WhatsApp">
          <ContentCard title="Join Empyrean Sales Partner Platform in WhatsApp">
            <>
              While we are working on our very own Empyrean One-stop Platform as Application, we are currently using WhatsApp as our main medium of correspondence and coordination for any requests.
                <br />
                <br />
                Here you will see subgroups where Sales Partners discuss, and there&apos;s also subgroups to request for Property Listings and requests for Listing Availability and Schedules.
              <br />
              <br />
          Join the Sales Partner Platform on {" "}
              <a
                href="https://chat.whatsapp.com/B5Ni4SDNXm60QZ7JXnlPVr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-800"
              >
                WhatsApp
              </a>.
            </>
          </ContentCard>
        </div>

        <div className="space-y-12 mb-10">
          <ContentCard title="Take note of our Link Directory">
            <>
              For your convenience, we have prepared a directory at your disposal when you get lost in our system.
              <br />
              <br />
          Visit our {" "}
              <a
                href="https://empyreanrealestate.carrd.co"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-800"
              >
                link directory
              </a>.
            </>
          </ContentCard>
        </div>

         {/* FAQs Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        </section>

        <p><strong>I am a freelancer, a broker, an agent under a broker, or a Real Estate firm, isn&apos;t
Empyrean a competitor?</strong><br /><br />
          No. Although Empyrean would be having in-house sellers to accommodate any influx of
leads, we do not aim to compete with our partner professionals and experts in the
industry. Instead, we aim to collaborate and partner with them to provide our primary
service, which is providing support to all key players in the industry as our primary
service thereby cultivating a centralised system of conducting real estate.<br /><br />
This is why we incentivise our broker partners with an attractive commission-split setups
up to 75/25 splits in favour of the partner to support our partners in closing the leads
our company has generated.<br /><br />

          <strong>How do I avail better commission-splits as a partner.</strong><br /><br />

          Better commission-splits are offered to our Official Broker Partners offered by invite-
only subject to Empyrean&apos;s Eligibility Requirements.<br /><br />

           <strong>I have a client looking to lease/buy. How can I avail your services?</strong><br /><br />

          Please go through our public listing database if one of our listings fit your clint&apos;s requirements. If yes, you may ask for availability and viewing schedule accordingly. If no, you have the option to request assistance from Empyrean to explore the market for you by submitting a listing request. 
        <br /><br />

           <strong>How do I submit a request?</strong><br /><br />

        Simply message a corresponding subgroup within our Sales Partner Platform to be acknolwedged by our dedicated team.<br /><br />
        </p>

        <p className="text-[14px] md:text-lg text-center mb-16 max-w-4xl mx-auto">
      Again, we are very glad to have you with us. Should you have any questions or feedback, please feel free to let us know by contacting your Relationship Manager or contacting us through our available channels.
              <br />
              <br />
              Upwards and onwards, flying high to the sky, through the clouds, Empyreans!
        </p>
        
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
