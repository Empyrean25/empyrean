import Link from "next/link";

interface CategoryCardProps {
  title: string;
  href: string;
  bgColor: string;
}

export default function CategoryCard({
  title,
  href,
  bgColor,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`${bgColor} hover:opacity-90 transition-opacity`}
    >
      <div className="flex items-center justify-center h-[7.5rem] p-6 text-center">
        <h3 className="text-white font-medium">{title}</h3>
      </div>
    </Link>
  );
}
