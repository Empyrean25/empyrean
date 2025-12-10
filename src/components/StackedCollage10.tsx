"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  images?: string[];
  alt?: string;
  spacingClass?: string;
};

export default function StackedCollage10({
  images = [],
  alt = "Empyrean gallery image",
  spacingClass = "mt-6",
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? prev : prev + 1
    );
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? prev : prev - 1
    );
  };

  const getFanTransform = (
    index: number,
    active: number,
    side: "left" | "right"
  ) => {
    const offset = Math.abs(index - active);

    const baseRotate = 6; // elegant fan
    const rotate = offset * baseRotate * (side === "left" ? -1 : 1);

    const translateX = side === "left" ? -18 * offset : 18 * offset;
    const translateY = 8 * offset;

    const zIndex = 20 - offset;

    return { rotate, translateX, translateY, zIndex };
  };

  return (
    <div className={`relative w-full flex flex-col items-center ${spacingClass}`}>
      <div className="relative w-[350px] h-[450px]">
        {images.map((src, i) => {
          let side: "left" | "right" | "center";

          if (i < activeIndex) side = "left";
          else if (i > activeIndex) side = "right";
          else side = "center";

          const transform =
            side === "center"
              ? {
                  rotate: 0,
                  translateX: 0,
                  translateY: 0,
                  zIndex: 50,
                }
              : getFanTransform(i, activeIndex, side);

          return (
            <motion.div
              key={i}
              className="absolute top-0 left-0"
              style={{ zIndex: transform.zIndex }}
              animate={{
                rotate: transform.rotate,
                x: transform.translateX,
                y: transform.translateY,
                scale: side === "center" ? 1 : 0.92,
              }}
              transition={{
                type: "spring",
                stiffness: 130,
                damping: 16,
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={350}
                height={450}
                className="rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Controls (Optional) */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={prev}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
          disabled={activeIndex === 0}
        >
          Prev
        </button>
        <button
          onClick={next}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
          disabled={activeIndex === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
