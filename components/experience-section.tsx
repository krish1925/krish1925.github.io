"use client"

import { Calendar, MapPin, Building } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "AI Intern",
      company: "DotSolved Systems Inc",
      location: "Pleasanton, CA",
      period: "June 2024 – Aug. 2024",
      description: [
        "Spearheaded development of 11 Einstein AI proof-of-concepts, directly contributing to 30% increase in client adoption",
        "Achieved Salesforce Ranger status (top 5% of Trailblazers globally) through advanced AI implementation expertise",
        "Engineered end-to-end automated email generation pipeline using fine-tuned Meta Llama3, reducing manual effort by 60%",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Ximple Solutions",
      location: "Remote",
      period: "Aug. 2024 – Sep. 2024",
      description: [
        "Architected and deployed 4 production AI models with Meta Prophet, achieving 90% year-over-year sales prediction accuracy",
        "Streamlined data workflows with Snowflake and Palantir Foundry, reducing query execution time from 10 minutes to 6 minutes",
        "Implemented role-based 2FA authentication system using Angular and Keycloak, eliminating 100% of unauthorized access incidents",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "Bruinwalk",
      location: "Los Angeles, CA",
      period: "June 2024 – Present",
      description: [
        "Architected save course functionality and 5+ AJAX endpoints, enhancing user experience for 25,000+ monthly active users",
        "Deployed Django+PostgreSQL platform on Kubernetes, scaling from 3–5 pods to handle 10x traffic growth",
        "Optimized admin tools by consolidating duplicate database entries and refactoring 10+ API endpoints, improving system reliability",
      ],
    },
    {
      title: "Analytics Engineer",
      company: "Bruin Sports Analytics",
      location: "Los Angeles, CA",
      period: "Apr. 2023 – Present",
      description: [
        "Developed 3 React-based analytics scripts (1200+ lines each) processing SwingVision data for NCAA Division I tennis performance insights",
        "Building OpenCV-powered pose analysis system with Mask R-CNN to extract biomechanical keypoints for technique optimization",
        "Integrated real-time match analytics into BSA's tennis platform using Firebase and React, reducing analysis time from 4 hours to 90 minutes",
      ],
    },
  ]

  const leadership = [
    {
      title: "DevOps Project Lead",
      company: "UCLA Student Media",
      location: "Los Angeles, CA",
      period: "Mar. 2023 – Present",
      description: [
        "Directed cross-functional team of 10 developers and designers to deploy Apply platform on DigitalOcean with Django",
        "Optimized system performance achieving 9x improvement in load times and enhanced report generation efficiency, benefiting 4,000+ applicants",
        "Deployed Timesheet and Inventory systems with Nginx and custom CI/CD pipeline, reducing load time by 60% and latency by 30%",
      ],
    },
    {
      title: "External Director",
      company: "exploretech.LA",
      location: "Los Angeles, CA",
      period: "July 2023 – Present",
      description: [
        "Grew LinkedIn engagement from 500 to 1,800 followers (260% increase), securing $28K in sponsorships (40% YoY growth)",
        "Coordinated annual STEM event educating 500+ high school students through hands-on AI workshops and mentorship programs",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the impact I've made across various roles and organizations
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h3>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[2.25rem] top-[5.5rem] bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent h-[calc(100%-5.5rem)]" />
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side - Company and date */}
                  <div className="md:w-1/3">
                    <div className="flex items-center mb-2">
                      <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-3">
                        <Building className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">{exp.company}</h4>
                    </div>

                    <div className="flex items-center text-gray-400 mb-2 ml-12">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center text-gray-400 ml-12">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Right side - Role and responsibilities */}
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">{exp.title}</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-500 mr-2">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Leadership Experience
            </span>
          </h3>

          <div className="space-y-12">
            {leadership.map((lead, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                {/* Timeline connector */}
                {index < leadership.length - 1 && (
                  <div className="absolute left-[2.25rem] top-[5.5rem] bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent h-[calc(100%-5.5rem)]" />
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side - Organization and date */}
                  <div className="md:w-1/3">
                    <div className="flex items-center mb-2">
                      <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mr-3">
                        <Building className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">{lead.company}</h4>
                    </div>

                    <div className="flex items-center text-gray-400 mb-2 ml-12">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{lead.period}</span>
                    </div>

                    <div className="flex items-center text-gray-400 ml-12">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{lead.location}</span>
                    </div>
                  </div>

                  {/* Right side - Role and responsibilities */}
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">{lead.title}</h4>
                    <ul className="space-y-2">
                      {lead.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
