"use client";

import { FaRegCopy } from "react-icons/fa";
import { GrCheckmark } from "react-icons/gr";

import Link from "next/link"
import Image from "next/image";

import { useState } from "react"

export default function ContactPage() {
  const [copied, setCopied] = useState<boolean>(false);
  const email = "outreach@saecsulb.org"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="space-y-10 flex flex-col items-center align-middle justify-center">
      <h1 className="header-text">Contact Us</h1>
      {/* contact us container */}
      <div className="w-5/6 flex gap-x-10 items-center">
        <div className="w-2/3">
          <span>Want to become a sponsor? Got a question? We have many forms of communication! Please contact us through any of our </span>
          <Link href="/socials" className="underline hover:cursor-pointer">socials</Link>
          <span> or through the email listed below.</span>

          {/* email copy to clipboard container */}
          <div className="mt-5 flex gap-x-3 align-middle items-center outline-2 outline-secondaryBg w-fit p-2 rounded-xl">
            <p>{email}</p>
            {!copied && <FaRegCopy onClick={() => handleCopy()} className="hover:cursor-pointer" />}
            {copied && <GrCheckmark />}
          </div>
        </div>
        <div className="w-1/3 relative">
          <Image
            className="object-cover h-auto"
            src="/elbee_racing.png"
            alt="elbee_racing"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div >

  )
}
