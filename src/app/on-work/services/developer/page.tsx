import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/Marquee";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Services | Empyrean - Real Estate Development Partners",
  description:
    "Partner with Empyrean for real estate development. We work with leading developers including Shangri-La, APMC, SMDC, Ayala Land, and more to bring quality properties to market.",
  openGraph: {
    title: "Developer Services | Empyrean - Real Estate Development Partners",
    description:
      "Connect with Empyrean's network of premium real estate developers. We partner with industry leaders to deliver exceptional properties and development opportunities.",
    type: "website",
  },
};

export default function BrokerAgentDeveloperPage() {
  const partners = [
    {
      name: "Shangri-La",
      image: "/assets/partners/shang.png",
    },
    {
      name: "APMC",
      image: "/assets/partners/apmc.png",
    },
    {
      name: "SMDC",
      image: "/assets/partners/smdc.png",
    },
    {
      name: "Ayala Land",
      image: "/assets/partners/ayalaland.png",
    },
    {
      name: "Federal Land",
      image: "/assets/partners/federalland.png",
    },
    {
      name: "Megaworld",
      image: "/assets/partners/megaworld.png",
    },
    {
      name: "Century Properties",
      image: "/assets/partners/century.png",
    },
    {
      name: "Rockwell Land",
      image: "/assets/partners/rockwell_land.png",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-6rem)] flex flex-col">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <section className="mb-20" aria-label="Developer Partners">
          <h1 className="text-2xl font-bold text-center mb-12">
            OUR DEVELOPER PARTNERS
          </h1>

          <Marquee speed={50}>
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.image}
                alt={`${partner.name} - Real Estate Developer Partner`}
                width={300}
                height={300}
                className="object-contain"
              />
            ))}
          </Marquee>
        </section>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-[#494949] hover:bg-[#494949]/80 text-white rounded-full py-6 px-12"
          >
            <Link href="/contact-us">PARTNER WITH US TODAY!!</Link>
          </Button>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Real Estate Developer Services",
            provider: {
              "@type": "Organization",
              name: "Empyrean",
            },
            description:
              "Partner with Empyrean for real estate development services. We collaborate with leading developers to bring quality properties to market.",
            offers: {
              "@type": "Offer",
              category: "Real Estate Development",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Developer Partners",
              itemListElement: partners.map((partner, index) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Organization",
                  name: partner.name,
                },
                position: index + 1,
              })),
            },
          }),
        }}
      />
    </main>
  );
}
