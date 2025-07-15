interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors">
      <div className="flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-4 mb-2">
          {/* Circle container with relative positioning */}
          <div className="relative min-w-[60px] h-[60px]">
            <div className="bg-gray-200 rounded-full w-full h-full"></div>

            {/* Title text starting from center of circle */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-0 text-xl font-bold uppercase whitespace-nowrap">
              {title}
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-start">{description}</p>
      </div>
    </div>
  );
}
