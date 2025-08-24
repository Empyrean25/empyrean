import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { ContentCard } from "@/components/content-card";

export const metadata: Metadata = {
  title: "Sales Partner | Empyrean Real Estate Solutions",
  description:
    "Join Empyrean's Broker Circle and be part of a centralized real estate platform. Partner with us to provide effective services and achieve faster market turnover.",
  openGraph: {
    title:
      "Sales Partner | Empyrean Real Estate Solutions",
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
          WELCOME TO EMPYREAN, SALES PARTNER!
        </h1>

        <p className="text-[14px] md:text-lg text-center mb-16 max-w-4xl mx-auto">
          We are glad to have your interests in joining us at Empyrean as a Sales Partner whether
          an In-House or under a separate Broker Partner.
          By seeing this page, you have expressed your interests and you have been invited 
          to be part of our Professional Circles. We should have your full contact deails
          by now. If you haven&apos;t yet, please make sure to formally sign up through our contact form.
          <br />
          This page shall serve as your <strong>Sales Partner Primer</strong> to help you navigate our system at Empyrean better. 
        </p>

        {/* WHY JOIN US Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-6">WHY JOIN US</h2>

          <div className="bg-[#808080] rounded-lg p-6 text-white">
            <p>
              We&rsquo;re aiming to centralise the industry and streamline the
              process of doing real estate in the country; and we&rsquo;d need
              your help.
            </p>
            <br />
            <p>
              Empyrean Real Estate Solutions will establish a stronger presence
              in its lifetime. This entails aggressive market penetration and
              brand awareness. We will make noise locally with plans in taking
              it internationally to attract and generate leads from targeted
              overseas locations to the Philippines.
            </p>
            <br />
            <p>
              We generate leads, you close the deals. That&rsquo;s why
              we&rsquo;d like to have you as partner.
            </p>
            <br />
            <p>
              It&rsquo;s no question, we know you close deals best. Upon
              generating leads and client requirements are made-known, we will
              guide and direct these inquiries to the right broker to best fit
              their needs. Let this broker be you.
            </p>
            <br />
            <p>
              Join us streamline the process and be our partner in Sales and
              Leasing.
            </p>
          </div>
        </section>

        {/* Three Content Cards */}
        <div className="space-y-12 mb-10">
          <ContentCard
            title="We offer a generous commission structure with our partners"
            description="We are not in it for the commission. For every transaction closed with our generated looking-clients or even on our direct listings and properties our company directly manages, we give up to 70% commission."
          />
          <ContentCard
            title="We offer our services, not just to our clients, but also to partners"
            description="We are committed to providing competent real estate service. As we are big on getting connected and our network, what we have to offer to our clients, even our visioned marketing powerhouse, we are also offering you too, with the commission setup also in favour of you! We can assist you in any way or any thing you might need from Empyrean with Empyrean Standards."
          />
          <ContentCard
            title="You are also our clients"
            description="We are also at your service, inform us of any of your needs, and we'll tailor a custom solution for you."
          />
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-[#494949] hover:bg-[#494949]/80 text-white rounded-full py-6 px-12"
          >
            <Link href="/contact-us">Become a Broker Partner</Link>
          </Button>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Real Estate Broker Circle",
            provider: {
              "@type": "Organization",
              name: "Empyrean",
            },
            description:
              "Join Empyrean's broker circle and be part of a centralized real estate platform. Partner with us to provide effective services and achieve faster market turnover.",
            offers: {
              "@type": "Offer",
              category: "Real Estate Brokerage",
              description:
                "Join our Broker Circle and be one with us in centralising Real Estate and providing effective services minimising hindrance to smoother and faster market turnover.",
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
