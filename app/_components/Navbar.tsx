import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="z-80 p-1  fixed top-0 left-0 w-full h-20 bg-secondaryBg flex align-center items-center justify-between">
      <Image
        src="/elbee_racing_text.png"
        alt="elbee_racing_text"
        width={200}
        height={67}
      />

      {/* container for all the links  */}
      <nav className="flex space-x-10 px-8 font-semibold">
        <Link href="/" className="navlink">About Us</Link>
        <Link href="/sponsors" className="navlink text-secondaryText">Sponsors 💖</Link>
        <Link href="/socials" className="navlink">Socials</Link>
        <Link href="/" className="navlink">Contact</Link>
      </nav>
    </div>
  )
}
