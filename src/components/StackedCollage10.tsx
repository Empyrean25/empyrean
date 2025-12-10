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
  // when true the fan goes to the left (negative x offsets)
  const [alignLeft, setAlignLeft] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const cycleForward = () => {
    // move first to end and show fan to the left so the "second" sits left-peeked
    setStack((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      if (first) updated.push(first);
      return updated;
    });

    setAlignLeft(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setAlignLeft(false), 600);
  };

  const cycleBackward = () => {
    // move last to front and show fan to the right so it peeks on the right
    setStack((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      if (last) updated.unshift(last);
      return updated;
    });

    setAlignLeft(false);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setAlignLeft(false), 600);
  };

  return (
    <div className={`relative w-full flex justify-center ${spacingClass}`}>
      <div className="relative w-[350px] h-[550px] overflow-visible">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
        >
          {/* render only the top 5 for performance/visuals */}
          {stack.slice(0, 5).map((img, i) => {
            // compute fan offsets. When alignLeft is true we mirror the x/rotate.
            const sign = alignLeft ? -1 : 1;
            const x = sign * i * 10; // slight horizontal fan
            const y = i * 14; // reveal upper portion progressively
            const rotate = sign * (i - 2) * 2; // symmetric subtle fan
            const scale = 1 - i * 0.03; // depth scaling

            // top card index (0) is draggable
            const isTop = i === 0;

            return (
              <motion.div
                key={stack[i] + "-" + i}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                whileDrag={isTop ? { scale: 1.04, rotate: 0 } : undefined}
                onDragEnd={isTop ? (_e, info) => {
                  // swipe left to go forward
                  if (info.offset.x < -60) {
                    cycleForward();
                  }
                  // swipe right to go backward
                  else if (info.offset.x > 60) {
                    cycleBackward();
                  }
                } : undefined}
                style={{ zIndex: 100 - i }}
                className="absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-black/10 backdrop-blur-sm cursor-grab"
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

        {/* simple controls for testing on desktop */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          <button
            aria-label="Prev"
            onClick={cycleBackward}
            className="px-3 py-1 rounded-full bg-white/90 text-sm shadow"
          >
            ◀
          </button>
          <button
            aria-label="Next"
            onClick={cycleForward}
            className="px-3 py-1 rounded-full bg-white/90 text-sm shadow"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
