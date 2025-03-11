import SponsorTier from "./_components/SponsorTier"
export default function SponsorsPage() {
  return (
    <div className="flex flex-col mt-32 gap-y-24">
      <SponsorTier tier_name="Diamond" className="text-blue-200" company_logo_urls={["/mathworks.png", "/ansys.png", "/solidworks.png"]} />
      <SponsorTier tier_name="Platinum" className="text-primaryText" company_logo_urls={["/harbor_freight.png", "/gearles.png"]} />
      <SponsorTier tier_name="Gold" className="text-yellow-500" company_logo_urls={["/ankermake.png", "/motul.png"]} />
      <SponsorTier tier_name="Silver" className="text-slate-400" company_logo_urls={["/timken.png"]} />
      <SponsorTier tier_name="Bronze" className="text-yellow-800" company_logo_urls={["/costco.png", "/extremecanopy.png"]} />
    </div>
  )
}
