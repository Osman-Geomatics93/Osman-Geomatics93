'use client'

import React, { useState, useEffect } from 'react'
import { MapPin, Mail, Phone, Linkedin, Github, Download, ArrowRight, Star, Sparkles } from 'lucide-react'

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

// Complete Research Gallery Component with Working Video Player
const ResearchGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { name: 'All', count: 15 },
    { name: 'Maps', count: 4 },
    { name: 'Charts', count: 3 },
    { name: 'Methodology', count: 2 },
    { name: 'Results', count: 3 },
    { name: 'Documents', count: 2 },
    { name: 'Videos', count: 1 }
  ];

  const galleryItems = [
    // MAPS SECTION
    {
      id: 1,
      category: 'Maps',
      title: 'Gezira Study Area Overview',
      description: 'Geographic overview of the 8.4 hectare study area within Sudan\'s Gezira Irrigation Scheme showing administrative boundaries and irrigation infrastructure.',
      image: '/maps/study-area-map.jpg',
      fallbackImage: '/maps/gezira-overview.png',
      icon: '🗺️',
      subtitle: 'Study Area Mapping',
      tags: ['Maps', 'GIS', 'Study Area'],
      colors: 'from-green-600 to-blue-600'
    },
    {
      id: 2,
      category: 'Maps',
      title: 'Elgabel Office Crop Classification',
      description: 'Machine learning classification results using SVM and OBIA for Elgabel administrative office, showing wheat and other crop distributions.',
      image: '/maps/elgabel-classification.jpg',
      fallbackImage: '/maps/elgabel-results.png',
      icon: '🌾',
      subtitle: 'Elgabel Classification',
      tags: ['Maps', 'Classification', 'ML'],
      colors: 'from-yellow-600 to-green-600'
    },
    {
      id: 3,
      category: 'Maps',
      title: 'Elhoosh Office Classification Results',
      description: 'Comprehensive crop classification mapping for Elhoosh administrative office using advanced remote sensing techniques.',
      image: '/maps/elhoosh-classification.jpg',
      fallbackImage: '/maps/elhoosh-results.png',
      icon: '🗺️',
      subtitle: 'Elhoosh Classification',
      tags: ['Maps', 'Remote Sensing'],
      colors: 'from-blue-600 to-purple-600'
    },
    {
      id: 4,
      category: 'Maps',
      title: 'Wad Elbasir Office Analysis',
      description: 'Detailed crop classification and yield estimation results for Wad Elbasir administrative office with accuracy validation.',
      image: '/maps/wad-elbasir-classification.jpg',
      fallbackImage: '/maps/wad-elbasir-results.png',
      icon: '🌾',
      subtitle: 'Wad Elbasir Results',
      tags: ['Maps', 'Yield Analysis'],
      colors: 'from-purple-600 to-pink-600'
    },

    // CHARTS SECTION
    {
      id: 5,
      category: 'Charts',
      title: 'Water Productivity Enhancement Analysis',
      description: 'Comprehensive comparison showing 15% improvement in WaPOR data accuracy through innovative machine learning algorithms.',
      image: '/charts/water-productivity-chart.jpg',
      fallbackImage: '/charts/productivity-analysis.png',
      icon: '💧',
      subtitle: 'Water Productivity',
      tags: ['Charts', 'Water Management', 'WaPOR'],
      colors: 'from-blue-600 to-cyan-600'
    },
    {
      id: 6,
      category: 'Charts',
      title: 'Wheat Yield Estimation Performance',
      description: 'Machine learning model performance metrics for wheat yield prediction across all three administrative offices in the study area.',
      image: '/charts/yield-estimation-chart.jpg',
      fallbackImage: '/charts/yield-performance.png',
      icon: '📊',
      subtitle: 'Yield Estimation',
      tags: ['Charts', 'ML Models', 'Yield'],
      colors: 'from-orange-600 to-red-600'
    },
    {
      id: 7,
      category: 'Charts',
      title: 'Classification Accuracy Metrics',
      description: 'Detailed performance analysis of SVM and OBIA classification algorithms with precision, recall, and F1-score metrics.',
      image: '/charts/accuracy-metrics.jpg',
      fallbackImage: '/charts/classification-accuracy.png',
      icon: '📈',
      subtitle: 'Accuracy Analysis',
      tags: ['Charts', 'Accuracy', 'SVM', 'OBIA'],
      colors: 'from-green-600 to-blue-600'
    },

    // METHODOLOGY SECTION
    {
      id: 8,
      category: 'Methodology',
      title: 'Complete Research Workflow',
      description: 'Step-by-step methodology workflow from satellite data acquisition through field validation to final analysis and results.',
      image: '/methodology/research-workflow.jpg',
      fallbackImage: '/methodology/methodology-flowchart.png',
      icon: '⚙️',
      subtitle: 'Research Workflow',
      tags: ['Methodology', 'Workflow', 'Process'],
      colors: 'from-purple-600 to-pink-600'
    },
    {
      id: 9,
      category: 'Methodology',
      title: 'Field Sampling Strategy',
      description: 'Strategic sampling design for ground truth data collection across the Gezira Irrigation Scheme with GPS coordinates and timing.',
      image: '/methodology/sampling-strategy.jpg',
      fallbackImage: '/methodology/field-sampling.png',
      icon: '🎯',
      subtitle: 'Sampling Design',
      tags: ['Methodology', 'Field Work', 'Sampling'],
      colors: 'from-indigo-600 to-purple-600'
    },

    // RESULTS SECTION
    {
      id: 10,
      category: 'Results',
      title: 'Comprehensive Crop Area Estimation',
      description: 'Final quantitative results for crop area estimation across the entire Gezira Scheme with statistical validation and confidence intervals.',
      image: '/results/area-estimation.jpg',
      fallbackImage: '/results/crop-area-results.png',
      icon: '📊',
      subtitle: 'Area Estimation',
      tags: ['Results', 'Statistics', 'Validation'],
      colors: 'from-cyan-600 to-blue-600'
    },
    {
      id: 11,
      category: 'Results',
      title: 'WaPOR Data Improvement Results',
      description: 'Quantitative analysis demonstrating 15% enhancement in WaPOR productivity data accuracy through novel algorithmic approaches.',
      image: '/results/wapor-improvement.jpg',
      fallbackImage: '/results/wapor-enhancement.png',
      icon: '📈',
      subtitle: 'WaPOR Enhancement',
      tags: ['Results', 'WaPOR', 'Improvement'],
      colors: 'from-green-600 to-teal-600'
    },
    {
      id: 12,
      category: 'Results',
      title: 'Farmer Questionnaire Analysis',
      description: 'Statistical analysis of wheat cultivation practices based on comprehensive farmer questionnaire data from all study regions.',
      image: '/results/questionnaire-analysis.jpg',
      fallbackImage: '/results/farmer-survey.png',
      icon: '📋',
      subtitle: 'Survey Analysis',
      tags: ['Results', 'Survey', 'Farmers'],
      colors: 'from-orange-600 to-yellow-600'
    }
  ];

  const documentItems = [
    {
      id: 13,
      category: 'Documents',
      title: 'Complete Master\'s Thesis',
      description: 'Full thesis document (120+ pages) with detailed methodology, comprehensive analysis, results, and recommendations for future research.',
      icon: '📄',
      subtitle: 'MSc Thesis Document',
      tags: ['Documents', 'PDF', 'Thesis'],
      colors: 'from-slate-600 to-gray-600',
      downloadLink: '/msc-thesis.pdf',
      downloadName: 'Osman_Ibrahim_MSc_Thesis_Gezira_Remote_Sensing.pdf',
      fileSize: '8.5 MB'
    },
    {
      id: 14,
      category: 'Documents',
      title: 'Research Presentation Slides',
      description: 'Comprehensive presentation slides summarizing key methodology, findings, and implications for agricultural monitoring in Sudan.',
      icon: '📊',
      subtitle: 'Presentation Slides',
      tags: ['Documents', 'Presentation', 'Summary'],
      colors: 'from-blue-600 to-indigo-600',
      downloadLink: '/msc-presentation.pdf',
      downloadName: 'Osman_Ibrahim_Research_Presentation.pdf',
      fileSize: '14.2 MB'
    }
  ];

  const videoItems = [
    {
      id: 15,
      category: 'Videos',
      title: 'Research Overview and Methodology',
      description: 'Comprehensive video overview of the research methodology, key findings, and implications for agricultural monitoring using remote sensing in Sudan\'s Gezira Irrigation Scheme.',
      icon: '🎥',
      subtitle: 'Video Documentation',
      tags: ['Videos', 'Overview', 'Methodology'],
      colors: 'from-red-600 to-pink-600',
      duration: '5:30',
      videoPath: '/videos/research-overview.mp4'
    }
  ];

  const allItems = [...galleryItems, ...documentItems, ...videoItems];

  const filteredItems = activeCategory === 'All' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  const handleImageError = (e, item) => {
    if (item.fallbackImage) {
      e.target.src = item.fallbackImage;
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/30 to-indigo-900/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Research Results & Visualizations
          </h2>
          <p className="text-lg text-gray-300">
            Key findings from remote sensing analysis of Gezira Irrigation Scheme
          </p>
        </div>

        {/* Category Tabs - Fully Functional */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                  : 'bg-white/10 text-purple-200 hover:bg-white/20 border border-purple-400/30'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                
                {/* Visual Section */}
                {item.category === 'Documents' ? (
                  <div className={`aspect-video bg-gradient-to-br ${item.colors} flex items-center justify-center relative`}>
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-lg">{item.subtitle}</div>
                      <div className="text-sm opacity-80 mt-1">{item.fileSize}</div>
                    </div>
                  </div>
                ) : item.category === 'Videos' ? (
                  <div 
                    className={`aspect-video bg-gradient-to-br ${item.colors} flex items-center justify-center relative cursor-pointer`}
                    onClick={() => setSelectedVideo(item)}
                  >
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-lg">{item.subtitle}</div>
                      <div className="text-sm opacity-80 mt-1">Research Documentation</div>
                    </div>
                    {item.duration && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {item.duration}
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all group-hover:scale-110">
                        <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="aspect-video bg-cover bg-center relative cursor-pointer group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(item)}
                  >
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => handleImageError(e, item)}
                      onLoad={(e) => {
                        e.target.style.opacity = '1';
                      }}
                      style={{ opacity: '0', transition: 'opacity 0.3s' }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.colors}/60 flex items-center justify-center opacity-90 hover:opacity-60 transition-opacity`}>
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <div className="font-semibold text-lg">{item.subtitle}</div>
                        <div className="text-sm opacity-90 mt-1">Click to expand</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2 group-hover:text-purple-200 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-2 py-1 rounded-full text-xs border ${
                          index === 0 
                            ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                            : index === 1
                            ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                            : 'bg-green-500/20 text-green-300 border-green-500/30'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {item.category === 'Documents' && (
                    <a
                      href={item.downloadLink}
                      download={item.downloadName}
                      className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Download PDF
                    </a>
                  )}

                  {item.category === 'Videos' && (
                    <button 
                      onClick={() => setSelectedVideo(item)}
                      className="inline-flex items-center bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-300 group"
                    >
                      <span className="mr-2">▶️</span>
                      <span className="group-hover:animate-pulse">Play Video</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}

        {/* Image Modal for Expanded View */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-6xl max-h-[90vh] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="flex justify-between items-center p-6 border-b border-white/20">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{selectedImage.title}</h3>
                  <div className="flex gap-2">
                    {selectedImage.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-white hover:text-red-400 text-3xl font-bold transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500/20"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg shadow-2xl max-h-[60vh] object-contain mx-auto"
                  onError={(e) => handleImageError(e, selectedImage)}
                />
                <p className="text-gray-300 mt-4 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Video Modal for Playing Videos */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <div className="max-w-6xl w-full max-h-[90vh] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="flex justify-between items-center p-6 border-b border-white/20">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{selectedVideo.title}</h3>
                  <div className="flex gap-2">
                    {selectedVideo.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {selectedVideo.duration && (
                    <div className="text-sm text-gray-400 mt-1">Duration: {selectedVideo.duration}</div>
                  )}
                </div>
                <button 
                  onClick={closeVideoModal}
                  className="text-white hover:text-red-400 text-3xl font-bold transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500/20"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <video 
                  controls 
                  autoPlay
                  className="w-full h-auto rounded-lg shadow-2xl max-h-[60vh] bg-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  <source src={selectedVideo.videoPath} type="video/mp4" />
                  <p className="text-white p-4">
                    Your browser does not support the video tag. 
                    <a href={selectedVideo.videoPath} download className="text-blue-400 hover:underline ml-2">
                      Download the video instead
                    </a>
                  </p>
                </video>
                <p className="text-gray-300 mt-4 leading-relaxed">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Summary Statistics */}
        <div className="text-center mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">Research Impact Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  15%
                </div>
                <div className="text-gray-300 text-sm">WaPOR Accuracy Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-gray-300 text-sm">Administrative Offices Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  8.4
                </div>
                <div className="text-gray-300 text-sm">Hectares Study Area</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                  2024
                </div>
                <div className="text-gray-300 text-sm">Research Completion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center mx-auto">
            <span>Explore Full Research Documentation</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Osman O. A. Ibrahim
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Senior Surveying &
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    {" "}Geomatics Engineer
                  </span>
                </h1>
                <p className="text-xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Ph.D. Candidate in Geomatics | GIS & Remote Sensing Specialist | AI & Deep Learning for Water Productivity | Hydrology & Smart Irrigation
                </p>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Experienced engineer with 8+ years in geospatial analysis, remote sensing, and 
                water resource management. Proven track record leading international projects 
                with <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Hydraulics Research Center(HRC), FAO, IFAD, Ministry of Infrastructure and Transport, Karadeniz Technical University and UNESCO</span>.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: "Trabzon, Turkey" },
                  { icon: Mail, text: "osmangeomatics93@gmail.com" },
                  { icon: Phone, text: "(+90) 05319464405" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                  >
                    <item.icon className="w-5 h-5 text-purple-400" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  download="Osman_Ibrahim_CV.pdf"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </a>
                <a 
                  href="/projects"
                  className="border border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-medium hover:bg-purple-400/20 transition-all duration-300 transform hover:scale-105"
                >
                  View Projects
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/osman-o-a-ibrahim-a02a9a197" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/Osman-Geomatics93" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column - Professional Photo */}
            <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative group">
                <div className="w-80 h-80 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-2 transform group-hover:scale-105 transition-all duration-500 animate-pulse">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src="https://i.imgur.com/1QHqofS.jpg"
                      alt="Osman Osama Ahmed Ibrahim - Senior Surveying & Geomatics Engineer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-spin"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40 animate-bounce"></div>
                <Sparkles className="absolute top-2 right-2 w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              Core Expertise
            </h2>
            <p className="text-lg text-gray-300">
              Specialized in cutting-edge geospatial technologies with 10+ professional certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "GIS", 
                title: "GIS & Remote Sensing", 
                desc: "ArcGIS Pro, QGIS, ERDAS, Google Earth Engine", 
                certs: "4 Certifications",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500/10",
                hoverColor: "hover:bg-blue-500/20"
              },
              { 
                icon: "CODE", 
                title: "Programming", 
                desc: "Python, R, SQL, Machine Learning", 
                certs: "3 Certifications",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-500/10",
                hoverColor: "hover:bg-green-500/20"
              },
              { 
                icon: "SURV", 
                title: "Precision Surveying", 
                desc: "GPS RTK, Total Station, ADCP", 
                certs: "Professional Training",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500/10",
                hoverColor: "hover:bg-purple-500/20"
              },
              { 
                icon: "PM", 
                title: "Project Management", 
                desc: "International Projects, Team Leadership", 
                certs: "UN Organizations",
                color: "from-orange-500 to-red-500",
                bgColor: "bg-orange-500/10",
                hoverColor: "hover:bg-orange-500/20"
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-lg ${skill.bgColor} ${skill.hoverColor} transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce`}>
                  <span className="text-white font-bold text-lg">{skill.icon}</span>
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  {skill.desc}
                </p>
                <div className={`text-xs bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-medium`}>
                  {skill.certs}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/certifications"
              className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>View All Certifications</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              Professional Certifications
            </h2>
            <p className="text-lg text-gray-300">
              Continuous learning from world-class institutions including UNSW Sydney, UC Davis, Google, IBM, and UNESCO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🏛️", title: "Remote Sensing Image Acquisition, Analysis and Applications", org: "UNSW Sydney & IEEE", year: "2023", color: "blue" },
              { emoji: "🎓", title: "Geospatial Analysis with ArcGIS", org: "University of California, Davis", year: "2023", color: "green" },
              { emoji: "🍁", title: "Spatial Analysis and Satellite Imagery in a GIS", org: "University of Toronto", year: "2023", color: "purple" },
              { emoji: "🔍", title: "Data Analysis with R Programming", org: "Google", year: "2023", color: "red" },
              { emoji: "💻", title: "Data Analysis with Python", org: "IBM", year: "2024", color: "orange" },
              { emoji: "🌊", title: "Hydraulic Engineering in River Basins", org: "Regional Training Center", year: "2021", color: "indigo" },
              { emoji: "🛰️", title: "GIS & RS in WaPOR system", org: "Hydraulics Research Center", year: "2020", color: "teal" },
              { emoji: "🐍", title: "Python for GIS Development", org: "PARIS Training Center", year: "2019", color: "yellow" },
              { emoji: "🌍", title: "Geographic Information System (GIS) using QGIS", org: "IOM–UN Migration, UNAMID, WES Sudan", year: "2020", color: "pink" }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-white/20 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3 group-hover:animate-bounce">{cert.emoji}</div>
                  <div>
                    <h3 className="font-bold text-white text-sm group-hover:text-purple-200 transition-colors">{cert.title}</h3>
                    <p className="text-purple-300 text-xs">{cert.org}</p>
                  </div>
                </div>
                <span className={`bg-${cert.color}-500/20 text-${cert.color}-300 px-2 py-1 rounded-full text-xs border border-${cert.color}-500/30`}>
                  {cert.year}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Training & Knowledge Sharing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter end={200} />+
                  </div>
                  <div className="text-gray-300">Professionals Trained</div>
                  <div className="text-sm text-gray-400 mt-1">GIS, Remote Sensing, and Surveying Technologies</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter end={6} />+
                  </div>
                  <div className="text-gray-300">Years of Teaching</div>
                  <div className="text-sm text-gray-400 mt-1">Recognized by HRC Director General</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSc Project Section - UPDATED */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-blue-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
              Master's Research Project
            </h2>
            <p className="text-lg text-gray-300">
              Advanced remote sensing research for agricultural monitoring in Sudan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Project Image/Visual */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-xl shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">🛰️</div>
                        <div className="text-lg font-semibold">Remote Sensing</div>
                        <div className="text-sm opacity-80">Agricultural Monitoring</div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-yellow-800" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors leading-tight">
                      The Use of Remote Sensing for Monitoring Agricultural Products in the Gezira Irrigation Scheme, Sudan
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                        Machine Learning
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                        SVM & OBIA
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                        Crop Classification
                      </span>
                      <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30">
                        WaPOR Enhancement
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">Research Overview</h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        This research develops innovative machine learning tools for agricultural monitoring 
                        in Sudan's Gezira Irrigation Scheme using advanced remote sensing techniques. The study 
                        combines Support Vector Machine (SVM) and Object-Based Image Analysis (OBIA) for precise 
                        crop classification and introduces novel algorithms for wheat yield estimation and water 
                        productivity assessment.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">Key Achievements</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Developed machine learning tool for wheat yield and water productivity estimation</li>
                        <li>• Successfully classified crops using SVM and OBIA methodologies</li>
                        <li>• Enhanced WaPOR data accuracy by 15% through innovative algorithms</li>
                        <li>• Created automated monitoring system for Gezira Irrigation Scheme</li>
                        <li>• Analyzed three administrative offices: Elgabel, Elhoosh, and Wad Elbasir</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                          8.4 ha
                        </div>
                        <div className="text-xs text-gray-400">Study Area</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          15%
                        </div>
                        <div className="text-xs text-gray-400">Accuracy Improvement</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          2024
                        </div>
                        <div className="text-xs text-gray-400">Completion</div>
                      </div>
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="/msc-thesis.pdf"
                      download="Osman_Ibrahim_MSc_Thesis_Gezira_Irrigation.pdf"
                      className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4 group-hover:animate-bounce" />
                      <span>Download Thesis</span>
                    </a>
                    <a
                      href="/msc-presentation.pdf"
                      download="Osman_Ibrahim_Research_Presentation.pdf"
                      className="border border-green-400 text-green-300 px-6 py-3 rounded-lg font-medium hover:bg-green-400/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>View Presentation</span>
                    </a>
                  </div>

                  {/* Institution Info */}
                  <div className="border-t border-white/20 pt-4 text-sm text-gray-400">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium text-purple-300">Institution:</span> Karadeniz Technical University
                      </div>
                      <div>
                        <span className="font-medium text-purple-300">Focus Area:</span> Gezira Irrigation Scheme, Sudan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Results Gallery - FULLY FUNCTIONAL WITH VIDEO PLAYER */}
      <ResearchGallery />

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-purple-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 8, suffix: "+", label: "Years Experience", color: "from-blue-400 to-purple-400" },
              { number: 15, suffix: "+", label: "International Projects", color: "from-purple-400 to-pink-400" },
              { number: 10, suffix: "+", label: "Certifications", color: "from-pink-400 to-red-400" },
              { number: 3, suffix: "", label: "UN Organizations", color: "from-green-400 to-blue-400" }
            ].map((stat, index) => (
              <div key={index} className="text-white group">
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                  <AnimatedCounter end={stat.number} />{stat.suffix}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors">{stat.label}</div>
              </div>
            ))}
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
    </main>
  )
}