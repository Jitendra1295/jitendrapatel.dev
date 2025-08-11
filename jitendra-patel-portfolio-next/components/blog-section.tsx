import { blogPosts } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function BlogSection() {
  return (
    <section id="blog" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Blog / Articles
            </h2>
            <p className="max-w-[900px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              Insights and thoughts on technology and development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">{post.title}</CardTitle>
                <p className="text-base text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <Link
                  href={post.link}
                  className="inline-flex items-center gap-2 text-primary hover:underline text-lg"
                  passHref
                >
                  Read Article <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
