interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors">
      <div className="flex flex-col items-start justify-center gap-6">
        <div className="flex items-center">
          {/* Circle */}
          <div className="bg-gray-200 rounded-full w-[60px] h-[60px] flex-shrink-0" />
          
          {/* Title starting from center of circle */}
          <h3 className="text-xl font-bold uppercase ml-[-30px] pl-[30px]">
            {title}
          </h3>
        </div>

        <p className="text-gray-700 text-start">{description}</p>
      </div>
    </div>
  );
}
