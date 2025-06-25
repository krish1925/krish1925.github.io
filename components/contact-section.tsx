"use client"

import type React from "react"

import { useState } from "react"
import { Send, MapPin, Phone, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Los Angeles, CA",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(310) 343-2561",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "knpatel@ucla.edu",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/krish1925", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/krishpatel2", label: "LinkedIn" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <div className="text-xl text-gray-300 max-w-3xl mx-auto space-y-4">
            <p>
              I'm always excited to tackle challenging problems and collaborate with innovative teams. Whether you're
              looking for an intern who can hit the ground running or a collaborator for your next AI project, let's
              connect.
            </p>
            <p className="text-lg text-cyan-400 font-medium">
              Recent UCLA Graduate seeking: Full-time opportunities in AI/ML, Full-Stack Development, or Data Science
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color}`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Available for new projects</span>
              </div>
              <p className="text-gray-400">
                I'm currently accepting new freelance projects and collaborations. Let's discuss how we can work
                together!
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 border border-gray-700 hover:border-cyan-400"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Krish Patel. All rights reserved. Built with passion and cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  )
}
