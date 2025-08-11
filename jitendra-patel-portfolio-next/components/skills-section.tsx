import { skills } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">My Skills</h2>
            <p className="max-w-[900px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              A comprehensive overview of the technologies and tools I master.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Frontend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {skills.frontend.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-base bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Backend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {skills.backend.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-base bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Databases</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {skills.databases.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-base bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Tools</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-base bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
