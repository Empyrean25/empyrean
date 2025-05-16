interface PartnerLogoProps {
  name: string;
}

export default function PartnerLogo({ name }: PartnerLogoProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-300 rounded-full w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
        <span className="text-xl font-bold">LOGO</span>
      </div>
      <span className="sr-only">{name}</span>
    </div>
  );
}
