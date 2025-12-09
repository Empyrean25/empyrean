// components/FiveToTenImageCollage.tsx
import Image from "next/image";
import React from "react";

type Props = {
  images: string[]; // up to 10 image paths (public/assets/gallery/...)
  alt?: string;
};

export default function FiveToTenImageCollage({
  images,
  alt = "Empyrean gallery image",
}: Props) {
  // Ensure we have exactly 10 slots (fallback to last provided image)
  const imgs: string[] = Array.from({ length: 10 }).map((_, i) =>
    images && images[i] ? images[i] : images[images.length - 1] || "/assets/gallery/brand1.jpg"
  );

  return (
    <div className="my-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative grid grid-cols-12 gap-4 items-stretch">
          {/* layout using explicit placement and spans for a dynamic collage */}
          {imgs.map((src, i) => (
            <div
              key={i}
              className={`collage-item overflow-hidden rounded-2xl shadow-lg transform transition will-change-transform hover:scale-105`}
              // assign grid placement classes by index
              style={{
                gridColumn:
                  // column spans tuned for a pleasing collage
                  i === 0
                    ? "span 3"
                    : i === 1
                    ? "span 3"
                    : i === 2
                    ? "span 6"
                    : i === 3
                    ? "span 3"
                    : i === 4
                    ? "span 3"
                    : i === 5
                    ? "span 4"
                    : i === 6
                    ? "span 4"
                    : i === 7
                    ? "span 4"
                    : i === 8
                    ? "span 6"
                    : "span 6",
                gridRow:
                  // row placement to create vertical variety
                  i === 0
                    ? "auto / span 1"
                    : i === 1
                    ? "auto / span 1"
                    : i === 2
                    ? "1 / span 2"
                    : i === 3
                    ? "auto / span 1"
                    : i === 4
                    ? "auto / span 1"
                    : i === 5
                    ? "auto / span 1"
                    : i === 6
                    ? "auto / span 1"
                    : i === 7
                    ? "auto / span 1"
                    : i === 8
                    ? "3 / span 1"
                    : "3 / span 1",
                // stagger animation delay
                animationDelay: `${i * 90}ms`,
              }}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                width={1200}
                height={800}
                className="w-full h-full object-cover block"
                draggable={false}
                priority={i < 2} // prioritize first images for LCP
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .collage-item {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
          animation: popIn 520ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
        }

        @keyframes popIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Responsive reflow: on small screens switch to simpler two-column layout */
        @media (max-width: 960px) {
          .collage-item {
            grid-column: span 6 !important;
          }
        }

        @media (max-width: 560px) {
          .collage-item {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
}
