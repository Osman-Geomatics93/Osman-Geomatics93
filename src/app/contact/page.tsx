'use client'

import React, { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, Clock, Globe, CheckCircle, Star, Sparkles, MessageCircle, Calendar, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setIsVisible(true)
    // Generate particles on client side only to avoid hydration mismatch
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 2
    }))
    setParticles(newParticles)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual email service)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl text-center max-w-md mx-4 border border-white/20 relative z-10 transform animate-bounce">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-300 mb-6">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-ping"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-300">
                Osman O. A. Ibrahim
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', href: '/', active: false },
                { name: 'About', href: '/about', active: false },
                { name: 'Projects', href: '/projects', active: false },
                { name: 'Certifications', href: '/certifications', active: false },
                { name: 'Contact', href: '/contact', active: true }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 hover:scale-110 relative group ${
                    item.active 
                      ? 'text-purple-300 font-medium' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    item.active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let's <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Connect</span>
            </h1>
            <p className="text-xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-8 max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, 
              or share expertise in GIS, remote sensing, and water resource management.
            </p>
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>Global Projects</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Expert Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Send me a message</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                    placeholder="Your company or organization"
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  >
                    <option value="" className="bg-slate-800">Select a subject...</option>
                    <option value="job-opportunity" className="bg-slate-800">Job Opportunity</option>
                    <option value="project-collaboration" className="bg-slate-800">Project Collaboration</option>
                    <option value="consulting-services" className="bg-slate-800">Consulting Services</option>
                    <option value="technical-question" className="bg-slate-800">Technical Question</option>
                    <option value="speaking-engagement" className="bg-slate-800">Speaking Engagement</option>
                    <option value="other" className="bg-slate-800">Other</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 resize-none"
                    placeholder="Tell me about your project, opportunity, or question..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 disabled:opacity-50 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:animate-bounce" />
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              {/* Contact Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-cyan-300 transition-colors">Email</p>
                      <a href="mailto:osmangeomatics93@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        osmangeomatics93@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-green-300 transition-colors">Phone</p>
                      <a href="tel:+905319464405" className="text-gray-300 hover:text-green-400 transition-colors">
                        (+90) 05319464405
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-purple-300 transition-colors">Location</p>
                      <p className="text-gray-300">Trabzon, Turkey</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6">Connect on Social Media</h2>
                
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/osman-o-a-ibrahim-a02a9a197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://github.com/Osman-Geomatics93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6">Availability & Response Time</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <Clock className="w-5 h-5 text-blue-400 group-hover:animate-spin" />
                    <div>
                      <p className="font-medium text-white">Response Time</p>
                      <p className="text-blue-300">Usually within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 group">
                    <Globe className="w-5 h-5 text-purple-400 group-hover:animate-pulse" />
                    <div>
                      <p className="font-medium text-white">Time Zone</p>
                      <p className="text-purple-300">Turkey Time (UTC+3)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 group">
                    <Calendar className="w-5 h-5 text-green-400 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium text-white">Availability</p>
                      <p className="text-green-300">Monday - Friday, 9 AM - 6 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6">How I Can Help</h2>
                
                <div className="space-y-3">
                  {[
                    { service: "GIS & Remote Sensing Consulting", color: "blue" },
                    { service: "Water Resource Management", color: "green" },
                    { service: "Agricultural Monitoring Solutions", color: "purple" },
                    { service: "Project Management & Training", color: "orange" },
                    { service: "Technical Documentation & Analysis", color: "red" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                      <div className={`w-3 h-3 bg-${item.color}-500 rounded-full group-hover:animate-ping`}></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item.service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <span className="text-yellow-300 font-medium text-sm">Special Expertise</span>
                  </div>
                  <p className="text-purple-200 text-sm">
                    8+ years experience with international organizations (FAO, IFAD, UNESCO) 
                    and 200+ professionals trained in geospatial technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8 border-t border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
            © 2025 Osman Osama Ahmed Ibrahim. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}