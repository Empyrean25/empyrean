import ContactForm from "@/components/contact-form";
import { ContentCard } from "@/components/content-card";

export default function BuyerTenantGuestPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl  font-bold text-center mb-8">
          WHY DEAL WITH AN EMPYREAN?
        </h1>

        <p className="text-lg text-center mb-16 max-w-4xl mx-auto">
          Regardless of the nationality, the location, the type of deal, and
          whoever all associated persons are: Property Owner, Broker, or Agent,{" "}
          <span className="font-bold">you deserve accountability</span> and a
          company that will be with your before, during, and most especially
          after your Real Estate Transaction.
        </p>

        <div className="mb-16">
          <ContentCard
            title="Your Requirements Matter."
            description="Send us your information and requirements, we'll tap everything we can reach to satisfy your needs!"
          />
        </div>

        <div className="border border-gray-300 rounded-lg p-8 md:p-12">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
