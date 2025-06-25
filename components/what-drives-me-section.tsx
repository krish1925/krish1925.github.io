"use client"

import { Heart, Target, Users, Lightbulb } from "lucide-react"

export default function WhatDrivesMeSection() {
  const motivations = [
    {
      icon: Target,
      title: "Impact-Driven Solutions",
      description:
        "The intersection of technology and human impact fascinates me. I'm motivated by creating solutions that genuinely matter.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Elegant Problem Solving",
      description:
        "My approach combines rigorous technical execution with user-centered design—because the most elegant algorithm means nothing if it doesn't solve a real problem.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Mentorship & Teaching",
      description:
        "Tennis enthusiast and data analyst for UCLA's Division I program. Mentor for 500+ high school students interested in STEM careers.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Heart,
      title: "Continuous Learning",
      description:
        "Open source contributor passionate about democratizing AI education. Always experimenting with the latest ML research papers (currently obsessing over attention mechanisms).",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="what-drives-me" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What Drives Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond the code and algorithms, here's what motivates me to push boundaries and create meaningful technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {motivations.map((motivation, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${motivation.color} mb-6`}>
                <motivation.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {motivation.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">{motivation.description}</p>

              <div
                className={`absolute inset-0 bg-gradient-to-r ${motivation.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mt-16 p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Recognition & Impact
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Top 5%</div>
              <div className="text-gray-300">Salesforce Ranger Status</div>
              <div className="text-gray-500 text-sm">Global Trailblazer Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25K+</div>
              <div className="text-gray-300">Students Impacted</div>
              <div className="text-gray-500 text-sm">Through Bruinwalk Platform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Students Mentored</div>
              <div className="text-gray-500 text-sm">STEM Education & Career Guidance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
