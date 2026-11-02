"use client"

import { useState } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 0,
      title: "Isotrieve - Embedding Migration for Vector DBs",
      description:
        "Open-source Python library (on PyPI) that migrates a vector database to a new embedding model without re-embedding the corpus. Fits a lightweight linear map from ~2K calibration texts and gates the migration on measured retrieval retention (87-91% on BEIR). Adapters for Chroma, Qdrant, LangChain, and LlamaIndex.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      technologies: ["Python", "NumPy", "Qdrant", "Chroma", "BEIR"],
      featured: true,
      github: "https://github.com/krish1925/isotrieve",
      link: "https://krish1925.github.io/isotrieve/",
    },
    {
      id: 1,
      title: "FlashGPT - Modular Transformer Architecture",
      description:
        "Architected a production-ready GPT implementation with 15+ interchangeable components, enabling researchers to experiment with different attention mechanisms and optimization techniques. Featured FlashAttention and ALiBi for improved efficiency.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      technologies: ["Python", "PyTorch", "CUDA", "MPS"],
      featured: true,
      github: "https://github.com/krish1925/FlashGPT",
    },
    {
      id: 2,
      title: "FitMatch - Gym Partner Finder",
      description:
        "Full-stack web application with Tinder-like interface connecting gym enthusiasts based on preferences and fitness goals. Features real-time matching system with React frontend and MongoDB backend API.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React", "MongoDB", "Node.js", "Express"],
      featured: true,
      github: "https://github.com/krish1925/Gym-Partner-Finder",
    },
    {
      id: 3,
      title: "Sanjeevani - AI-Powered Healthcare Assistant",
      description:
        "Developed an intelligent health assistant combining computer vision and NLP to analyze symptoms from text and images. Implemented RAG architecture for accurate medical information retrieval, potentially reducing preliminary diagnosis time.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      technologies: ["Next.js", "Flask", "MongoDB", "ChromaDB", "Llama3"],
      featured: true,
      github: "https://github.com/jayantp2003/Sanjeevani",
    },
    {
      id: 4,
      title: "Bruinwalk Platform Enhancement",
      description:
        "Enhanced UCLA's course review platform by implementing saved-pages functionality for user profiles, improving navigation and personalization for 25,000+ monthly active students.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["Django", "PostgreSQL", "JavaScript", "HTML/CSS"],
      featured: true,
      link: "https://bruinwalk.com",
    },
    {
      id: 5,
      title: "ext2 File System Revamp",
      description:
        "Optimized ext2 file system on Arch Linux with advanced features including mounting, symbolic links, and bitmaps. Implemented comprehensive testing and performance evaluation for file operations.",
      image: "/placeholder.svg?height=400&width=600",
      category: "systems",
      technologies: ["C", "Linux", "Arch Linux", "File Systems"],
      featured: false,
      github: "https://github.com/krish1925/Ext2-File-System",
    },
    {
      id: 6,
      title: "Tennis Match Manager",
      description:
        "Web application for custom tennis match playback with filtering and search capabilities. Integrates point-level data analysis for coaching and performance review using Firebase and Firestore.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["JavaScript", "Firebase", "Firestore", "CSV Processing"],
      featured: false,
      github: "https://github.com/bruin-tennis-consulting/match-manager",
      link: "https://match-manager-umber.vercel.app/",
    },
    {
      id: 7,
      title: "Bruin Sports Analytics Tennis Platform",
      description:
        "Developed comprehensive tagging and analytics platform for UCLA Tennis athletes, enabling coaches to analyze performance through data-driven insights and match event tracking.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["JavaScript", "Data Analytics", "Sports Analytics"],
      featured: true,
      github: "https://github.com/krish1925/UCLA-Tennis-Match-Viewer",
      link: "https://match-viewing-dashboard.web.app/",
    },
    {
      id: 8,
      title: "Neural Networks Coursework (ECE C147)",
      description:
        "Comprehensive implementation of machine learning algorithms from scratch for UCLA's Neural Networks and Deep Learning course. Five modules, from linear regression to CNNs, all implemented from scratch in NumPy.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      technologies: ["Python", "Jupyter Notebook", "NumPy", "Machine Learning"],
      featured: false,
      github: "https://github.com/krish1925/ECE-C147",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & ML" },
    { id: "web", label: "Web Development" },
    { id: "systems", label: "Systems" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work spanning AI/ML, retrieval systems, web development, and systems
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-105 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                {project.image && !project.image.includes("placeholder") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-24 flex items-end p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-cyan-950/60">
                    <span className="text-xs font-medium uppercase tracking-widest text-cyan-400/80">
                      {categories.find((c) => c.id === project.category)?.label}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/80">
                  <div className="flex space-x-4">
                    {(project.link || project.github) && (
                      <Button asChild size="icon" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full">
                        <a
                          href={project.link || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open project"
                        >
                          <Eye className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild size="icon" className="bg-gray-700 hover:bg-gray-600 text-white rounded-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View source">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    <Button size="icon" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-cyan-400 rounded-full border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {project.github || project.link ? (
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" className="bg-gray-800/80 hover:bg-gray-700 text-white rounded-full">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                  {project.report && (
                    <a href={project.report} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" className="bg-gray-800/80 hover:bg-gray-700 text-white rounded-full">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" className="bg-gray-800/80 hover:bg-gray-700 text-white rounded-full">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              ) : null}
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                    Featured
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
