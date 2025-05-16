"use client";
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function Marquee({
  children,
  speed = 50,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      x.current -= (speed * delta) / 1000;
      // Reset when fully scrolled
      const totalWidth = containerRef.current.scrollWidth / 2;
      if (-x.current >= totalWidth) {
        x.current = 0;
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div className="overflow-hidden w-full py-4">
      <div ref={containerRef} className="flex gap-20">
        {children}
        {children}
      </div>
    </div>
  );
}
