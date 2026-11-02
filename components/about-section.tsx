"use client"

import { Code, Database, Server, Brain } from "lucide-react"

export default function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Expert Level",
      description: "Python, JavaScript/TypeScript, PyTorch, React, Django",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Proficient",
      description: "C/C++, TensorFlow, AWS, Docker, PostgreSQL, OpenCV",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Familiar",
      description: "R, Kubernetes, Matlab, ChromaDB, Snowflake",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Database,
      title: "Specializations",
      description: "Natural Language Processing, Computer Vision, Transformer Architecture, RAG",
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              I'm a recent Computer Science graduate from UCLA with a passion for pushing the boundaries of what's
              possible with AI and machine learning. My journey began with curiosity about how Netflix recommendations
              work, and it's evolved into building transformer models and computer vision systems that solve real
              problems.
            </p>
            <p>
              When I'm not debugging code or training neural networks, you'll find me analyzing tennis matches for
              UCLA's athletic program or mentoring high school students through exploretech.LA. I believe technology
              should be accessible and impactful—whether that's helping 25,000+ students navigate course selection
              through Bruinwalk or developing AI tools that streamline business operations.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h4 className="text-xl font-semibold text-white">University of California, Los Angeles (UCLA)</h4>
              <p className="text-lg text-gray-300">Bachelor of Science in Computer Science</p>
              <p className="text-gray-400 mt-2">GPA: 3.44</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-gray-400">Aug. 2021 – May 2024 (Graduated)</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-300 font-medium">AI Coursework:</p>
            <p className="text-gray-400">
              Machine Learning, Advanced Deep Learning, Computer Vision, Natural Language Processing, Probability
            </p>

            <p className="text-gray-300 font-medium mt-2">Systems Coursework:</p>
            <p className="text-gray-400">
              Data Structures & Algorithms, Computer Organization & Architecture, Operating Systems
            </p>
          </div>
        </div>

        {/* Skills */}
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4`}>
                <skill.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {skill.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">{skill.description}</p>

              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-gray-300 font-medium">Specializations:</p>
          <p className="text-gray-400">
            Natural Language Processing, Transformer Architecture, Computer Vision, RAG, Time Series Forecasting
          </p>
        </div>
      </div>
    </section>
  )
}
