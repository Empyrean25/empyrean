import Image from "next/image";
import { ServiceCard } from "@/components/service-card";
import { CoreValueCard } from "@/components/core-value-card";
import CustomSolutions from "@/components/custom-solutions";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "About Us | Empyrean Real Estate Solutions - Your all-in-one access to the Philippine Real Estate",
  description:
    "Learn about Empyrean's mission, vision, and our team dedicated to simplifying and elevating your real estate journey in the Philippines.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/assets/about-us-hero.jpg"
          alt="Empyrean Hero"
          layout="fill"
          objectFit="cover"
          className="brightness-[.25]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Your all-in-one access to the Philippine Real Estate
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 px-8 md:px-16 text-center container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Mission and Vision</h2>
        <p className="text-lg max-w-3xl mx-auto">
          We are on a mission to centralize and simplify Philippine Real Estate.
          By bridging clients, developers, brokers, landlords, tenants, and
          service providers — we help people make smarter property decisions
          with a platform built on transparency, reliability, and trust.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-8 md:px-16 text-center container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Property Sales & Leasing"
            description="Helping you buy, sell, or lease property with expert guidance and market insights."
            icon="home"
          />
          <ServiceCard
            title="Property Management"
            description="Comprehensive solutions for property owners: from tenant screening to maintenance."
            icon="building"
          />
          <ServiceCard
            title="Real Estate Consulting"
            description="Get personalized advice whether you’re investing, developing, or managing property."
            icon="lightbulb"
          />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 px-8 md:px-16 text-center container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CoreValueCard
            title="Simplicity"
            description="We believe real estate should be easy to understand and manage."
          />
          <CoreValueCard
            title="Competence"
            description="We continuously sharpen our knowledge and execution to serve you better."
          />
          <CoreValueCard
            title="Accountability"
            description="We take full ownership of our service and your experience."
          />
          <CoreValueCard
            title="Quality Standards"
            description="We hold ourselves to high standards and expect the same from our partners."
          />
        </div>
      </section>

      {/* OUR BRANDS SECTION */}
      <div className="mt-12 mb-12">
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 md:p-12 container mx-auto">
          <section
            className="text-center flex flex-col items-center"
            aria-label="Our Brands"
          >
            <h2 className="text-3xl font-bold mb-6">OUR BRANDS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <PartnerLogo
                imageSrc="/assets/partners/empyreanrealestate.png"
                name="Empyrean Brokerage Arm"
              />
              <PartnerLogo
                imageSrc="/assets/partners/empyreanpropertymanagement.png"
                name="Empyrean Property Management Arm"
              />
              <PartnerLogo
                imageSrc="/assets/partners/empyreancommunities.png"
                name="Empyrean Communities"
              />
              <PartnerLogo
                imageSrc="/assets/partners/empyreanbusinessnetwork.png"
                name="Empyrean Business Network"
              />
              <PartnerLogo
                imageSrc="/assets/partners/empyreanprofessionalcircles.png"
                name="Empyrean Professional Circles"
              />
              <PartnerLogo
                imageSrc="/assets/partners/empyreanservices.png"
                name="Empyrean Services"
              />
              <PartnerLogo
                imageSrc="/assets/partners/thegoodproperties.png"
                name="TikTok: Manila Luxury Real Estate"
              />
              <PartnerLogo
                imageSrc="/assets/partners/budgetrealestate.png"
                name="TikTok: Budget Real Estate"
              />
            </div>
          </section>
        </div>
      </div>

      {/* CUSTOM SOLUTIONS */}
      <div className="mt-12 w-full">
        <CustomSolutions />
      </div>
    </div>
  );
}
