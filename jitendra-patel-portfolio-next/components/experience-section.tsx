import { experience } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">Experience</h2>
            <p className="max-w-[900px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              My professional journey and key contributions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 sm:grid-cols-1 lg:grid-cols-2">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {exp.role} at <span className="text-primary">{exp.company}</span>
                </CardTitle>
                <p className="text-base text-muted-foreground">{exp.duration}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techUsed.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
