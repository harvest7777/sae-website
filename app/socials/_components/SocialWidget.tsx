"use client";
import Image from "next/image";

interface SocialWidgetProps {
  socialName: string;
  socialLink: string;
  backgroundImageUrl: string;
}
const SocialWidget: React.FC<SocialWidgetProps> = ({ socialName, socialLink, backgroundImageUrl }) => {
  const handleClick = () => {
    window.open(socialLink, "_blank");
  }
  return (
    <div onClick={handleClick} className="clickable-animation rounded-xl relative flex items-center align-middle justify-center w-48 h-48 overflow-hidden">
      <h1 className="text-3xl font-bold text-center z-10">{socialName}</h1>
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundImageUrl}
        alt={backgroundImageUrl}
        width={128}
        height={128}
      />
    </div>
  )
}

export default SocialWidget;
