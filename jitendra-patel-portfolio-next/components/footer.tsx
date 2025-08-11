import { personalInfo } from "@/lib/data"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted text-muted-foreground">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-6 sm:gap-8">
        {personalInfo.socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              passHref
            >
              <Icon className="h-6 w-6" />
              <span className="sr-only">{link.name}</span>
            </Link>
          )
        })}
      </nav>
      <Link
        href="#hero"
        className="ml-auto sm:ml-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
        passHref
      >
        Back to top <ArrowUp className="h-4 w-4" />
      </Link>
    </footer>
  )
}
