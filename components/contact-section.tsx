"use client"

import { Send, MapPin, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Los Angeles, CA",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "krishhnpatel@gmail.com",
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
              scoping an AI proof-of-concept or looking for an engineer who can bridge customers and product, let's
              connect.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Email CTA */}
          <div className="space-y-8">
            <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">Get in touch</h3>
              <p className="text-gray-300 mb-6">
                The fastest way to reach me is email. I usually reply within a day or two.
              </p>
              <a
                href="mailto:krishhnpatel@gmail.com"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Send className="h-5 w-5 mr-2" />
                krishhnpatel@gmail.com
              </a>
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

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 border border-gray-700 hover:border-cyan-400"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Krish Patel. All rights reserved. Built with passion and cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  )
}
