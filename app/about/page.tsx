import Polaroid from "./_components/Polaroid"

export default function AboutPage() {
  const description: string = "We are the Society of Automotive Engineers at California State University Long Beach. Our team named, Elbee Racing, is a student-led organization that provides our members with the opportunity to learn how to design, build, and test a four-wheel drive vehicle to compete against other schools in various collegiate competitions under SAE International under the Baja sector."
  return (
    <div className="space-y-20">
      <h1 className="header-text">What are we?</h1>
      {/* container for each bullet point */}
      <div className="flex flex-col justify-center align-middle items-center">
        <div className="md:w-5/6">
          <div className="flex md:flex-row flex-col justify-center items-center align-middle gap-x-10 gap-y-5">
            <div className="w-2/6">
              <Polaroid imageUrl="/about.png" caption="hustlas" rotate={5} />
            </div>
            <p className="md:w-4/6 w-5/6">{description}</p>
          </div>
        </div>

      </div>
    </div >
  )
} 
