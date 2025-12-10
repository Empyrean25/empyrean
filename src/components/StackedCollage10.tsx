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
  const placeholder = "/assets/placeholder.jpg";

  const initialImgs = Array.from({ length: 10 }).map(
    (_, i) => images[i] || images[images.length - 1] || placeholder
  );

  const [stackIndex, setStackIndex] = useState(0);

  const handleSwipe = () => {
    setStackIndex((prev) =>
      prev + 1 >= initialImgs.length ? prev : prev + 1
    );
  };

  // ⭐ Only show 5 cards: 2 past, 1 active, 2 future
  const VISIBLE_RANGE = 2;

  return (
    <div className={`relative w-full flex justify-center ${spacingClass}`}>
      <div className="relative w-[350px] h-[550px] overflow-visible">
        {initialImgs.map((img, i) => {
          const relative = i - stackIndex;

          // Skip cards outside ±VISIBLE_RANGE
          if (Math.abs(relative) > VISIBLE_RANGE) return null;

          const baseX = 10;
          const baseY = 14;
          const baseRotate = 2;
          const baseScale = 0.03;

          // ACTIVE CARD
          if (relative === 0) {
            return (
              <motion.div
                key={i}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                whileDrag={{ scale: 1.04, rotate: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -60) handleSwipe();
                }}
                style={{ zIndex: 200 }}
                className="absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-black/10 backdrop-blur-sm"
                animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                }}
              >
                <Image
                  src={img}
                  alt={`${alt} ${i + 1}`}
                  fill
                  className="object-cover select-none"
                  draggable={false}
                  unoptimized
                />
              </motion.div>
            );
          }

          // FUTURE CARDS (right)
          if (relative > 0) {
            const i2 = relative;
            return (
              <motion.div
                key={i}
                style={{ zIndex: 200 - i2 }}
                className="absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-black/10 backdrop-blur-sm"
                animate={{
                  x: i2 * baseX,
                  y: i2 * baseY,
                  rotate: (i2 - 2) * baseRotate,
                  scale: 1 - i2 * baseScale,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                }}
              >
                <Image
                  src={img}
                  alt={`${alt} ${i + 1}`}
                  fill
                  className="object-cover select-none"
                  draggable={false}
                  unoptimized
                />
              </motion.div>
            );
          }

          // PAST CARDS (left, mirrored)
          if (relative < 0) {
            const i2 = Math.abs(relative);
            return (
              <motion.div
                key={i}
                style={{ zIndex: 200 - i2 }}
                className="absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-black/10 backdrop-blur-sm"
                animate={{
                  x: -i2 * baseX,
                  y: i2 * baseY,
                  rotate: -(i2 - 2) * baseRotate,
                  scale: 1 - i2 * baseScale,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                }}
              >
                <Image
                  src={img}
                  alt={`${alt} ${i + 1}`}
                  fill
                  className="object-cover select-none"
                  draggable={false}
                  unoptimized
                />
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
}
