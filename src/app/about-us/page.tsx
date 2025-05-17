import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { CoreValueCard } from "@/components/core-value-card";
import CustomSolutions from "@/components/custom-solutions";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Empyrean - Your Trusted Real Estate Partner",
  description:
    "Learn about Empyrean's mission, vision, and core values. We are a one-stop gateway to the entire real estate market, offering full access with transparency and accountability.",
  openGraph: {
    title: "About Empyrean - Your Trusted Real Estate Partner",
    description:
      "Discover Empyrean's mission to become the beacon of quality standards in real estate services. Learn about our core values of simplicity, competency, accountability, and quality.",
    type: "website",
  },
};

export default function AboutPage() {
  const services = [
    {
      title: "PROPERTY MANAGEMENT",
      description:
        "Whether you require solutions for maintenance and upkeep or profit and brokerage, we can manage your property for you.",
    },
    {
      title: "BROKERAGE",
      description:
        "You cannot go wrong with our service. It's our promise. With the help of our company branding, in-house sellers, and our incentivised broker network. We can sell or lease out your property faster than the usual.",
    },
    {
      title: "MORE COMING SOON...",
      description:
        "Our company is excited to centralize the market and put everyone's forte to good work under one name branding for established system and accountability. We will be opening more services available for you",
    },
  ];

  const coreValues = [
    {
      title: "SIMPLICITY",
      description:
        "We believe real estate should be straightforward, not overwhelming. That's why we've built a system that simplifies every step of your property search to closing deals. When you come to us, you won't need to juggle multiple platforms or navigate complex processes. We make the entire experience clear, transparent, and efficient.",
    },
    {
      title: "COMPETENCY",
      description:
        "We know deep industry knowledge, sharp market insight, and unwavering professionalism in every interaction matters—whether it's your first home, listing a property, or handling complex negotiations, you can count on our expertise in what we're doing—and that we'll do it well. We're not just here to participate in the industry; we're here to elevate it.",
    },
    {
      title: "ACCOUNTABILITY",
      description:
        "We believe in accountability that brings peace of mind—not pressure, finger-pointing, or blame-shifting. When you work with us, you have a steady point of reference—one you can return to anytime for clarity, guidance, and solutions. You know where to turn. We stand behind our work, our people, and our systems—so you can move forward with confidence.",
    },
    {
      title: "QUALITY",
      description:
        "Excellence isn't optional—it's our baseline. Every interaction you have with us reflects a high standard of quality that permeates everything we do. Whether it's the quality of our listings, the accuracy of our advice, or the thoroughness of our service, we hold ourselves to a level of performance that builds trust and lasting relationships.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Who We Are Section */}
      <section
        className="flex flex-col md:flex-row relative h-[calc(100vh-6rem)]"
        aria-label="Who We Are"
      >
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-12 md:p-16 lg:p-20">
          <h2 className="text-3xl md:text-4xl  font-bold mb-6">
            What is Empyrean?
          </h2>
          <p className="text-gray-800 mb-8">
            A one-stop gateway to the entire real estate market—offering full
            access without the limitations of personal agendas, dishonest
            service, or incompetence.
            <br />
            <br />
            Backed by strong branding, an established system, and built-in
            accountability in its name, the platform delivers a seamless,
            transparent, and results-oriented experience.
            <br />
            <br />
            Properties move efficiently, trust is preserved through cultivating
            quality relationships, and objectives are achieved with simplicity,
            competency, accountability, quality, and consistency among all.
          </p>
          <Button
            asChild
            className="inline-block bg-[#494949] text-white px-12 py-2 rounded-full hover:bg-gray-700"
          >
            <Link href="/about/learn-more">Learn more</Link>
          </Button>
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/assets/about-hero-img.jpg"
              alt="Hands holding real estate model"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
          <div className="w-36 h-36 rounded-full flex items-center justify-center">
            <Image
              src="/assets/empyrean-logo.png"
              alt="Empyrean Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section
        className="flex flex-col md:flex-row py-8 px-8 md:px-16 container mx-auto mt-4"
        aria-label="Mission and Vision"
      >
        <div className="w-full md:w-1/2 text-center px-4 md:px-12 mb-12 md:mb-0">
          <h2 className="text-3xl  font-bold mb-6">MISSION</h2>
          <p className="text-gray-800">
            To become the beacon of quality standard and centralised system and
            the quality partner of all licensed practitioners and clients alike
            in providing Real Estate Services and performing Real Estate
            Transactions in the country
          </p>
        </div>
        <div className="w-full md:w-1/2 text-center px-4 md:px-12">
          <h2 className="text-3xl  font-bold mb-6">VISION</h2>
          <p className="text-gray-800">
            To maintain an honest, effective, and centralised system of doing
            Real Estate in the country.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-8 px-8 md:px-16 text-center container mx-auto"
        aria-label="Core Values"
      >
        <h2 className="text-3xl  font-bold mb-4">CORE VALUES</h2>
        <h3 className="text-2xl  mb-12">OUR Y&apos;s</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value) => (
            <CoreValueCard
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section
        className="py-8 px-8 md:px-16 text-center container mx-auto gap-6 flex flex-col items-center"
        aria-label="Our Services"
      >
        <h2 className="text-3xl  font-bold mb-6">OUR SERVICES</h2>
        <p className="text-gray-800 max-w-3xl mx-auto mb-12">
          We offer comprehensive real estate management solutions designed to
          make property ownership effortless and profitable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <CustomSolutions />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Empyrean",
            description:
              "Learn about Empyrean's mission, vision, and core values in real estate services.",
            mainEntity: {
              "@type": "Organization",
              name: "Empyrean",
              description:
                "A one-stop gateway to the entire real estate market—offering full access without the limitations of personal agendas, dishonest service, or incompetence.",
              mission:
                "To become the beacon of quality standard and centralised system and the quality partner of all licensed practitioners and clients alike in providing Real Estate Services and performing Real Estate Transactions in the country",
              vision:
                "To maintain an honest, effective, and centralised system of doing Real Estate in the country.",
              coreValues: coreValues.map((value) => ({
                "@type": "Thing",
                name: value.title,
                description: value.description,
              })),
            },
          }),
        }}
      />
    </main>
  );
}
