import { testimonials } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-28 lg:py-36 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">Testimonials</h2>
            <p className="max-w-[900px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              What colleagues and clients say about my work.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl"
            >
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <blockquote className="text-xl font-medium leading-relaxed text-foreground mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-14 w-14 border-2 border-primary">
                    <AvatarImage src="/placeholder.svg?height=100&width=100&text=Avatar" />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4 text-left">
                    <div className="font-semibold text-foreground text-lg">{testimonial.author}</div>
                    <div className="text-base text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
