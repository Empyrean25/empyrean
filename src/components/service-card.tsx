interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors">
      <div className="flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="relative w-[60px] h-[60px]">
            <div className="bg-gray-200 rounded-full w-full h-full flex items-center justify-center text-[10px] font-bold uppercase text-center px-1 break-words leading-tight">
              {title}
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-start">{description}</p>
      </div>
    </div>
  );
}
