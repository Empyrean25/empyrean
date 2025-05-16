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
          <div className="bg-gray-200 rounded-full relative min-w-[60px] h-[60px]"></div>
          <h3 className="absolute text-xl font-bold uppercase">{title}</h3>
        </div>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
}
