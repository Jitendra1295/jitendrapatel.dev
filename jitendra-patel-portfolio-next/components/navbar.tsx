"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { personalInfo } from "@/lib/data"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
          <span className="text-primary">{personalInfo.name.split(" ")[0]}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Experience
          </Link>
          <Link
            href="#education"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Education
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent/50">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col gap-4 py-6">
                <Link href="#about" className="text-lg font-medium text-foreground hover:text-primary" prefetch={false}>
                  About
                </Link>
                <Link
                  href="#skills"
                  className="text-lg font-medium text-foreground hover:text-primary"
                  prefetch={false}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="text-lg font-medium text-foreground hover:text-primary"
                  prefetch={false}
                >
                  Projects
                </Link>
                <Link
                  href="#experience"
                  className="text-lg font-medium text-foreground hover:text-primary"
                  prefetch={false}
                >
                  Experience
                </Link>
                <Link
                  href="#education"
                  className="text-lg font-medium text-foreground hover:text-primary"
                  prefetch={false}
                >
                  Education
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium text-foreground hover:text-primary"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
