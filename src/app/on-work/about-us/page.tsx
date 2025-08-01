import Image from "next/image";
import { ServiceCard } from "@/components/service-card";
import { CoreValueCard } from "@/components/core-value-card";
import CustomSolutions from "@/components/custom-solutions";
import { Metadata } from "next";
import Link from "next/link";
import PartnerLogo from "@/components/partner-logo";

export const metadata: Metadata = {
  title: "About Us | Empyrean Real Estate Solutions - Your all-in-one access to the Philippine Real Estate",
  description:
    "Learn about Empyrean's mission, vision, and core values. We are a one-stop gateway to the entire real estate market, offering full access with transparency and accountability.",
  openGraph: {
    title: "About Empyrean Real Estate Solutions - Your all-in-one access to the Philippine Real Estate",
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
      <section className="flex flex-col md:flex-row min-h-fit md:min-h-[calc(100vh-6rem)] relative overflow-hidden">
        {/* LEFT: Text */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 px-6 pt-8 md:pt-2 pb-8 md:pb-16 lg:pb-20 md:pl-16 md:pr-16 lg:pl-20 lg:pr-20 z-10 bg-white order-1 md:order-1">
          <Link href="/on-work/home">
            <Image
              src="/assets/empyrean.png"
              alt="Empyrean Banner"
              width={275}
              height={125}
              className="object-contain mb-4 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            />
          </Link>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Empyrean?</h2>
          <p className="text-gray-800 mb-8 text-base md:text-lg leading-relaxed text-justify">
            Empyrean Real Estate Solutions is one-stop gateway to the entire Philippine Real Estate—offering full
            access from Brokerage: Project Selling, Resale and Leasing; Home Improvement: Planning, Construction,
            and Renovation, and even acquiring your Furnitures and Decorations.
            <br /><br />
            We are a company backed by strong presence and branding, built-in accountability in its name,
            established system and platform, and an expanding network of business partners built through fostering
            quality relationships that reflects the <strong>Empyrean Mark</strong> delivering quality,
            service-based, and results-oriented personalised experience.
            <br /><br />
            When you access us, you will access everyone. Your Real Estate, on us here at Empyrean.
            Done with simplicity, competency, accountability, quality, and consistency above all.
          </p>
        </div>

        {/* RIGHT: Hero Image */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto order-2 md:order-2">
          <Image
            src="/assets/about-hero-img.jpg"
            alt="Real estate illustration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* MOBILE: Logo */}
        <div className="md:hidden w-24 h-24 relative mx-auto mt-10 order-3">
          <Image
            src="/assets/empyrean-logo.png"
            alt="Empyrean Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* DESKTOP: Floating logo */}
        <div className="hidden md:flex absolute bottom-12 left-1/2 transform -translate-x-1/2 w-36 h-36 z-20">
          <Image
            src="/assets/empyrean-logo.png"
            alt="Empyrean Logo"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="mt-16 px-6 md:px-16">
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 md:p-12 w-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">OUR BRANDS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              <PartnerLogo imageSrc="/assets/partners/empyreanrealestate.png" name="Empyrean Brokerage Arm" />
              <PartnerLogo imageSrc="/assets/partners/empyreanpropertymanagement.png" name="Empyrean Property Management Arm" />
              <PartnerLogo imageSrc="/assets/partners/empyreancommunities.png" name="Empyrean Communities" />
              <PartnerLogo imageSrc="/assets/partners/empyreanbusinessnetwork.png" name="Empyrean Business Network" />
              <PartnerLogo imageSrc="/assets/partners/empyreanprofessionalcircles.png" name="Empyrean Professional Circles" />
              <PartnerLogo imageSrc="/assets/partners/empyreanservices.png" name="Empyrean Services" />
              <PartnerLogo imageSrc="/assets/partners/thegoodproperties.png" name="TikTok: Manila Luxury Real Estate" />
              <PartnerLogo imageSrc="/assets/partners/budgetrealestate.png" name="TikTok: Budget Real Estate" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-8 md:px-16 container mx-auto" aria-label="Mission and Vision">
        <div className="flex flex-col md:flex-row gap-12 text-center">
          <div className="w-full md:w-1/2 px-4 md:px-12">
            <h2 className="text-3xl font-bold mb-6">MISSION</h2>
            <p className="text-gray-800">
              Become a brand of quality standard, centralised system, and
              the quality partner of all professionals and clients alike
              in doing Real Estate in the country.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-12">
            <h2 className="text-3xl font-bold mb-6">VISION</h2>
            <p className="text-gray-800">
              A centralised system of doing Real Estate in the country built through quality relationships and commitment to quality and accountable service.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-6 px-8 md:px-16 text-center container mx-auto">
        <h2 className="text-3xl font-bold mb-8">CORE VALUES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value) => (
            <CoreValueCard key={value.title} title={value.title} description={value.description} />
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-8 md:px-16 text-center container mx-auto">
        <h2 className="text-3xl font-bold mb-1">OUR SERVICES</h2>
        <p className="text-gray-800 max-w-3xl mx-auto mb-6">
          We offer comprehensive real estate management solutions designed to
          make property ownership effortless and profitable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>

        <div className="w-full">
          <CustomSolutions />
        </div>
      </section>

      {/* Structured Data */}
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
