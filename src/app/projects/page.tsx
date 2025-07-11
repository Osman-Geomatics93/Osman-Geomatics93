'use client'

import React, { useState, useEffect } from 'react'
import { Calendar, MapPin, Users, Award, ArrowRight, Filter, ExternalLink, Star, Sparkles, Trophy, Target, Globe, Zap } from 'lucide-react'

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime = null
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration
      
      if (progress < 1) {
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration])
  
  return <span>{count}</span>
}

// Project data based on your CV - ALL PROJECTS
const projects = [
  {
    id: 1,
    title: "GIS & Remote Sensing for Powered Water Management",
    organization: "Hydraulics Research Center",
    organizationLogo: "💧",
    duration: "May 2023 - Jul 2024",
    location: "Gezira Scheme, Sudan",
    category: "Water Management",
    description: "Developing a comprehensive spatial and attribute database integrating remote sensing, field, and socio-economic data to support sustainable water management, irrigation optimization, and environmental monitoring in the Gezira Scheme.",
    technologies: ["GIS", "Remote Sensing", "Spatial Databases", "Machine Learning", "Environmental Monitoring"],
    achievements: [
      "Comprehensive spatial database development",
      "Sustainable water management solutions",
      "Environmental monitoring integration",
      "Irrigation optimization strategies"
    ],
    link: "https://bit.ly/4jZsTs2",
    featured: true,
    color: "blue"
  },
  {
    id: 2,
    title: "Remote Sensing–Based Monitoring and Yield Forecasting for the Gezira Irrigation Scheme",
    organization: "FAO",
    organizationLogo: "🏛️",
    duration: "Jan 2023 - Sep 2024",
    location: "Gezira Scheme, Sudan",
    category: "Remote Sensing",
    description: "Used WaPOR and field data to produce monthly crop water use reports, yield forecasts, and infrastructure assessments. Improved monitoring by 15% and productivity by 9%. Applied SVM for crop classification and standardized field protocols.",
    technologies: ["WaPOR", "Sentinel-2", "Support Vector Machine", "Python", "ArcGIS Pro", "Field Protocols"],
    achievements: [
      "Improved monitoring accuracy by 15%",
      "Increased productivity by 9%",
      "Monthly crop water use reports",
      "Yield forecasting with 85% accuracy"
    ],
    link: "https://tez.yok.gov.tr/UlusalTezMerkezi/tezSorguSonucYeni.jsp",
    featured: true,
    color: "green"
  },
  {
    id: 3,
    title: "Water Management and Productivity Assessment for Gash Irrigation Scheme",
    organization: "IFAD",
    organizationLogo: "🌾",
    duration: "Mar 2019 - Jul 2021",
    location: "Gash Irrigation Scheme, Sudan",
    category: "Water Management",
    description: "Utilized modern surveying and GIS techniques to assess water infrastructure and agricultural productivity, modeled irrigation networks, and optimized water allocation strategies for sustainable agricultural development.",
    technologies: ["GIS", "GPS RTK", "Hydrological Modeling", "Infrastructure Assessment", "Water Allocation"],
    achievements: [
      "Water infrastructure assessment",
      "Agricultural productivity optimization",
      "Irrigation network modeling",
      "Optimized water allocation strategies"
    ],
    link: "http://bit.ly/45qDPeM",
    featured: true,
    color: "purple"
  },
  {
    id: 4,
    title: "GIS-Based Crop Mapping for Gezira and Rahad Irrigation Schemes",
    organization: "HRC Sudan",
    organizationLogo: "🗺️",
    duration: "Nov 2018 - May 2021",
    location: "Gezira & Rahad Schemes, Sudan",
    category: "Crop Mapping",
    description: "Used satellite imagery and machine learning for crop classification and cultivated area estimation, enhancing accuracy and reducing time/cost over manual methods. Mapped over 2.2 million hectares using advanced classification techniques.",
    technologies: ["Satellite Imagery", "Machine Learning", "Crop Classification", "Area Estimation", "ERDAS", "ENVI"],
    achievements: [
      "Enhanced mapping accuracy by 30%",
      "Reduced time and cost significantly",
      "2.2 million hectares mapped",
      "Machine learning classification system"
    ],
    link: "http://bit.ly/45qDPeM",
    featured: true,
    color: "orange"
  },
  {
    id: 5,
    title: "Nile Gauging Station Site Selection Upstream of High Aswan Dam",
    organization: "HRC Sudan",
    organizationLogo: "🏛️",
    duration: "Dec 2018 - Jun 2020",
    location: "Sudan/Egypt Border",
    category: "Hydrological Survey",
    description: "Conducted hydrographic and geomorphologic surveys to identify optimal locations for a Nile discharge gauging station. Coordinated with Egyptian authorities and provided technical recommendations for transboundary water management.",
    technologies: ["Hydrographic Survey", "Geomorphologic Analysis", "Site Selection", "International Coordination", "ADCP"],
    achievements: [
      "Optimal gauging station site identification",
      "International coordination with Egypt",
      "Technical recommendations delivered",
      "Transboundary water management support"
    ],
    link: "http://bit.ly/45qDPeM",
    featured: false,
    color: "indigo"
  },
  {
    id: 6,
    title: "Hydrology & Surveying for Catchment Management in South Darfur",
    organization: "ZOA",
    organizationLogo: "🌊",
    duration: "Dec 2019 - Apr 2020",
    location: "South Darfur, Sudan",
    category: "Hydrological Survey",
    description: "Conducted hydrological field surveys and catchment modeling to support infrastructure development and flood risk planning using rainfall, soil moisture, and streamflow data. Developed water harvesting strategies for the region.",
    technologies: ["Hydrological Modeling", "Catchment Analysis", "Flood Risk Assessment", "Infrastructure Planning", "HEC-RAS"],
    achievements: [
      "Flood risk reduction by 40%",
      "Infrastructure development support",
      "Comprehensive catchment modeling",
      "Water harvesting structure design"
    ],
    link: "http://bit.ly/45qDPeM",
    featured: false,
    color: "teal"
  },
  {
    id: 7,
    title: "Sedimentation Survey and Analysis in Minor Canals of the Masalamia Major Canal",
    organization: "HRC Sudan",
    organizationLogo: "🏗️",
    duration: "Oct 2019 - Mar 2020",
    location: "Masalamia Canal, Sudan",
    category: "Infrastructure Survey",
    description: "Conducted canal cross-sectional surveys, sediment transport analysis, and proposed dredging and slope stabilization measures to reduce siltation in the irrigation system. Delivered comprehensive maintenance strategies.",
    technologies: ["Canal Surveying", "Sediment Analysis", "Cross-sectional Surveys", "Slope Stabilization", "Dredging Design"],
    achievements: [
      "Comprehensive sedimentation analysis",
      "Dredging strategy development",
      "Slope stabilization measures",
      "Irrigation system optimization"
    ],
    link: "http://bit.ly/45qDPeM",
    featured: false,
    color: "amber"
  }
]

const categories = ["All", "Remote Sensing", "Water Management", "Crop Mapping", "Hydrological Survey", "Infrastructure Survey"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFeatured, setShowFeatured] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setIsVisible(true)
    // Generate particles on client side only to avoid hydration mismatch
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 2
    }))
    setParticles(newParticles)
  }, [])

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const featuredMatch = !showFeatured || project.featured
    return categoryMatch && featuredMatch
  })

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
                { name: 'Projects', href: '/projects', active: true },
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              My <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Projects</span>
            </h1>
            <p className="text-xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-8 max-w-3xl mx-auto">
              Comprehensive showcase of 7 major geospatial projects spanning 8+ years with FAO, IFAD, UNESCO, and ZOA. 
              From remote sensing and crop mapping to water management and infrastructure surveys across Sudan.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: 7, suffix: "", label: "Major Projects Showcased", color: "from-blue-400 to-purple-400", icon: Globe },
                { number: 15, suffix: "+", label: "Total International Projects", color: "from-green-400 to-blue-400", icon: Trophy },
                { number: 4, suffix: "", label: "UN & International Organizations", color: "from-purple-400 to-pink-400", icon: Target },
                { number: 2.2, suffix: "M", label: "Hectares Mapped", color: "from-orange-400 to-red-400", icon: Zap }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
                  <div className="flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                  </div>
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                    <AnimatedCounter end={stat.number} />{stat.suffix}
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-gray-300">
              <Filter className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Filter by:</span>
            </div>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl'
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
            
            <button
              onClick={() => setShowFeatured(!showFeatured)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                showFeatured
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-2xl'
                  : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              <Star className="w-4 h-4" />
              <span>Featured Only</span>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group border border-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br from-${project.color}-400 to-${project.color}-600 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white text-center z-10">
                    <div className="text-4xl mb-2 group-hover:animate-bounce">{project.organizationLogo}</div>
                    <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">{project.category}</div>
                  </div>
                  {/* Floating elements */}
                  <Sparkles className="absolute top-4 right-4 w-6 h-6 text-white/50 animate-pulse" />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 animate-bounce">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title & Organization */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Users className="w-4 h-4" />
                      <span>{project.organization}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className={`bg-${project.color}-500/20 text-${project.color}-300 px-2 py-1 rounded-full text-xs font-medium border border-${project.color}-500/30`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full text-xs font-medium border border-gray-500/30">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Achievement */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                    <div className="flex items-center space-x-2 mb-1">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs font-medium text-yellow-300">Key Achievement</span>
                    </div>
                    <p className="text-xs text-purple-200">{project.achievements[0]}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center border border-white/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Interested in My Work?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how my expertise in GIS, remote sensing, and water management can help your next project.
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
              href="/resume.pdf"
              download="Osman_Ibrahim_CV.pdf"
              className="border border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-medium hover:bg-purple-400/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Award className="w-4 h-4" />
              <span>Download Resume</span>
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