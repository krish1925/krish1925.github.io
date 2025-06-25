"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import ContactSection from "@/components/contact-section"
import { ThemeProvider } from "@/components/theme-provider"
import ExperienceSection from "@/components/experience-section"
import WhatDrivesMeSection from "@/components/what-drives-me-section"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "what-drives-me", "experience", "portfolio", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
        <Navigation activeSection={activeSection} />

        <main>
          <HeroSection />
          <AboutSection />
          <WhatDrivesMeSection />
          <ExperienceSection />
          <PortfolioSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  )
}
