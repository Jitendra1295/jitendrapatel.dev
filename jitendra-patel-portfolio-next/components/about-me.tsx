import { personalInfo } from "@/lib/data"
import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-16 md:py-28 lg:py-36 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">About Me</h2>
              <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <Image
              src={personalInfo.photo || "/placeholder.svg"}
              width={400}
              height={400}
              alt={`Portrait of ${personalInfo.name}`}
              className="rounded-lg object-cover aspect-square shadow-xl border-4 border-primary transform hover:scale-105 transition-transform duration-300 lg:hidden" // Hidden on large screens, shown on smaller
            />
          </div>
        </div>
      </div>
    </section>
  )
}
