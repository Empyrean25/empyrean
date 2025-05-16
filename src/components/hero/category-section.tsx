import CategoryCard from "./category-card";

export default function CategorySection() {
  const categories = [
    {
      title: "I AM A PROPERTY OWNER",
      href: "/property-owner",
      bgColor: "bg-[#494949]",
    },
    {
      title: "I AM A BUYER/TENANT/GUEST",
      href: "/buyer-tenant",
      bgColor: "bg-[#595858]",
    },
    {
      title: "I AM A BROKER/DEVELOPER",
      href: "/broker-developer",
      bgColor: "bg-[#9f9f9f]",
    },
    {
      title: "I NEED MORE HELP",
      href: "/help",
      bgColor: "bg-[#cfcfcf]",
    },
  ];

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          href={category.href}
          bgColor={category.bgColor}
        />
      ))}
    </section>
  );
}
