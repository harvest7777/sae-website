import SponsorWidget from "./SponsorWidget";

interface SponsorTierProps {
  tier_name: string;
  className: string;
  company_logo_urls: string[];
}

const SponsorTier: React.FC<SponsorTierProps> = ({ tier_name, className, company_logo_urls }) => {
  return (
    // container for the tier
    <div>
      <h1 className={`text-5xl text-center ${className} font-extrabold`}>{tier_name}</h1>
      <div className="flex flex-wrap items-center justify-center align-middle gap-5 px-16">
        {company_logo_urls.map((url, index) => (
          <SponsorWidget image_path={url} key={index} />
        ))}
      </div>
    </div>
  )
}

export default SponsorTier;
