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
            // left-side card (previously swiped)
            const isLeft = i === 0;

            // only the top (current) card is draggable
            const isDraggable = i === 0;

            // right-side fan (original)
            const rightX = i * 10;
            const rightY = i * 14;
            const rightRotate = (i - 2) * 2;

            // left-side fan (mirrored)
            const leftX = -40 - i * 10;
            const leftY = i * 14;
            const leftRotate = (2 - i) * 2;

            const x = isLeft ? leftX : rightX;
            const y = isLeft ? leftY : rightY;
            const rotate = isLeft ? leftRotate : rightRotate;
            const scale = 1 - i * 0.03;

            return (
              <motion.div
                key={i}
                drag={isDraggable ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                whileDrag={isDraggable ? { scale: 1.04, rotate: 0 } : {}}
                onDragEnd={(e, info) => {
                  if (isDraggable && info.offset.x < -60) cycleStack();
                }}
                style={{ zIndex: 100 - i }}
                className="absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-black/10 backdrop-blur-sm"
                animate={{ x, y, scale, rotate }}
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
