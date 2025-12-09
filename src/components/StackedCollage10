"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  images?: string[]; // optional array of image paths
  alt?: string;
  spacingClass?: string; // Tailwind spacing
};

export default function StackedCollage10({
  images = [],
  alt = "Empyrean gallery image",
  spacingClass = "mt-6",
}: Props) {
  // Ensure 10 image slots with fallbacks
  const placeholder = "/assets/placeholder.jpg";
  const imgs = Array.from({ length: 10 }).map((_, i) => images[i] || images[images.length - 1] || placeholder);

  return (
    <div className={`mx-auto max-w-6xl ${spacingClass}`}>
      <div className="relative grid grid-cols-12 gap-4 items-start">
        {/* Top image */}
        <motion.div
          className="col-start-3 col-span-8 rounded-3xl overflow-hidden shadow-2xl min-h-[260px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src={imgs[0]}
            alt={`${alt} main`}
            width={1600}
            height={900}
            className="w-full h-full object-cover"
            unoptimized
            draggable={false}
          />
        </motion.div>

        {/* Left column */}
        <motion.div
          className="col-span-3 mt-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
        >
          {[1, 2].map((idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg aspect-square">
              <Image
                src={imgs[idx]}
                alt={`${alt} ${idx + 1}`}
                width={800}
                height={800}
                className="object-cover w-full h-full"
                unoptimized
                draggable={false}
              />
            </div>
          ))}
        </motion.div>

        {/* Right column */}
        <motion.div
          className="col-start-10 col-span-3 mt-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          viewport={{ once: true }}
        >
          {[3, 4].map((idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg aspect-square">
              <Image
                src={imgs[idx]}
                alt={`${alt} ${idx + 1}`}
                width={800}
                height={800}
                className="object-cover w-full h-full"
                unoptimized
                draggable={false}
              />
            </div>
          ))}
        </motion.div>

        {/* Middle row */}
        <motion.div
          className="col-start-4 col-span-6 mt-6 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          viewport={{ once: true }}
        >
          {[5, 6, 7].map((idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg w-1/3 aspect-square">
              <Image
                src={imgs[idx]}
                alt={`${alt} ${idx + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
                unoptimized
                draggable={false}
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom row */}
        <motion.div
          className="col-start-3 col-span-8 mt-6 flex gap-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          viewport={{ once: true }}
        >
          {[8, 9].map((idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg flex-1 aspect-[4/3]">
              <Image
                src={imgs[idx]}
                alt={`${alt} ${idx + 1}`}
                width={900}
                height={680}
                className="object-cover w-full h-full"
                unoptimized
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tailwind responsive */}
      <div className="lg:hidden mt-6">
        {/* On smaller screens, stack vertically */}
        {imgs.map((img, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden shadow-lg mb-4">
            <Image
              src={img}
              alt={`${alt} ${idx + 1}`}
              width={800}
              height={600}
              className="object-cover w-full h-full"
              unoptimized
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
