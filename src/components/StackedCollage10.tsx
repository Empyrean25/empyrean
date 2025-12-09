"use client";

import Image from "next/image";
import React from "react";

type Props = {
  images?: string[];
  alt?: string;
  spacingClass?: string; // Tailwind spacing
};

export default function StackedCollage10({
  images = [],
  alt = "Empyrean gallery image",
  spacingClass = "mt-6",
}: Props) {
  const placeholder = "/assets/placeholder.jpg";
  const imgs = Array.from({ length: 10 }).map(
    (_, i) => images[i] || images[images.length - 1] || placeholder
  );

  return (
    <div className={`mx-auto max-w-4xl ${spacingClass}`}>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-2 py-2">
        {imgs.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg w-64 h-40 md:w-80 md:h-48"
          >
            <Image
              src={img}
              alt={`${alt} ${idx + 1}`}
              width={320}
              height={192}
              className="w-full h-full object-cover"
              unoptimized
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
