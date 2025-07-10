import HeroSection from "@/components/hero/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Empyrean - Your Trusted Partner in Business Solutions",
@@ -8,29 +8,5 @@ export const metadata: Metadata = {
};

export default function Home() {
return (
    <main className="min-h-screen flex flex-col">
      <article>
        <HeroSection />
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Empyrean",
            url: "https://empyrean.com",
            description:
              "Empyrean provides innovative business solutions and services to help your company grow.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://empyrean.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </main>
  );
}
