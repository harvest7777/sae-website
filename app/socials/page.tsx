import SocialWidget from "./_components/SocialWidget"

export default function SocialsPage() {
  return (
    <div className="mt-32 space-y-20">
      <h1 className="header-text">Follow for our progress and events!</h1>
      <div className="flex space-x-10 justify-center ">
        <SocialWidget socialName="Instagram" socialLink="https://www.instagram.com/csulb_sae/" backgroundImageUrl="/instagram.png" />
        <SocialWidget socialName="LinkedIn" socialLink="https://www.linkedin.com/company/elbee-racing-baja-sae" backgroundImageUrl="/linkedin.png" />
        <SocialWidget socialName="TikTok" socialLink="https://www.tiktok.com/@csulb_sae" backgroundImageUrl="/tiktok.png" />
      </div>
    </div>
  )
}
