import Image from "next/image";

interface PolaroidProps {
  imageUrl: string;
  className?: string;
  caption?: string;
  rotate?: number;
}
const Polaroid: React.FC<PolaroidProps> = ({ imageUrl, caption, rotate, className }) => {
  return (
    // use square images for the best results
    // will always take the full width of its parent container
    <div
      className={`w-full text-center bg-gray-50 p-4 ${className}`}
      style={{ transform: `rotate(${rotate ?? 0}deg)` }}
    >
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={imageUrl}
          fill
          className="object-cover rounded"
        />
      </div>
      <p className="text-black mt-2 italic">{caption}</p>
    </div>

  )
}

export default Polaroid;
