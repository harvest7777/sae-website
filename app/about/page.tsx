"use client";
import { motion } from "motion/react";
import Polaroid from "./_components/Polaroid"

export default function AboutPage() {
  const description: string = "We are the Society of Automotive Engineers at California State University Long Beach. Our team named, Elbee Racing, is a student-led organization that provides our members with the opportunity to learn how to design, build, and test a four-wheel drive vehicle to compete against other schools in various collegiate competitions under SAE International under the Baja sector."

  return (
    <div className="space-y-10 flex flex-col justify-center align-middle items-center">
      <h1 className="header-text">What are we?</h1>
      {/* container for each bullet point */}
      <div className="md:w-5/6">
        <div className="flex md:flex-row flex-col justify-center items-center align-middle gap-x-10 gap-y-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-2/6"
          >
            <Polaroid imageUrl="/about.png" caption="our team 😎" rotate={5} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-4/6 w-5/6"
          >
            <p>{description}</p>
          </motion.div>
        </div>

      </div>
    </div >
  )
} 
