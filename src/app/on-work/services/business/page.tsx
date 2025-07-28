import Link from "next/link";
import PartnerLogo from "@/components/partner-logo";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business | Empyrean - Join Empyrean Business Network",
  description:
    "Join Empyrean Business Network.",
  openGraph: {
    title:
      "Join Empyrean Business Network",
    description:
      "Become an Empyrean partner and access everyone.",
    type: "website",
  },
};

export default function BusinessPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          INTRODUCING EMPYREAN COMMUNITIES
        </h1>

        <p className="text-[14px] md:text-lg text-center mb-16 max-w-4xl mx-auto">
          We are committed to fostering quality relationships as a vital part of our identity. That&apos;s why we cultivate <strong>Empyrean Business Network</strong> and <strong>Empyrean Professional Circles</strong>.</p> 

          <section
        className="flex flex-col md:flex-row py-8 px-8 md:px-16 container mx-auto mt-4"
        aria-label="Business Network and Professional Circles"
      >
        <div className="w-full md:w-1/2 text-center px-4 md:px-12 mb-12 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">Empyrean Business Network</h2>
          <p className="text-gray-800">
            Consists of eligible businesses that Empyrean have formed official partnerships with which the brand sees to also embody the company's core values and trusts to also deliver Empyrean-grade standard for outputs and results.
          </p>
        </div>
        <div className="w-full md:w-1/2 text-center px-4 md:px-12">
          <h2 className="text-3xl font-bold mb-6">Empyrean Professional Circle.</h2>
          <p className="text-gray-800">
          These are the friends we meet along the way. People and individuals from different industries and varying fields, fortes, and focus, which competencies we can tap for possible partnerships and collaborations.
          </p>
        </div>
      </section>
          
          <p className="text-[14px] md:text-lg text-center mb-16 max-w-4xl mx-auto">
          As our official partner and a potential connection, you&apos;d be referred to by Empyrean for any fitting active leads looking to avail respective services you or your business offers (subject to review and eligibility). 
          <br /> Not just this, you&apos;ll also be able to access our expanding network of businesses connected with Empyrean. 
          <br /> <br / >
          You will be assigned an <strong>Empyrean Relationship Manager</strong> to attend to all your inquiries 
          in accessing our Business Network and Professional Circles. More opportunities of partnerships and closing deals!
          <br />   
          <br />
          More opportunities of partnerships and closing deals! You access us, you access everyone.
        </p>

        <section className="mb-20" aria-label="Broker Network">
          <h2 className="text-2xl font-bold text-center mb-12">
            Empyrean Business Network
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo name="Broker Partner 1" />
            <PartnerLogo name="Broker Partner 2" />
            <PartnerLogo name="Broker Partner 3" />
            <PartnerLogo name="Broker Partner 4" />
          </div>
        </section>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-[#494949] hover:bg-[#494949]/80 text-white rounded-full py-6 px-12"
          >
            <Link href="/on-work/contact-us">PARTNER WITH US TODAY!!</Link>
          </Button>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Real Estate Broker Network",
            provider: {
              "@type": "Organization",
              name: "Empyrean",
            },
            description:
              "Join Empyrean's broker network and be part of a centralized real estate platform. Partner with us to provide effective services and achieve faster market turnover.",
            offers: {
              "@type": "Offer",
              category: "Real Estate Brokerage",
              description:
                "Join our Broker Network and be one with us in centralising Real Estate and providing effective services minimising hindrance to smoother and faster market turnover.",
            },
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
