import ContactForm from "@/components/contact-form";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] flex flex-col md:flex-row">
      {/* Left: Info */}
      <section className="bg-[#494949] text-white flex flex-col justify-center items-start px-8 md:px-16 py-16 md:w-1/2 w-full">
        <div className="max-w-md w-full">
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 leading-tight">
            WE&lsquo;D LOVE TO
            <br />
            HEAR FROM YOU
          </h1>
          <p className="font-lora text-lg mb-8">
            Please tell us about yourself and share how we can assist or sort
            things for you.
          </p>
          <h2 className="font-cinzel text-2xl font-bold mb-2">GET IN TOUCH</h2>
          <p className="font-lora text-lg mb-4">+63 912 345 6789</p>
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="underline font-lora text-lg hover:text-gray-300"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="underline font-lora text-lg hover:text-gray-300"
            >
              Instagram
            </Link>
          </div>
        </div>
      </section>
      {/* Right: Form */}
      <section className="flex-1 flex items-center justify-center bg-white px-4 md:px-16 py-16">
        <div className="w-full max-w-xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
