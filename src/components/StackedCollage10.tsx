"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, PanInfo } from "framer-motion";

type Props = {
  images?: string[];
  alt?: string;
  spacingClass?: string;
  visibleCount?: number;
  tuckX?: number;
};

export default function StackedCollage10({
  images = [],
  alt = "Empyrean gallery image",
  spacingClass = "mt-6",
  visibleCount = 5,
  tuckX = 72,
}: Props) {
  const placeholder = "/assets/placeholder.jpg";
  const initialImgs = Array.from({
    length: Math.max(visibleCount, images.length || visibleCount),
  }).map((_, i) => images[i] || images[images.length - 1] || placeholder);

  const [stack, setStack] = useState(initialImgs);
  const [peekSide, setPeekSide] = useState<null | "left" | "right">(null);
  const [swipeDirection, setSwipeDirection] = useState<null | "left" | "right">(null);
  const timeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dragLimit, setDragLimit] = useState(320);

  useEffect(() => {
    const measure = () => {
      const w = containerRef.current?.offsetWidth || 700;
      setDragLimit(Math.max(280, Math.floor(w / 2)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

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
    timeoutRef.current = window.setTimeout(() => setPeekSide(null), 650);
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
    timeoutRef.current = window.setTimeout(() => setPeekSide(null), 650);
  };

  const onTopCardExited = (dir: "left" | "right") => {
    if (dir === "left") cycleForward();
    else cycleBackward();
    setSwipeDirection(null);
  };

  // <-- Fixed: typed first parameter as PointerEvent instead of `any` to satisfy eslint rule
  const onDragEndTop = (event: PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const shouldLeft = offset.x < -120 || velocity.x < -800;
    const shouldRight = offset.x > 120 || velocity.x > 800;

    if (shouldLeft) {
      setSwipeDirection("left");
      window.setTimeout(() => onTopCardExited("left"), 300);
    } else if (shouldRight) {
      setSwipeDirection("right");
      window.setTimeout(() => onTopCardExited("right"), 300);
    } else {
      setPeekSide(null);
    }
  };

  // visible slice (front = index 0)
  const visible = stack.slice(0, visibleCount);

  return (
    <div ref={containerRef} className={`relative w-full flex justify-center ${spacingClass}`}>
      <div className="relative w-[350px] h-[550px] overflow-visible">
        {visible
          .slice()
          .reverse()
          .map((img, revIndex) => {
            const i = visible.length - 1 - revIndex; // i: 0 = front
            const isTop = i === 0;

            // original fan to the RIGHT for the stacked look
            const baseX = i * 18;
            const baseY = i * 12;
            const baseRotate = (i - 2) * 2;
            const baseScale = 1 - i * 0.03;

            // special tucked peek for the second card when peekSide is active
            const special = i === 1 && peekSide !== null;

            const animate =
              swipeDirection && isTop
                ? swipeDirection === "left"
                  ? { x: -Math.max(dragLimit, 800), rotate: -8, scale: 0.98 }
                  : { x: Math.max(dragLimit, 800), rotate: 8, scale: 0.98 }
                : special
                ? peekSide === "left"
                  ? { x: -tuckX, y: 12, scale: 0.92, rotate: -4 }
                  : { x: tuckX, y: 12, scale: 0.92, rotate: 4 }
                : { x: baseX, y: baseY, scale: baseScale, rotate: baseRotate };

            return (
              <motion.div
                key={`${img}-${i}`}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: -dragLimit, right: dragLimit }}
                dragElastic={isTop ? 0.12 : 0}
                whileDrag={isTop ? { scale: 1.02, rotate: 0 } : undefined}
                onDragEnd={isTop ? onDragEndTop : undefined}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[450px] rounded-2xl overflow-hidden bg-black/6 ${
                  isTop ? "cursor-grab active:cursor-grabbing shadow-2xl" : "shadow-lg"
                }`}
                animate={animate}
                initial={false}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                style={{ zIndex: 100 + i, pointerEvents: isTop ? "auto" : "none" }}
                onAnimationComplete={() => {
                  if (swipeDirection && isTop) {
                    onTopCardExited(swipeDirection);
                  }
                }}
              >
                <Image src={img} alt={`${alt} ${i + 1}`} fill className="object-cover select-none" draggable={false} unoptimized />
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}
