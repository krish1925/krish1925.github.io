"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])

  class Particle {
    x: number
    y: number
    vx: number
    vy: number
    targetX: number
    targetY: number
    size: number
    opacity: number
    color: string

    constructor(x: number, y: number, targetX: number, targetY: number) {
      this.x = x
      this.y = y
      this.vx = 0
      this.vy = 0
      this.targetX = targetX
      this.targetY = targetY
      this.size = Math.random() * 2 + 1
      this.opacity = Math.random() * 0.5 + 0.5
      this.color = `hsl(${180 + Math.random() * 60}, 70%, 60%)`
    }

    update(mouseX: number, mouseY: number) {
      // Mouse repulsion
      const dx = this.x - mouseX
      const dy = this.y - mouseY
      const distance = Math.sqrt(dx * dx + dy * dy)
      const repulsionRadius = 100

      if (distance < repulsionRadius) {
        const force = (repulsionRadius - distance) / repulsionRadius
        this.vx += (dx / distance) * force * 2
        this.vy += (dy / distance) * force * 2
      }

      // Attraction to target
      const targetDx = this.targetX - this.x
      const targetDy = this.targetY - this.y
      this.vx += targetDx * 0.02
      this.vy += targetDy * 0.02

      // Apply friction
      this.vx *= 0.95
      this.vy *= 0.95

      // Update position
      this.x += this.vx
      this.y += this.vy
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save()
      ctx.globalAlpha = this.opacity
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }

  const createKrishText = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) return []

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2 - 100 // Move text up to leave space below
    const fontSize = Math.min(canvas.width / 8, 100) // Increased from 80 to 100 for bigger text

    ctx.font = `bold ${fontSize}px Arial`
    ctx.textAlign = "center"
    ctx.fillStyle = "white"
    ctx.fillText("Krish Patel", centerX, centerY)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const particles: Particle[] = []

    for (let y = 0; y < canvas.height; y += 3) {
      for (let x = 0; x < canvas.width; x += 3) {
        const index = (y * canvas.width + x) * 4
        const alpha = imageData.data[index + 3]

        if (alpha > 128) {
          // Start particles at their target positions instead of random positions
          const particle = new Particle(x, y, x, y)
          particles.push(particle)
        }
      }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    return particles
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = createKrishText(canvas)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const animate = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        particle.update(mouseRef.current.x, mouseRef.current.y)
        particle.draw(ctx)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(135deg, #030712 0%, #0f172a 100%)" }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 mt-[60vh]">
          {" "}
          {/* Push content down below vector field */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
              4th Year UCLA Graduate | AI Researcher | Full-Stack Developer
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Turning complex problems into elegant solutions, one algorithm at a time
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm text-gray-400">
              <span>(310) 343-2561</span>
              <span>•</span>
              <span>knpatel@ucla.edu</span>
              <span>•</span>
              <a href="https://linkedin.com/in/krishpatel2" className="hover:text-cyan-400 transition-colors">
                linkedin.com/in/krishpatel2
              </a>
              <span>•</span>
              <a href="https://github.com/krish1925" className="hover:text-cyan-400 transition-colors">
                github.com/krish1925
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Button
              onClick={() => scrollToSection("portfolio")}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View My Projects
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
