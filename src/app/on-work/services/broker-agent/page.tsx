import Link from "next/link";
import PartnerLogo from "@/components/partner-logo";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broker Network | Empyrean - Join Our Real Estate Broker Network",
  description:
    "Join Empyrean's broker network and be part of a centralized real estate platform. Partner with us to provide effective services and achieve faster market turnover.",
  openGraph: {
    title:
      "Join Empyrean's Broker Network - Real Estate Partnership Opportunities",
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
          BE AN EMPYREAN BROKER PARTNER
        </h1>

        <p className="text-lg text-center mb-16 max-w-4xl mx-auto">
          Join our Broker Network and be one with us in centralising Real Estate
          and providing effective services minimising hindrance to smoother and
          faster market turnover.
        </p>

        <section className="mb-20" aria-label="Broker Network">
          <h2 className="text-2xl font-bold text-center mb-12">
            JOIN OUR BROKER NETWORK
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo imageSrc="/assets/partners/msjoyph.jpeg" hideName />
            <PartnerLogo imageSrc="/assets/partners/PHRCS.jpg" hideName />
            <PartnerLogo imageSrc="/assets/partners/remaxone-new.png" hideName />
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
