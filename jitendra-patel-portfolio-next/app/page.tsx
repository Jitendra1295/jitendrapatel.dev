import HeroSection from "@/components/hero-section"
import AboutMe from "@/components/about-me"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import CertificationsSection from "@/components/certifications-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        {/* <TestimonialsSection /> */}
        {/* <BlogSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
