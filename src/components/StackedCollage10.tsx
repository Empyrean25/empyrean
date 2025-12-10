"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
  // when true the peek card will sit on the left of the main image
  const [peekLeft, setPeekLeft] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const cycleForward = () => {
    // rotate stack: first -> end
    setStack((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      if (first) updated.push(first);
      return updated;
    });

    // after cycling forward, show peek on the LEFT of the new main
    setPeekLeft(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    // keep the peek state for a short moment so animation reads as "tucked and peeking"
    timeoutRef.current = window.setTimeout(() => setPeekLeft(false), 700);
  };

  const cycleBackward = () => {
    // rotate stack backward: last -> front
    setStack((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      if (last) updated.unshift(last);
      return updated;
    });

    // show peek on right briefly
    setPeekLeft(false);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setPeekLeft(false), 700);
  };

  // Render only the top two cards: main (index 0) and the next (index 1) which will tuck/peek.
  const main = stack[0];
  const peek = stack[1];

  return (
    <div className={`relative w-full flex justify-center ${spacingClass}`}>
      <div className="relative w-[350px] h-[550px] overflow-visible">
        {/* peek card (the tucked one) */}
        {peek && (
          <motion.div
            key={`peek-${peek}`}
            className="absolute w-[300px] h-[450px] rounded-2xl shadow-lg overflow-hidden bg-black/8 backdrop-blur-sm"
            initial={false}
            animate={
              peekLeft
                ? { x: -72, y: 12, scale: 0.92, rotate: -4 }
                : { x: 72, y: 12, scale: 0.92, rotate: 4 }
            }
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            style={{ zIndex: 90 }}
          >
            <Image
              src={peek}
              alt={`${alt} peek`}
              fill
              className="object-cover select-none"
              draggable={false}
              unoptimized
            />
          </motion.div>
        )}

        {/* main card (draggable) */}
        {main && (
          <motion.div
            key={`main-${main}`}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            whileDrag={{ scale: 1.02, rotate: 0 }}
            onDragEnd={(e, info) => {
              // swipe left to show next (forward)
              if (info.offset.x < -60) cycleForward();
              // swipe right to show previous
              else if (info.offset.x > 60) cycleBackward();
            }}
            className="absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-white"
            initial={false}
            animate={{ x: 0, y: 0, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            style={{ zIndex: 100 }}
          >
            <Image
              src={main}
              alt={`${alt} main`}
              fill
              className="object-cover select-none"
              draggable={false}
              unoptimized
            />
          </motion.div>
        )}

        {/* NOTE: removed the decorative stacked "arrows"/cards in the background and removed the prev/next buttons per your request. */}
      </div>
    </div>
  );
}
