import React from "react";

interface ContentCardProps {
  title: string;
  description: string;
  className?: string;
}

export function ContentCard({
  title,
  description,
  className,
}: ContentCardProps) {
  return (
    <div
      className={`border border-gray-300 rounded-lg p-8 md:p-12 ${className}`}
    >
      <div className="flex flex-col md:items-start gap-6">
        <div className="flex items-center gap-4">
          <div className="relative min-w-[60px] h-[60px]">
            <div className="bg-gray-200 rounded-full w-full h-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 text-xl font-bold uppercase whitespace-nowrap">
              {title}
            </div>
          </div>
        </div>
        <p className="text-[14px] md:text-base text-gray-800">{description}</p>
      </div>
    </div>
  );
}
