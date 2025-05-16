import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/Marquee";

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
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">
            OUR DEVELOPER PARTNERS
          </h2>

          <Marquee speed={50}>
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.image}
                alt={partner.name}
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
            className="bg-[#494949] hover:bg-gray-800 text-white rounded-full py-6 px-12"
          >
            <Link href="/contact">PARTNER WITH US TODAY!!</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
