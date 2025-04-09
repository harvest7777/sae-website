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
      <Image
        className="absolute"
        src="/elbee_racing.png"
        alt="elbee_racing"
        width={400}
        height={400}
      />
    </div>
  );
}
