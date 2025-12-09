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

  const [stack, setStack] = useState(initialImgs);

  const cycleStack = () => {
    setStack((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      if (first) updated.push(first);
      return updated;
    });
  };

  return (
    <div className={`relative w-full flex justify-center ${spacingClass}`}>
      <div className="relative w-[350px] h-[550px] overflow-visible">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
        >
          {stack.slice(0, 5).map((img, i) => {
            // Fan-out effect but clean and aligned to top
            const x = i * 10; // slight horizontal fan
            const y = i * 14; // reveals top part more, bottom less
            const rotate = (i - 2) * 2; // symmetrical subtle fan (-4, -2, 0, 2, 4)
            const scale = 1 - i * 0.03; // small depth scaling

            return (
              <motion.div
                key={i}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                whileDrag={{ scale: 1.04, rotate: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -60 && i === 0) cycleStack();
                }}
                style={{ zIndex: 100 - i }}
                className="absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-black/10 backdrop-blur-sm"
                animate={{
                  x,
                  y,
                  scale,
                  rotate,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
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
          })}
        </motion.div>
      </div>
    </div>
  );
}
