import Link from "next/link";
import PartnerLogo from "@/components/partner-logo";
import { Button } from "@/components/ui/button";

export default function BrokerAgentDeveloperPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          BE AN EMPYREAN PARTNER
        </h1>

        <p className="text-lg text-center mb-16 max-w-4xl mx-auto">
          Join our Broker Network and be one with us in centralising Real Estate
          and providing effective services minimising hindrance to smoother and
          faster market turnover.
        </p>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">
            JOIN OUR BROKER NETWORK
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
            className="bg-[#494949] hover:bg-gray-800 text-white rounded-full py-6 px-12"
          >
            <Link href="/contact">PARTNER WITH US TODAY!!</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
