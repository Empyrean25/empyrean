import Image from "next/image";
import { ServiceCard } from "@/components/service-card";
import { CoreValueCard } from "@/components/core-value-card";
import CustomSolutions from "@/components/custom-solutions";
import { PartnerLogo } from "@/components/partner-logo"; // ✅ Make sure this exists

export default function AboutUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Section 1 */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Who We Are
        </h1>
        <p className="text-[14px] md:text-base text-gray-800">
          Empyrean is a Real Estate Solutions company offering various
          professional services within the Philippine Real Estate market. Our
          goal is to make it easy for any buyer, seller, owner, or investor to
          effectively and efficiently address their Real Estate needs through
          our one-stop platform.
        </p>
      </section>

      {/* Section 2: Services */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="Brokerage"
            description="We help clients buy, sell, and lease properties with end-to-end guidance."
          />
          <ServiceCard
            title="Property Management"
            description="We take care of daily operations, tenant concerns, and property maintenance."
          />
          <ServiceCard
            title="Data & Custom Solutions"
            description="We provide reports, automation, and tailored services for real estate professionals and businesses."
          />
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <CoreValueCard title="Simplicity" />
          <CoreValueCard title="Competence" />
          <CoreValueCard title="Accountability" />
          <CoreValueCard title="Quality Standard" />
        </div>
      </section>

      {/* Section 4: Our Brands (Wrapped in styled box with logos resized) */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Our Brands
        </h2>
        <div className="mb-12 bg-gray-100 border border-gray-300 rounded-lg p-8 md:p-12">
          <p className="text-[14px] md:text-base text-gray-800 mb-6">
            With Empyrean, you&rsquo;d have our guarantee that we will reflect
            our core values in all our transactions: we are simple, we are
            competent, we are accountable, and we are setting a quality
            standard.
            <br />
            <br />
            We are centralising Real Estate so it doesn&rsquo;t have to be
            complicated for you. Your effective Real Estate Solutions, on us.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {/* Logos with exact 50% scale: w-32 h-16 */}
            <div className="w-32 h-16">
              <PartnerLogo
                imageSrc="/assets/partners/empyreanrealestate.png"
                name="Empyrean Brokerage Arm"
              />
            </div>
            <div className="w-32 h-16">
              <PartnerLogo
                imageSrc="/assets/partners/empyreanpropertymanagement.png"
                name="Empyrean Property Management"
              />
            </div>
            <div className="w-32 h-16">
              <PartnerLogo
                imageSrc="/assets/partners/empyreandata.png"
                name="Empyrean Data Solutions"
              />
            </div>
            <div className="w-32 h-16">
              <PartnerLogo
                imageSrc="/assets/partners/airaloha.png"
                name="Air Aloha: Stay Management"
              />
            </div>
            <div className="w-32 h-16">
              <PartnerLogo
                imageSrc="/assets/partners/securetayo.png"
                name="SecureTayo by Empyrean"
              />
            </div>
            <div className="w-32 h-16">
              <PartnerLogo
                imageSrc="/assets/partners/sellercentral.png"
                name="Seller Central by Empyrean"
              />
            </div>
            <div className="w-32 h-16">
              <PartnerLogo
                imageSrc="/assets/partners/rentcentral.png"
                name="Rent Central by Empyrean"
              />
            </div>
            <div className="w-32 h-16">
              <PartnerLogo
                imageSrc="/assets/partners/developercentral.png"
                name="Developer Central by Empyrean"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Custom Solutions */}
      <section>
        <CustomSolutions />
      </section>
    </div>
  );
}
