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
  const [leftPeek, setLeftPeek] = useState<string[]>([]); // ⬅️ new left-side mini-stack

  const cycleStack = () => {
    setStack((prev) => {
      const updated = [...prev];
      const first = updated.shift();

      if (first) {
        // push swiped image to left peek stack
        setLeftPeek((lp) => {
          const fanned = [first, ...lp].slice(0, 3); // keep max of 3 left peeks
          return fanned;
        });

        updated.push(first);
      }
      return updated;
    });
  };

  return (
    <div className={`relative w-full flex justify-center ${spacingClass}`}>
      <div className="relative w-[350px] h-[550px] overflow-visible">

        {/* LEFT-SIDE PEEK STACK */}
        <div className="absolute left-[-90px] top-[40px]">
          {leftPeek.map((img, i) => {
            const x = -i * 8;   // small fan to left
            const y = i * 14;   // same top-heavy reveal
            const rotate = (i + 1) * -4; // angled left
            const scale = 0.9 - i * 0.04;

            return (
              <motion.div
                key={`left-${i}`}
                className="absolute w-[120px] h-[180px] rounded-xl shadow-lg overflow-hidden opacity-90"
                style={{ zIndex: 50 - i }}
                animate={{ x, y, rotate, scale }}
                transition={{ type: "spring", stiffness: 190, damping: 22 }}
              >
                <Image
                  src={img}
                  alt={`${alt} left peek ${i}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
            );
          })}
        </div>

        {/* MAIN STACK */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
        >
          {stack.slice(0, 5).map((img, i) => {
            const x = i * 10;
            const y = i * 14;
            const rotate = (i - 2) * 2;
            const scale = 1 - i * 0.03;

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
                animate={{ x, y, scale, rotate }}
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
          })}
        </motion.div>
      </div>
    </div>
  );
}
