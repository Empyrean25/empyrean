interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors">
      <div className="flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 rounded-full min-w-[60px] h-[60px]"></div>
          <div className="text-xl font-bold uppercase break-words whitespace-normal w-full">
            {title}
          </div>
        </div>

        <p className="text-gray-700 text-start">{description}</p>
      </div>
    </div>
  );
}
