"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const facts = [
  { value: "Isotrieve", label: "open-source, published on PyPI" },
  { value: "87–91%", label: "retrieval retention on BEIR" },
  { value: "UCLA CS", label: "B.S. Computer Science" },
]

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 30rem at 15% 10%, rgba(34,211,238,0.10), transparent 60%), radial-gradient(50rem 28rem at 90% 90%, rgba(59,130,246,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-sm font-medium tracking-wide text-cyan-400 mb-6">
          Sales Engineer · Forward Deployed Engineer · Los Angeles
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white max-w-4xl">
          I build the AI prototypes
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            that win enterprise deals.
          </span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
          Retrieval systems, LLM applications, and the integrations that get them into production. I sit between
          customers and engineering: scoping the problem, shipping a proof-of-concept fast, and making it clear to
          non-technical buyers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <Button
            onClick={() => scrollToSection("portfolio")}
            size="lg"
            className="bg-white text-gray-950 hover:bg-gray-200 px-8 rounded-full font-semibold"
          >
            See my work
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gray-700 bg-transparent text-gray-200 hover:bg-gray-800/60 hover:text-white px-8 rounded-full"
          >
            <a href="mailto:krishhnpatel@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Get in touch
            </a>
          </Button>
          <div className="flex items-center gap-1 sm:ml-2">
            <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <a href="https://github.com/krish1925" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <a
                href="https://linkedin.com/in/krishpatel2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-800 pt-8 max-w-3xl">
          {facts.map((f) => (
            <div key={f.value}>
              <dt className="text-xl font-semibold text-white">{f.value}</dt>
              <dd className="mt-1 text-sm text-gray-500">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-600 hover:text-cyan-400 transition-colors"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  )
}
