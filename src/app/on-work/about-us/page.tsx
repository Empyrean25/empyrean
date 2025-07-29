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
    "Learn about Empyrean's mission, values, and unique approach to simplifying and empowering real estate in the Philippines. Discover how we serve property seekers, owners, and agents alike.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 px-4 md:px-24">
      <section className="pt-12">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to Empyrean
        </h1>
        <p className="text-center max-w-2xl mx-auto text-lg text-muted-foreground">
          We are a people-first company reimagining real estate in the
          Philippines. We equip property seekers, owners, and real estate
          professionals with streamlined tools and services that allow them to
          connect and close deals faster than ever before.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          What We Do
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <ServiceCard
            icon="search"
            title="Property Search"
            description="Browse listings from owners, brokers, and developers across the country."
          />
          <ServiceCard
            icon="building"
            title="Owner Services"
            description="List your property for rent or sale. We’ll match you with qualified prospects."
          />
          <ServiceCard
            icon="user"
            title="Agent Platform"
            description="Use our tools to manage leads, connect with clients, and close deals faster."
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Core Values
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <CoreValueCard
            title="People First"
            description="We listen and build solutions that prioritize human connection and well-being."
          />
          <CoreValueCard
            title="Radical Simplicity"
            description="We reduce complexity in every process, tool, and touchpoint."
          />
          <CoreValueCard
            title="Integrity by Default"
            description="We are honest, transparent, and guided by what’s right—not what’s easy."
          />
        </div>
      </section>

      <div className="my-6">
        <section
          className="py-6 px-8 md:px-16 text-center container mx-auto gap-6 flex flex-col items-center mb-12"
          aria-label="Our Brands"
        >
          <h2 className="text-2xl font-semibold">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <Image
              src="/assets/logo-metro.png"
              alt="Metro Realty"
              width={120}
              height={60}
              className="mx-auto"
            />
            <Image
              src="/assets/logo-crown.png"
              alt="Crown Asia"
              width={120}
              height={60}
              className="mx-auto"
            />
            <Image
              src="/assets/logo-avalon.png"
              alt="Avalon Realty"
              width={120}
              height={60}
              className="mx-auto"
            />
            <Image
              src="/assets/logo-federal.png"
              alt="Federal Land"
              width={120}
              height={60}
              className="mx-auto"
            />
          </div>
        </section>

        <div className="mt-12">
          <CustomSolutions />
        </div>
      </div>

      <section className="text-center text-sm text-muted-foreground">
        <p>
          Want to know more?{" "}
          <Link href="/contact" className="underline">
            Contact us
          </Link>{" "}
          and let’s talk about what you need.
        </p>
      </section>
    </div>
  );
}
