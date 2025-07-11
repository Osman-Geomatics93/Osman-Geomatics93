'use client'

import React, { useState, useEffect } from 'react'
import { Award, ExternalLink, Calendar, MapPin, Star, Sparkles, Download, Eye, ChevronRight, Users, BookOpen, Trophy } from 'lucide-react'

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

export default function CertificationsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
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

  const certifications = [
    {
      id: 1,
      emoji: "🏛️",
      title: "Remote Sensing Image Acquisition, Analysis and Applications",
      organization: "UNSW Sydney & IEEE Geoscience and Remote Sensing Society",
      year: "2023",
      duration: "Oct 2023 - Dec 2023",
      color: "blue",
      category: "remote-sensing",
      description: "Completed an advanced course on the principles and applications of remote sensing, including sensor types, satellite image acquisition techniques, spectral signatures, image interpretation, and data preprocessing. Gained hands-on experience in analyzing satellite data for environmental, agricultural, and urban applications using modern remote sensing workflows aligned with IEEE and academic standards.",
      link: "https://coursera.org/verify/certificate_id"
    },
    {
      id: 2,
      emoji: "🎓",
      title: "Geospatial Analysis with ArcGIS",
      organization: "University of California, Davis",
      year: "2023",
      duration: "Sep 2023 - Nov 2023",
      color: "green",
      category: "gis",
      description: "Completed a comprehensive course on spatial data analysis using ArcGIS. Developed practical skills in spatial data management, coordinate systems, spatial joins, geoprocessing tools, raster analysis, and creating map layouts. Gained hands-on experience in solving real-world geospatial problems using industry-standard workflows in ArcGIS Desktop and ArcGIS Online environments.",
      link: "https://coursera.org/verify/certificate_id"
    },
    {
      id: 3,
      emoji: "🍁",
      title: "Spatial Analysis and Satellite Imagery in a GIS",
      organization: "University of Toronto",
      year: "2023",
      duration: "Aug 2023 - Nov 2023",
      color: "purple",
      category: "gis",
      description: "Completed a specialized course on integrating satellite imagery with GIS for spatial analysis. Gained practical skills in interpreting remote sensing data, performing raster-based analyses, and applying spatial statistics to real-world geographic problems. Emphasized the use of GIS tools for land cover classification, change detection, and environmental monitoring.",
      link: "https://www.coursera.org/account/accomplishments/verify/729AQRHDM2UW"
    },
    {
      id: 4,
      emoji: "🔍",
      title: "Data Analysis with R Programming",
      organization: "Google",
      year: "2023",
      duration: "May 2023 - Dec 2023",
      color: "red",
      category: "programming",
      description: "Completed a hands-on course focused on data analysis using R, covering data cleaning, visualization, statistical analysis, and data manipulation with tidyverse packages. Developed skills in generating insights from large datasets, writing reproducible scripts, and applying data-driven decision-making processes.",
      link: "https://www.coursera.org/account/accomplishments/verify/KJ4JQPDC2J52"
    },
    {
      id: 5,
      emoji: "💻",
      title: "Data Analysis with Python",
      organization: "IBM",
      year: "2024",
      duration: "Jan 2024 - Mar 2024",
      color: "orange",
      category: "programming",
      description: "Completed a hands-on course on data analysis using Python. Topics covered include data wrangling, exploratory data analysis, statistical testing, and visualization using Pandas, Numpy, Matplotlib, and Seaborn. Developed practical skills in working with real datasets and applying analytical techniques for decision-making and reporting.",
      link: "https://www.coursera.org/account/accomplishments/verify/VCKACJAQ92VV"
    },
    {
      id: 6,
      emoji: "🌊",
      title: "Hydraulic Engineering in River Basins",
      organization: "Regional Training Center of the Hydraulics Research Institute",
      year: "2021",
      duration: "Dec 2020 - Mar 2021",
      color: "indigo",
      category: "hydraulics",
      description: "Completed an intensive training program focused on the design, modeling, and management of hydraulic systems in river basins. Covered topics such as flow dynamics, irrigation structures, watershed management, sediment transport, and flood control strategies. Gained practical skills in river engineering using fieldwork, simulation tools, and hydraulic design principles relevant to large-scale water infrastructure projects across Africa and the MENA region.",
      link: "https://drive.google.com/file/d/1Crq_bwviW13QAtYByUpjKDV9ORhUPIfI/view?usp=sharing"
    },
    {
      id: 7,
      emoji: "🛰️",
      title: "GIS & RS in WaPOR system",
      organization: "Hydraulics Research Center",
      year: "2020",
      duration: "Sep 2020 - Oct 2020",
      color: "teal",
      category: "remote-sensing",
      description: "Completed hands-on training on agricultural water productivity assessment using FAO's WaPOR database and open-source geospatial tools. Gained practical experience in accessing and analyzing evapotranspiration, biomass, and water productivity data for irrigation performance monitoring. Developed spatial analysis workflows for decision support in water resource planning and agricultural sustainability.",
      link: "https://drive.google.com/file/d/1y3Id-15QSpiNNJHyAUES1KEGcedxOfAN/view?usp=sharing"
    },
    {
      id: 8,
      emoji: "🐍",
      title: "Python for GIS Development",
      organization: "PARIS Training Center",
      year: "2019",
      duration: "Sep 2019 - Oct 2019",
      color: "yellow",
      category: "programming",
      description: "Completed specialized training on developing GIS tools and automating spatial workflows using Python. Covered key libraries such as arcpy, geopandas, and PyQGIS for spatial data handling, mapping, and geoprocessing. Applied scripting techniques to optimize geospatial analysis and improve productivity in GIS projects.",
      link: "https://drive.google.com/file/d/1oA1E_3bgPw4H7UBS90VXp2Os_2eJ5Chs/view?usp=sharing"
    },
    {
      id: 9,
      emoji: "🌍",
      title: "Geographic Information System (GIS) using QGIS",
      organization: "IOM–UN Migration, UNAMID, and WES Sudan",
      year: "2020",
      duration: "Dec 2019 - Jan 2020",
      color: "pink",
      category: "gis",
      description: "Successfully completed hands-on training on Geographic Information Systems using QGIS. Developed skills in spatial data creation, map design, coordinate systems, geoprocessing, and field data integration. The course emphasized open-source GIS workflows for humanitarian, environmental, and water-related applications, supported by international organizations including IOM and UNAMID.",
      link: "https://drive.google.com/file/d/1QWs0l12Cpd_8mn5zbROP09OiDhRYWQe9/view?usp=sharing"
    },
    {
      id: 10,
      emoji: "🏛️",
      title: "Basics of Remote Sensing and Essentials for Water Harvesting Applications",
      organization: "UNESCO RCWH – Ministry of Water Resources, Sudan",
      year: "2019",
      duration: "Mar 2019 - Mar 2019",
      color: "emerald",
      category: "remote-sensing",
      description: "Participated in a specialized training workshop focused on the foundational principles of remote sensing and its application to water harvesting and resource planning. Covered satellite data interpretation, terrain analysis, and hydrological mapping techniques relevant to sustainable water management in arid and semi-arid regions.",
      link: "https://drive.google.com/file/d/1y2x33J6_gLaR8pcNutdJTuvg75XBGxar/view?usp=sharing"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Certifications', count: certifications.length },
    { id: 'gis', name: 'GIS & Mapping', count: certifications.filter(c => c.category === 'gis').length },
    { id: 'remote-sensing', name: 'Remote Sensing', count: certifications.filter(c => c.category === 'remote-sensing').length },
    { id: 'programming', name: 'Programming', count: certifications.filter(c => c.category === 'programming').length },
    { id: 'hydraulics', name: 'Hydraulics', count: certifications.filter(c => c.category === 'hydraulics').length }
  ]

  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter)

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
                { name: 'Certifications', href: '/certifications', active: true },
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
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Professional <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Certifications</span>
            </h1>
            <p className="text-xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-8">
              Continuous learning and professional development from world-class institutions
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: 10, suffix: "+", label: "Professional Certifications", color: "from-blue-400 to-purple-400" },
                { number: 5, suffix: "", label: "International Institutions", color: "from-purple-400 to-pink-400" },
                { number: 200, suffix: "+", label: "Professionals Trained", color: "from-pink-400 to-red-400" },
                { number: 6, suffix: "+", label: "Years of Teaching", color: "from-green-400 to-blue-400" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
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

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl'
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === category.id ? 'bg-white/20' : 'bg-purple-500/20 text-purple-300'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group border border-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:animate-bounce">{cert.emoji}</div>
                  <div className="flex space-x-2">
                    <span className={`bg-${cert.color}-500/20 text-${cert.color}-300 px-3 py-1 rounded-full text-xs border border-${cert.color}-500/30`}>
                      {cert.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-purple-300 text-sm mb-2 font-medium">
                    {cert.organization}
                  </p>
                  <div className="flex items-center text-gray-400 text-xs mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.duration}
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-4 group-hover:text-gray-200 transition-colors">
                    {cert.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-2">
                    <Trophy className={`w-4 h-4 text-${cert.color}-400`} />
                    <span className="text-xs text-gray-400">Verified</span>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-purple-300 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Eye className="w-4 h-4 mr-1 group-hover/link:animate-bounce" />
                    View Recognition
                    <ExternalLink className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching & Training Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              Knowledge Sharing & Capacity Building
            </h2>
            <p className="text-lg text-gray-300">
              Recognized expertise in training and developing technical professionals
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional Training Program</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Since 2018, I've been responsible for preparing and delivering technical training sessions 
                  for engineers and researchers at the Hydraulics Research Center on geospatial and surveying technologies.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong className="text-green-400">Geographic Information Systems (GIS)</strong></p>
                  <p>• <strong className="text-blue-400">Remote Sensing Techniques (RS)</strong></p>
                  <p>• <strong className="text-purple-400">Land and Bathymetric Surveying</strong></p>
                  <p>• <strong className="text-yellow-400">Professional Software Training</strong> (ArcGIS, ERDAS, AutoCAD, QGIS)</p>
                </div>
                <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <p className="text-green-300 text-sm">
                    <strong>Recognition:</strong> Acknowledged by the Director General of HRC for commitment 
                    and excellence in technical instruction and capacity building.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter end={200} />+
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors">Professionals Trained</div>
                  <div className="text-xs text-gray-400 mt-1">Engineers & Technicians</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter end={6} />+
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors">Years Teaching</div>
                  <div className="text-xs text-gray-400 mt-1">Continuous Training</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter end={15} />+
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors">Training Modules</div>
                  <div className="text-xs text-gray-400 mt-1">Specialized Topics</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter end={10} />+
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors">Software Tools</div>
                  <div className="text-xs text-gray-400 mt-1">Technical Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Ready to Apply This Expertise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how my continuous learning and certified expertise can help your next project succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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