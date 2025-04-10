"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
      <Image
        className="absolute"
        fill
        src="/baja.png"
        alt="baja.png"
        style={{
          filter: "brightness(0.6) contrast(0.9) sepia(0.6) hue-rotate(-10deg)",
          objectFit: "cover",
        }}
      />
      {/* make this center image responsive to screen size */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/3 w-1/2 aspect-square relative">
        <Image
          className="object-cover"
          src="/elbee_racing.png"
          alt="elbee_racing"
          fill
        />
      </motion.div>
    </div>
  );
}
