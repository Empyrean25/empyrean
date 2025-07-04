"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 2, ease: "easeOut" } },
};

export default function HomeClient() {
  return (
    <motion.main
      className="min-h-screen flex flex-col justify-center items-center bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={fadeIn}>
        <Image
          src="/assets/emyprean-logo-II.png"
          alt="Empyrean Logo"
          width={360}
          height={216}
          className="max-w-[360px] h-auto"
          priority
        />
      </motion.div>

      <motion.h1
        className="font-semibold text-lg md:text-xl text-center mb-4 text-[#494949]"
        variants={fadeInUp}
      >
        ACCESS EVERYONE THROUGH EMPYREAN
      </motion.h1>

      <motion.p className="text-lg text-[#494949] mb-8" variants={fadeInUp}>
        Soon.
      </motion.p>

      <Link href="/learn-more">
        <motion.button
          className="px-8 py-3 bg-[#494949] hover:bg-[#494949]/80 text-sm text-white rounded-full"
          variants={fadeInUp}
        >
          Click here to learn more
        </motion.button>
      </Link>
    </motion.main>
  );
}
