// src/app/about/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { MapPin, GraduationCap, Award, Globe, Users, Calendar, ArrowRight, Heart, Target, Lightbulb, Star, Sparkles } from 'lucide-react'

// Define the particle type interface
interface Particle {
  id: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([]) // Fixed: Properly typed

  useEffect(() => {
    setIsVisible(true)
    
    // Generate particles on client side only to avoid hydration mismatch
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 2
    }))
    setParticles(newParticles)
    
    // Auto-advance through sections for demo effect
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 3)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

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
                { name: 'About', href: '/about', active: true },
                { name: 'Projects', href: '/projects', active: false },
                { name: 'Certifications', href: '/certifications', active: false },
                { name: 'Contact', href: '/contact', active: false }
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  About <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Me</span>
                </h1>
                <p className="text-xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  From Sudan to Turkey, building bridges through technology
                </p>
              </div>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="hover:text-white transition-colors duration-300">
                  I&apos;m <strong className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Osman Osama Ahmed Ibrahim</strong>, a Senior Surveying & Geomatics Engineer 
                  with over 8 years of experience transforming landscapes through cutting-edge geospatial technology.
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  Born in <strong className="text-yellow-400">Khartoum, Sudan</strong>, my journey has taken me from the banks of the Nile to the 
                  mountains of Turkey, where I&apos;ve dedicated my career to solving complex water resource challenges 
                  that impact millions of lives.
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  Currently based in <strong className="text-purple-400">Trabzon, Turkey</strong>, I bridge the gap between traditional 
                  surveying methods and modern remote sensing technologies, helping organizations like 
                  <strong className="text-green-400"> FAO</strong>, <strong className="text-blue-400">IFAD</strong>, 
                  and <strong className="text-purple-400"> UNESCO</strong> make data-driven decisions for 
                  sustainable development.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: "Location", value: "Trabzon, Turkey", color: "blue" },
                  { icon: Calendar, label: "Experience", value: "8+ Years", color: "green" },
                  { icon: Globe, label: "Projects", value: "15+ International", color: "purple" },
                  { icon: Users, label: "Languages", value: "Arabic, English, Turkish", color: "orange" }
                ].map((fact, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <fact.icon className={`w-5 h-5 text-${fact.color}-400 group-hover:animate-bounce`} />
                      <span className="font-semibold text-white">{fact.label}</span>
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Professional Photo */}
            <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative group">
                <div className="w-96 h-96 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-3 transform group-hover:scale-105 transition-all duration-500 animate-pulse">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src="https://i.imgur.com/1QHqofS.jpg"
                      alt="Osman Osama Ahmed Ibrahim"
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-spin"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-40 animate-bounce"></div>
                <Sparkles className="absolute top-2 right-2 w-6 h-6 text-yellow-400 animate-pulse" />
                <Star className="absolute bottom-4 left-4 w-5 h-5 text-pink-400 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              My Professional Journey
            </h2>
            <p className="text-lg text-gray-300">
              From student to international project leader
            </p>
          </div>

          <div className="space-y-12">
            {/* Education Journey */}
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Educational Foundation</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Master&apos;s Degree (2022-2024)</h4>
                  <p className="text-cyan-300 mb-2">
                    <strong>Karadeniz Technical University, Turkey</strong>
                  </p>
                  <p className="text-blue-300 mb-4">
                    Geomatics Engineering • GPA: 3.50/4.00
                  </p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Specialized in remote sensing applications for agricultural monitoring, 
                    with thesis on &quot;The use of remote sensing for monitoring agricultural products 
                    in the Gezira Irrigation Scheme, Sudan&quot;
                  </p>
                </div>
                <div className="group">
                  <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Bachelor&apos;s Degree (2012-2017)</h4>
                  <p className="text-cyan-300 mb-2">
                    <strong>Omdurman Islamic University, Sudan</strong>
                  </p>
                  <p className="text-blue-300 mb-4">
                    Surveying Engineering • First Class Honours
                  </p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Graduated with distinction, focusing on Geographic Information Systems Technology. 
                    Thesis: &quot;Evaluating Roads within Omdurman Islamic University Utilising 
                    Geographic Information Systems Technology&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Career Progression */}
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm p-8 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Career Progression</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-6 group hover:border-green-300 transition-colors">
                  <h4 className="font-semibold text-white mb-1 group-hover:text-green-300 transition-colors">Senior Research Engineer & Project Manager</h4>
                  <p className="text-green-300 mb-2">Hydraulics Research Center, Sudan • 2018 - Present</p>
                  <ul className="text-sm text-gray-300 space-y-1 group-hover:text-white transition-colors">
                    <li>• Leading $5M+ geospatial analysis projects with international organizations</li>
                    <li>• Managing multidisciplinary teams of 15+ engineers and technicians</li>
                    <li>• Developing machine learning algorithms for crop classification and yield prediction</li>
                    <li>• Training 200+ professionals in geospatial technologies</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-400 pl-6 group hover:border-blue-300 transition-colors">
                  <h4 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">Land Surveyor & Infrastructure Specialist</h4>
                  <p className="text-blue-300 mb-2">Ministry of Infrastructure and Transport, Sudan • 2017 - 2018</p>
                  <ul className="text-sm text-gray-300 space-y-1 group-hover:text-white transition-colors">
                    <li>• Designed road infrastructure projects worth $10M+ for government initiatives</li>
                    <li>• Executed precision surveys for roads, bridges, and dam construction</li>
                    <li>• Coordinated with international stakeholders and government agencies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* International Recognition */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">International Recognition</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "FAO", color: "green", desc: "Remote sensing-based monitoring and yield forecasting for irrigation schemes" },
                  { name: "IFAD", color: "blue", desc: "Water management and productivity assessment for sustainable agriculture" },
                  { name: "UNESCO", color: "purple", desc: "Water resource management and environmental monitoring projects" }
                ].map((org, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-16 h-16 bg-gradient-to-r from-${org.color}-500 to-${org.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce transition-all duration-300 transform group-hover:scale-110`}>
                      <span className="text-white font-bold text-sm">{org.name}</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {org.name === "FAO" ? "Food and Agriculture Organization" : 
                       org.name === "IFAD" ? "International Fund for Agricultural Development" :
                       "United Nations Educational, Scientific and Cultural Organization"}
                    </h4>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {org.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              My Values & Approach
            </h2>
            <p className="text-lg text-gray-300">
              What drives me to excel in geospatial engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Lightbulb, 
                title: "Innovation", 
                desc: "I believe in pushing the boundaries of traditional surveying by integrating cutting-edge remote sensing technologies and machine learning algorithms to solve complex geospatial challenges.",
                color: "blue"
              },
              { 
                icon: Target, 
                title: "Impact", 
                desc: "Every project I undertake is driven by the desire to create meaningful impact. Whether it's improving agricultural productivity or managing water resources, I focus on solutions that benefit communities.",
                color: "green"
              },
              { 
                icon: Heart, 
                title: "Collaboration", 
                desc: "I thrive in multicultural, multidisciplinary environments. My experience working with international organizations has taught me the value of diverse perspectives in solving global challenges.",
                color: "purple"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group border border-white/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${value.color}-500 to-${value.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{value.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-8">
            Beyond the Professional
          </h2>
          <div className="text-lg text-gray-300 space-y-4">
            <p className="hover:text-white transition-colors duration-300">
              When I&apos;m not analyzing satellite imagery or conducting field surveys, I&apos;m passionate 
              about bridging cultures and sharing knowledge. My journey from Sudan to Turkey has 
              given me a unique perspective on how technology can transcend borders.
            </p>
            <p className="hover:text-white transition-colors duration-300">
              I&apos;m fluent in <strong className="text-blue-400">Arabic</strong>, <strong className="text-green-400">English</strong>, 
              and <strong className="text-purple-400">Turkish</strong>, which has been invaluable in my international work. 
              I believe that effective communication is just as important as technical expertise.
            </p>
            <p className="hover:text-white transition-colors duration-300">
              I&apos;m also committed to knowledge sharing and capacity building. Through my work at the 
              Hydraulics Research Center, I&apos;ve had the privilege of training over 200 professionals 
              in geospatial technologies, contributing to the next generation of engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I&apos;m always excited to collaborate on projects that combine technical innovation 
            with meaningful impact. Whether you&apos;re planning a water resource management 
            initiative or need expertise in remote sensing applications, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="/projects"
              className="border border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-medium hover:bg-purple-400/20 transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </a>
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