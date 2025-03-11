import Image from "next/image";
interface SponsorWidgetProps {
  image_path: string;
}

const SponsorWidget: React.FC<SponsorWidgetProps> = ({ image_path }) => {
  return (
    <div className="flex items-center align-middle justify-center w-48 h-24 overflow-hidden">
      <Image
        className="w-full h-full object-contain"
        src={image_path}
        alt={image_path}
        width={128}
        height={64}
      />
    </div>
  )
}

export default SponsorWidget;
