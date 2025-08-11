import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar" // Import the new Navbar component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jitendra Patel - Full Stack Developer Portfolio",
  description: "Showcasing the skills and projects of Jitendra Patel, a Full Stack Software Developer.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar /> {/* Include the Navbar here */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
