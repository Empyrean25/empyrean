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
  const [peekLeft, setPeekLeft] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const cycleForward = () => {
    setStack((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      if (first) updated.push(first);
      return updated;
    });
    setPeekLeft(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setPeekLeft(false), 700);
  };

  const cycleBackward = () => {
    setStack((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      if (last) updated.unshift(last);
      return updated;
    });
    setPeekLeft(false);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setPeekLeft(false), 700);
  };

  // keyboard navigation for desktop
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") cycleBackward();
      else if (e.key === "ArrowRight") cycleForward();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [containerRef.current, stack]);

  const main = stack[0];
  const peek = stack[1];

  return (
    <div
      ref={containerRef}
      tabIndex={0} // allow keyboard focus
      className={`relative w-full flex justify-center ${spacingClass}`}
    >
      <div className="relative w-[350px] h-[550px] overflow-visible">
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

        {main && (
          <motion.div
            key={`main-${main}`}
            drag="x"
            // allow mouse dragging by providing a range; card width is ~300 so +/-320 is safe
            dragConstraints={{ left: -320, right: 320 }}
            dragElastic={0.18}
            whileDrag={{ scale: 1.02, rotate: 0 }}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={(_e, info) => {
              if (info.offset.x < -60) cycleForward();
              else if (info.offset.x > 60) cycleBackward();
            }}
            className="absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-white cursor-grab active:cursor-grab"
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
      </div>
    </div>
  );
}
