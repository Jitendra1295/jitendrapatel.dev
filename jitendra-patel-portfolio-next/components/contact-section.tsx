"use client"

import type React from "react"

import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend API
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="w-full py-16 md:py-28 lg:py-36 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">Contact Me</h2>
            <p className="max-w-[900px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-12 py-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Get in Touch</h3>
            <p className="text-lg text-muted-foreground">
              You can reach me directly via email or connect with me on social media.
            </p>
            <div className="space-y-4">
              {personalInfo.socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="h-7 w-7 text-primary" />
                    <Link
                      href={link.name === "Email" ? `mailto:${personalInfo.contactEmail}` : link.url}
                      target={link.name === "Email" ? undefined : "_blank"}
                      rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                      className="text-lg text-muted-foreground hover:underline"
                      passHref
                    >
                      {link.name === "Email" ? personalInfo.contactEmail : link.url.split("/").pop()}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="space-y-6 bg-card p-8 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-muted-foreground text-base">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 border border-border rounded-lg focus:ring-primary focus:border-primary bg-background text-foreground text-base"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-muted-foreground text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 border border-border rounded-lg focus:ring-primary focus:border-primary bg-background text-foreground text-base"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-muted-foreground text-base">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="p-3 border border-border rounded-lg focus:ring-primary focus:border-primary bg-background text-foreground min-h-[150px] text-base"
                />
              </div>
              <Button
                type="submit"
                className="w-full px-8 py-4 text-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
