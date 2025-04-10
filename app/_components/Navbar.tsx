import Image from "next/image"
import Link from "next/link"

import Dropdown from "./Dropdown"

export default function Navbar() {
  return (
    <div className="z-80 p-1 absolute top-0 left-0 w-full h-20 bg-secondaryBg flex align-center items-center justify-between">
      <Link href="/">
        <Image
          src="/elbee_racing_text.png"
          alt="elbee_racing_text"
          width={200}
          height={67}
          className="hover:cursor-pointer"
        />
      </Link>

      {/* container for all the links  */}
      <nav className="md:block hidden flex space-x-10 px-8 font-semibold">
        <Link href="/about" className="navlink">About Us</Link>
        <Link href="/sponsors" className="navlink text-secondaryText">Sponsors 💖</Link>
        <Link href="/socials" className="navlink">Socials</Link>
        <Link href="/contact" className="navlink">Contact</Link>
      </nav>
      <Dropdown />
    </div>
  )
}
