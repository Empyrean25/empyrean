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
  const isTop = i === 0;
  const offset = i * 14; // wider, cleaner fan
  const rotate = i === 0 ? 0 : i % 2 === 0 ? -3 : 3;

  // NEW: previous card peeking on the right
  const showRightPeek = i === 1; // the second card becomes the “previous” after swipe

  return (
    <motion.div
      key={i}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      whileDrag={{ scale: 1.03, rotate: 0 }}
      onDragEnd={(e, info) => {
        if (info.offset.x < -60 && isTop) cycleStack();
      }}
      style={{ zIndex: stack.length - i }}
      className="absolute w-[300px] h-[450px] rounded-2xl shadow-xl overflow-hidden bg-black/10"
      animate={{
        x: showRightPeek ? 70 : offset,     // push previous pic to the right
        y: showRightPeek ? -10 : offset * 0.15,
        rotate: showRightPeek ? 6 : rotate, // slight right tilt
        scale: isTop ? 1 : 0.95,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
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
