import { education } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-28 lg:py-36 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">Education</h2>
            <p className="max-w-[900px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              My academic background and qualifications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">{edu.degree}</CardTitle>
                <p className="text-lg text-primary">{edu.institution}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">Graduated: {edu.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
