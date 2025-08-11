import { projects } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import NextLink from "next/link"
import { Github, ExternalLinkIcon } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-28 lg:py-36 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">My Projects</h2>
            <p className="max-w-[900px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              Showcasing a selection of my recent work and contributions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden"
            >
              <CardHeader className="p-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={`Preview of ${project.name}`}
                  className="rounded-t-xl object-fill aspect-video"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6 space-y-3">
                <CardTitle className="text-2xl font-semibold text-foreground">{project.name}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 p-6 pt-0">
                {project.liveLink && (
                  <NextLink href={project.liveLink} target="_blank" rel="noopener noreferrer" passHref>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10 bg-transparent rounded-lg"
                    >
                      <ExternalLinkIcon className="h-4 w-4" /> Live Demo
                    </Button>
                  </NextLink>
                )}
                {project.githubLink && (
                  <NextLink href={project.githubLink} target="_blank" rel="noopener noreferrer" passHref>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-border text-foreground hover:bg-accent/10 bg-transparent rounded-lg"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </Button>
                  </NextLink>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
