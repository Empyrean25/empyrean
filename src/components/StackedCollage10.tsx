"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  images?: string[];
  alt?: string;
  spacingClass?: string;
  // optional props to tweak layout quickly
  visibleCount?: number; // how many cards to show in the stack (default 5)
  tuckX?: number; // how far the tucked card moves when peeking
};

export default function StackedCollage10({
  images = [],
  alt = "Empyrean gallery image",
  spacingClass = "mt-6",
  visibleCount = 5,
  tuckX = 72,
}: Props) {
  const placeholder = "/assets/placeholder.jpg";
  const initialImgs = Array.from({ length: Math.max(visibleCount, images.length || visibleCount) }).map(
    (_, i) => images[i] || images[images.length - 1] || placeholder
  );

  const [stack, setStack] = useState(initialImgs);
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

  // pick visible part of stack (front = index 0)
  const visible = stack.slice(0, visibleCount);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={`relative w-full flex justify-center ${spacingClass}`}
    >
      <div className="relative w-[350px] h-[550px] overflow-visible">
        {visible.map((img, i) => {
          // i === 0 is the front (main) card
          const isTop = i === 0;

          // Default fan to the RIGHT: positive x for cards behind the main
          const baseX = i * 18; // spacing to the right
          const baseY = i * 12;
          const baseRotate = (i - 2) * 2; // small symmetric rotation
          const baseScale = 1 - i * 0.03;

          // When peeking, the SECOND card (i===1) should tuck left or right
          const special = i === 1 && peekSide !== null;
          const animate = special
            ? peekSide === "left"
              ? { x: -tuckX, y: 12, scale: 0.92, rotate: -4 }
              : { x: tuckX, y: 12, scale: 0.92, rotate: 4 }
            : { x: baseX, y: baseY, scale: baseScale, rotate: baseRotate };

          // ensure only top card receives pointer events so dragging is reliable
          const pointerEvents = isTop ? "auto" : "none";

          return (
            <motion.div
              key={`${img}-${i}`}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: -400, right: 400 }}
              dragElastic={isTop ? 0.18 : 0}
              whileDrag={isTop ? { scale: 1.02, rotate: 0 } : undefined}
              onDragEnd={isTop ? (_e, info) => {
                if (info.offset.x < -60) cycleForward();
                else if (info.offset.x > 60) cycleBackward();
              } : undefined}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-black/8 backdrop-blur-sm ${isTop ? 'cursor-grab active:cursor-grab' : ''}`}
              animate={animate}
              initial={false}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              style={{ zIndex: 100 + i, pointerEvents }}
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
