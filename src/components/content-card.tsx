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
        <div className="flex gap-0">
          {/* Circle */}
          <div className="relative min-w-[60px] h-[60px]">
            <div className="bg-gray-200 rounded-full w-full h-full" />
            {/* Title positioned inside and overflowing right */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 text-xl font-bold uppercase text-gray-900 leading-tight whitespace-pre-wrap w-[calc(100vw-160px)] max-w-[calc(100%-80px)] pl-2">
              {title}
            </div>
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
