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
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          {/* Circle icon */}
          <div className="min-w-[60px] h-[60px] bg-gray-200 rounded-full" />

          {/* Title aligned vertically with middle of circle */}
          <div className="text-xl font-bold uppercase text-gray-900 leading-tight text-left break-words">
            {title}
          </div>
        </div>

        {/* Description */}
        <p className="text-[14px] md:text-base text-gray-800 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}
