import Image from "next/image";
interface SponsorWidgetProps {
  imageUrl: string;
}

const SponsorWidget: React.FC<SponsorWidgetProps> = ({ imageUrl }) => {
  return (
    <div className="flex items-center align-middle justify-center w-48 h-24 overflow-hidden">
      <Image
        className="w-full h-full object-contain"
        src={imageUrl}
        alt={imageUrl}
        width={128}
        height={64}
      />
    </div>
  )
}

export default SponsorWidget;
