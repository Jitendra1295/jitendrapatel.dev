import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full py-20 md:py-32 lg:py-40 xl:py-56 bg-gradient-to-br from-background to-muted overflow-hidden"
    >
      {/* Subtle background shapes for visual interest */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-20 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl/none text-foreground">
                Hi, I'm <span className="text-primary">{personalInfo.name}</span>
              </h1>
              <p className="max-w-[800px] text-xl md:text-2xl text-muted-foreground mx-auto lg:mx-0 leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
              <Link target="_Blank" href={personalInfo.resumeLink} passHref>
                <Button className="w-full min-[400px]:w-auto px-10 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground rounded-lg">
                  Download Resume
                </Button>
              </Link>
              <Link href="#contact" passHref>
                <Button
                  variant="outline"
                  className="w-full min-[400px]:w-auto px-10 py-4 text-xl font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 bg-transparent rounded-lg"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center animate-fade-in-up">
            <Image
              src={personalInfo.photo || "/placeholder.svg"}
              width={450}
              height={450}
              alt={`Portrait of ${personalInfo.name}`}
              className="rounded-full object-cover aspect-square border-4 border-primary shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
