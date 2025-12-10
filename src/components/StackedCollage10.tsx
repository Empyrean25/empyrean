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
  // ensure at least 5 entries so the stacked layout stays stable
  const initialImgs = Array.from({ length: Math.max(5, images.length || 5) }).map(
    (_, i) => images[i] || images[images.length - 1] || placeholder
  );

  const [stack, setStack] = useState(initialImgs);
  // peekSide controls the tucked peek animation: 'left' | 'right' | null
  const [peekSide, setPeekSide] = useState<null | "left" | "right">(null);
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

    setPeekSide("left");
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setPeekSide(null), 700);
  };

  const cycleBackward = () => {
    setStack((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      if (last) updated.unshift(last);
      return updated;
    });

    setPeekSide("right");
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setPeekSide(null), 700);
  };

  // keyboard navigation
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

  // render up to 5 stacked cards so you see a small deck
  const visible = stack.slice(0, 5);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={`relative w-full flex justify-center ${spacingClass}`}
    >
      <div className="relative w-[350px] h-[550px] overflow-visible">
        {visible
          .slice()
          .reverse() // render from back -> front so z-index stacking follows DOM order
          .map((img, revIndex) => {
            // revIndex: 0 = farthest back, 4 = front (if 5 visible)
            const i = visible.length - 1 - revIndex; // i: 0 front, 1 next, ...
            const isTop = i === 0;

            // default fan values (when no peek animation is active)
            const baseX = i * 10; // small right offset for cards behind the main
            const baseY = i * 14;
            const baseRotate = (i - 2) * 2;
            const baseScale = 1 - i * 0.03;

            // when peekSide is active, we want the SECOND card (i===1) to tuck left or right
            const special = i === 1 && peekSide !== null;

            const animate = special
              ? peekSide === "left"
                ? { x: -72, y: 12, scale: 0.92, rotate: -4 }
                : { x: 72, y: 12, scale: 0.92, rotate: 4 }
              : { x: baseX, y: baseY, scale: baseScale, rotate: baseRotate };

            return (
              <motion.div
                key={`${img}-${i}`}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: -320, right: 320 }}
                dragElastic={isTop ? 0.18 : 0}
                whileDrag={isTop ? { scale: 1.02, rotate: 0 } : undefined}
                onDragEnd={isTop ? (_e, info) => {
                  if (info.offset.x < -60) cycleForward();
                  else if (info.offset.x > 60) cycleBackward();
                } : undefined}
                className={`absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-black/8 backdrop-blur-sm ${isTop ? 'cursor-grab active:cursor-grab' : ''}`}
                animate={animate}
                initial={false}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                style={{ zIndex: 100 + i }}
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
      </div>
    </div>
  );
}
