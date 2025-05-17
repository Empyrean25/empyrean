import Link from "next/link";

export default function CustomSolutions() {
  return (
    <div className="bg-[#494949] text-white py-12 px-8 w-full md:px-16 rounded-lg text-start flex flex-col items-start justify-start">
      <h2 className="text-2xl  font-bold mb-4">NEED A CUSTOM SOLUTION?</h2>
      <p className="max-w-3xl mb-8">
        Our company is built on quality relationships based on competency, trust
        and accountability. We can create tailored real estate management
        packages to meet your specific requirements.
      </p>
      <Link
        href="/contact-us"
        className="inline-block bg-white text-[#494949] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
      >
        CONTACT US
      </Link>
    </div>
  );
}
