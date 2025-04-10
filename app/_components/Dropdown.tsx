"use client";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function Dropdown() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden block w-fit relative mr-5 hover:cursor-pointer">
      <RxHamburgerMenu onClick={() => setOpen(!open)} className="text-3xl" />
      {/* actual dropdown contents */}
      <AnimatePresence>
        {open ?
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="absolute bg-secondaryBg w-fit mt-6 left-[-75px] px-2 text-center">
            <Link className="block" href="/about">About Us</Link>
            <Link className="block whitespace-nowrap" href="/sponsors">Sponsors 💖</Link>
            <Link className="block" href="/socials">Socials</Link>
            <Link className="block" href="/contact">Contact</Link>
          </motion.div>
          :
          null
        }
      </AnimatePresence>
    </div>

  )
}
