import Image from "next/image"

export default function Navbar() {
  return (
    <div className="z-80 p-1 fixed top-0 left-0 w-full h-20 bg-secondaryBg flex align-center items-center justify-between">
      <Image
        src="/elbee_racing_text.png"
        alt="elbee_racing_text"
        width={200}
        height={67}
      />

      {/* container for all the links  */}
      <nav className="flex space-x-10 px-8 font-semibold">
        <a href="/" className="navlink">About Us</a>
        <a href="/sponsors" className="navlink text-secondaryText">Sponsors 💖</a>
        <a className="navlink">Socials</a>
        <a className="navlink">Contact</a>
      </nav>
    </div>
  )
}
