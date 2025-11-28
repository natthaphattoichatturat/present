'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

// Define particle type
interface Particle {
  id: number
  left: number
  top: number
  delay: number
  duration: number
}

export default function PresentationPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [heroParticles, setHeroParticles] = useState<Particle[]>([])
  const [ctaParticles, setCtaParticles] = useState<Particle[]>([])
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Generate particles on client-side only to avoid hydration mismatch
  useEffect(() => {
    const generateParticles = (count: number): Particle[] => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2
      }))
    }

    setHeroParticles(generateParticles(15))
    setCtaParticles(generateParticles(10))
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Professional & Impactful */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Minimal floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-green-100 to-teal-100 rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Professional tagline */}
            <div className={`inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              AI-Powered Workforce Management
          </div>
          
            {/* Main headline - Clean and impactful */}
            <div className={`mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-none tracking-tight">
                Smart HR
                <span className="block text-blue-600">Management</span>
          </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Powered by LINE Official Account integration
              </p>
            </div>

            {/* Value proposition */}
            <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                Transform your workforce operations with intelligent automation,
                real-time analytics, and seamless employee experience.
              </p>
            </div>

            {/* Key metrics - Professional layout */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">LINE Channels</div>
                <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
            </div>

              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">1s</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Check-in Time</div>
                <div className="w-12 h-0.5 bg-green-600 mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
            </div>

              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Automated</div>
                <div className="w-12 h-0.5 bg-purple-600 mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
          </div>
        </div>

            {/* Primary CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <button className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
                </span>
              </button>

              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4v4m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 text-gray-400">
            <span className="text-xs font-medium uppercase tracking-widest">Explore Features</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem */}
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                The Challenge
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Manual HR processes are
                <span className="text-red-600"> inefficient</span> and
                <span className="text-red-600"> error-prone</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">•</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Time-consuming attendance tracking</h3>
                    <p className="text-gray-600">Manual check-in processes waste valuable time and create data inconsistencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">•</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Complex leave management</h3>
                    <p className="text-gray-600">Paper-based or fragmented systems lead to approval delays and confusion</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">•</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Limited visibility</h3>
                    <p className="text-gray-600">HR teams lack real-time insights into workforce performance and attendance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Our Solution
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Intelligent automation
                <span className="text-green-600"> powered by LINE</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">One-second check-in</h3>
                    <p className="text-gray-600">Instant attendance capture with GPS verification and automated calculations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Streamlined workflows</h3>
                    <p className="text-gray-600">Automated leave approvals, notifications, and real-time status updates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Complete visibility</h3>
                    <p className="text-gray-600">Real-time dashboards, analytics, and comprehensive reporting tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Channel Architecture */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              System Architecture
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dual LINE Official Account Integration
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Two specialized channels designed for different user roles,
              ensuring security, efficiency, and seamless communication
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Employee Channel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-on-scroll">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Employee Channel</h3>
                  <p className="text-sm text-gray-600">For workforce operations</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">One-click check-in/out</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">Leave requests</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">Personal OT tracking</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">Real-time notifications</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-800 font-medium">Mobile-first design with intuitive LINE interface</p>
              </div>
            </div>

            {/* HR Channel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-on-scroll">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">HR Management Channel</h3>
                  <p className="text-sm text-gray-600">For administrative control</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">Secure admin access</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">Employee management</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">Leave approvals</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">Analytics dashboard</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800 font-medium">Advanced security with comprehensive management tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Features Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg border border-green-200/50 animate-scale-in">
              👥 For Employees
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 bg-gradient-to-r from-gray-900 via-green-800 to-teal-800 bg-clip-text text-transparent">
              Effortless Daily Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Streamlined employee experience with intelligent automation and instant access
            </p>
          </div>

          {/* Feature 1: LINE Interface */}
          <div className="mb-24 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 animate-slide-in-left">
                <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl hover:shadow-green-100/50 transition-all duration-500 transform hover:scale-105">
                  <div className="relative">
                  <Image 
                      src="/images/IMG_5229.PNG"
                    alt="Employee LINE OA Interface" 
                    width={400} 
                    height={800}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              </div>
              <div className="order-1 md:order-2 animate-slide-in-right">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg animate-scale-in">
                  <span className="text-lg">📱</span>
                  Step 1
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                  LINE Official Account Access
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Employees interact with the system through a familiar LINE interface. 
                  The chat-based design eliminates learning curves and provides instant 
                  access to all workforce management features directly from their smartphone.
                </p>
                <div className="bg-white rounded-2xl p-8 border-l-8 border-green-500 shadow-xl hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-300">
                  <h4 className="font-bold text-gray-900 mb-4 text-xl">✨ Key Benefits</h4>
                  <ul className="text-gray-700 space-y-3">
                    {[
                      { icon: '📱', text: 'No app installation required' },
                      { icon: '🔔', text: 'Instant notifications and updates' },
                      { icon: '💬', text: 'Intuitive chat-based interface' }
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <span className="text-2xl">{benefit.icon}</span>
                        <span className="font-medium">{benefit.text}</span>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Registration */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Step 2
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Simple Employee Registration
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Quick and secure onboarding process where employees register using their 
                  13-digit ID card number and full name. The system automatically validates 
                  and links their LINE account to their employee profile.
                </p>
                <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Security Features</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      ID card verification
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      One-time registration process
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Automatic profile linking
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5218.PNG" 
                    alt="Employee Registration" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: One-Click Check-in */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5237.PNG" 
                    alt="Check-out Success" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5238.PNG" 
                    alt="Check-in Success" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Step 3
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Automated Attendance in 1 Second
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Revolutionary one-click attendance system that captures check-in/out with 
                  GPS location verification. The system automatically calculates working hours, 
                  overtime, and late arrivals in real-time.
                </p>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl font-bold mb-2">1 Second</div>
                    <div className="text-green-100">Complete check-in/out process</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Automated Features</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        GPS location verification
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Automatic OT calculation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Late arrival detection
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Instant confirmation message
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Leave Request */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Step 4
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Intelligent Leave Management
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Submit leave requests with ease through a simple form. The system automatically 
                  notifies HR administrators and sends real-time approval notifications back to 
                  employees through LINE messages.
                </p>
                <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Workflow Automation</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        1
                      </div>
                      <div className="text-gray-700">
                        <div className="font-medium">Employee submits request</div>
                        <div className="text-sm text-gray-500">Fill form with leave details</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        2
                      </div>
                      <div className="text-gray-700">
                        <div className="font-medium">HR receives notification</div>
                        <div className="text-sm text-gray-500">Instant alert to admin LINE</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        3
                      </div>
                      <div className="text-gray-700">
                        <div className="font-medium">Approve/Reject decision</div>
                        <div className="text-sm text-gray-500">One-click approval process</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        4
                      </div>
                      <div className="text-gray-700">
                        <div className="font-medium">Employee gets notified</div>
                        <div className="text-sm text-gray-500">Instant status update</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5216.PNG" 
                    alt="Leave Request Form" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5: Personal OT Viewer */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5219.PNG" 
                    alt="Personal OT Hours Viewer" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Step 5
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Personal OT Hours Tracking
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Employees can view their overtime hours and work history anytime. The system 
                  provides a clear breakdown of working hours, OT accumulation, and attendance 
                  details with customizable date ranges.
                </p>
                <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Real-time Insights</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Daily and monthly OT summaries
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Custom date range selection
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Transparent attendance records
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Mobile-optimized interface
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Features Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              For HR Administrators
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Management Platform
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Enterprise-grade tools with advanced security and AI-powered analytics
            </p>
          </div>

          {/* Feature 1: HR LINE Interface */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5239.PNG" 
                    alt="HR LINE OA Interface" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  HR Step 1
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Dedicated HR LINE Official Account
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Separate LINE OA channel exclusively for HR administrators with enhanced 
                  security measures. Access comprehensive management tools through an intuitive 
                  interface designed for efficient workforce administration.
                </p>
                <div className="bg-blue-800/50 backdrop-blur rounded-xl p-6 border border-blue-400/30">
                  <h4 className="font-semibold mb-3">Management Capabilities</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Employee data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>OT tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>AI chatbot</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Secure Authentication */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  HR Step 2
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Secure Admin Registration
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Multi-layer security system with password-protected registration. Only 
                  authorized personnel with the correct admin password can access the HR 
                  management system, ensuring data privacy and system integrity.
                </p>
                <div className="bg-red-900/30 backdrop-blur rounded-xl p-6 border-2 border-red-400/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-200 mb-2">Security Measures</h4>
                      <ul className="text-blue-200 space-y-1 text-sm">
                        <li>Password-protected access</li>
                        <li>Admin role verification</li>
                        <li>Department-level access control</li>
                        <li>Unauthorized access prevention</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5225.PNG" 
                    alt="Admin Registration" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Employee Management System */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5223.PNG" 
                    alt="Employee Management System" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  HR Step 3
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Complete Employee Management
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Comprehensive employee database management with full CRUD operations. 
                  View detailed information, edit employee data, add new employees, 
                  and remove personnel with an intuitive 4-panel interface.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-blue-800/50 backdrop-blur rounded-lg p-4 border border-blue-400/30">
                    <div className="text-2xl mb-1">View</div>
                    <div className="text-sm text-blue-200">Employee details & history</div>
                  </div>
                  <div className="bg-blue-800/50 backdrop-blur rounded-lg p-4 border border-blue-400/30">
                    <div className="text-2xl mb-1">Edit</div>
                    <div className="text-sm text-blue-200">Update information</div>
                  </div>
                  <div className="bg-blue-800/50 backdrop-blur rounded-lg p-4 border border-blue-400/30">
                    <div className="text-2xl mb-1">Add</div>
                    <div className="text-sm text-blue-200">New employee onboarding</div>
                  </div>
                  <div className="bg-blue-800/50 backdrop-blur rounded-lg p-4 border border-blue-400/30">
                    <div className="text-2xl mb-1">Remove</div>
                    <div className="text-sm text-blue-200">Employee offboarding</div>
                  </div>
                </div>
                <div className="bg-blue-800/50 backdrop-blur rounded-xl p-4 border border-blue-400/30 text-sm">
                  <div className="flex items-center gap-2 text-blue-200">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Advanced search and filtering capabilities
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Leave Approval */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  HR Step 4
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Instant Leave Approval Workflow
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Receive immediate notifications when employees submit leave requests. 
                  Review employee information, leave type, date, and reason all in one 
                  card. Approve or reject with a single tap, and the employee receives 
                  instant feedback.
                </p>
                <div className="bg-blue-800/50 backdrop-blur rounded-xl p-6 border border-blue-400/30">
                  <h4 className="font-semibold mb-4">Intelligent Workflow</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Real-time notifications</div>
                        <div className="text-blue-200">Instant alert on new requests</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Complete information display</div>
                        <div className="text-blue-200">All details in one card</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">One-click decision</div>
                        <div className="text-blue-200">Approve or reject instantly</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Automatic employee notification</div>
                        <div className="text-blue-200">Status updates sent immediately</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5221.PNG" 
                    alt="Leave Approval Interface" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5: OT Monitoring */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5224.PNG" 
                    alt="OT Hours Monitoring" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  HR Step 5
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Comprehensive OT Hours Monitoring
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Monitor overtime hours across your entire workforce with powerful filtering 
                  and date range selection. View both summary and detailed views, search by 
                  employee, and analyze OT patterns to optimize workforce planning.
                </p>
                <div className="bg-blue-800/50 backdrop-blur rounded-xl p-6 border border-blue-400/30">
                  <h4 className="font-semibold mb-4">Advanced Analytics</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Summary and detailed view modes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Custom date range selection
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Employee-specific search
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Total OT hours aggregation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Export-ready data format
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 6: Dashboard */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  HR Step 6
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  AI-Powered Dashboard Analytics
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Comprehensive dashboard with AI-generated insights and performance metrics. 
                  View total employee count, attendance rates, average OT hours, and overall 
                  performance scores. Identify top performers and track organizational KPIs in real-time.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold mb-1">90</div>
                    <div className="text-sm text-blue-100">Total Employees</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold mb-1">93.8%</div>
                    <div className="text-sm text-green-100">Attendance Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold mb-1">12.0</div>
                    <div className="text-sm text-indigo-100">Avg OT hrs/person</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold mb-1">90.0</div>
                    <div className="text-sm text-purple-100">Performance Score</div>
                  </div>
                </div>
                <div className="bg-blue-800/50 backdrop-blur rounded-xl p-4 border border-blue-400/30 text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-blue-200">
                      AI analyzes patterns and provides actionable insights for better decision-making
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5240.PNG" 
                    alt="HR Dashboard with AI Analytics" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 7: Employee Meeting Scheduler */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5226.PNG" 
                    alt="Employee Meeting Scheduler" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  HR Step 7
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Direct Employee Communication
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Schedule meetings and communicate directly with employees through the system. 
                  Search through your entire workforce database, view employee details including 
                  LINE registration status, and initiate conversations with a single click.
                </p>
                <div className="bg-blue-800/50 backdrop-blur rounded-xl p-6 border border-blue-400/30">
                  <h4 className="font-semibold mb-4">Communication Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Search 428+ employees instantly
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      View LINE registration status
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Filter by name, ID, or department
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Direct LINE messaging capability
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Meeting schedule coordination
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 8: AI Chatbot */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  HR Step 8
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  AI Assistant for HR Operations
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Intelligent AI chatbot that understands HR queries and provides instant answers. 
                  Get help with employee data lookups, system usage, understanding reports, and 
                  general HR questions. The AI is trained on your system and can assist with 
                  day-to-day operations.
                </p>
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 shadow-lg mb-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    AI Capabilities
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      Employee information queries
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      System usage guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      Report interpretation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      Policy clarification
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-800/50 backdrop-blur rounded-xl p-4 border border-blue-400/30 text-sm">
                  <div className="text-blue-200">
                    Available 24/7 to assist HR administrators with instant, accurate responses
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5227.PNG" 
                    alt="AI Assistant Interface" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 9: AI Chatbot in Action */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/IMG_5222.PNG" 
                    alt="AI Chatbot Conversation" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  HR Step 9
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Intelligent Conversation & Analytics
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  The AI chatbot seamlessly integrates with your LINE chat, providing natural 
                  language interaction. Ask complex questions about employee OT patterns, 
                  attendance issues, or get summaries of specific situations. The AI understands 
                  context and provides detailed, actionable insights.
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-800/50 backdrop-blur rounded-lg p-4 border-l-4 border-green-400">
                    <div className="text-sm text-blue-200 mb-1">Example Query</div>
                    <div className="font-medium">"Show me employees with highest OT this month"</div>
                  </div>
                  <div className="bg-blue-800/50 backdrop-blur rounded-lg p-4 border-l-4 border-purple-400">
                    <div className="text-sm text-blue-200 mb-1">Example Query</div>
                    <div className="font-medium">"Who hasn't attended work yesterday?"</div>
                  </div>
                  <div className="bg-blue-800/50 backdrop-blur rounded-lg p-4 border-l-4 border-indigo-400">
                    <div className="text-sm text-blue-200 mb-1">Example Query</div>
                    <div className="font-medium">"Summarize department attendance rates"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
            </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl animate-scale-in">
              ⚡ Technology Stack
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Built with Modern Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade architecture ensuring reliability, security, and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-10 border border-blue-100 hover:border-blue-300 shadow-xl hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 transform hover:-translate-y-3 animate-on-scroll interactive-card">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 animate-float">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">Modern Web Stack</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  { icon: '⚛️', text: 'Next.js 14 with App Router' },
                  { icon: '🔷', text: 'TypeScript for type safety' },
                  { icon: '🎨', text: 'Tailwind CSS styling' },
                  { icon: '📱', text: 'LIFF SDK integration' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium hover:text-blue-600 transition-colors duration-300">{item.text}</span>
                </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white rounded-3xl p-10 border border-green-100 hover:border-green-300 shadow-xl hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500 transform hover:-translate-y-3 animate-on-scroll interactive-card" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:shadow-green-500/30 transition-all duration-300 group-hover:scale-110 animate-float" style={{ animationDelay: '2s' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-700 transition-colors duration-300">Database & Backend</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  { icon: '🗄️', text: 'Supabase PostgreSQL' },
                  { icon: '⚡', text: 'Real-time subscriptions' },
                  { icon: '🔒', text: 'Row-level security' },
                  { icon: '💾', text: 'Automated backups' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium hover:text-green-600 transition-colors duration-300">{item.text}</span>
                </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white rounded-3xl p-10 border border-purple-100 hover:border-purple-300 shadow-xl hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 transform hover:-translate-y-3 animate-on-scroll interactive-card" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-110 animate-float" style={{ animationDelay: '4s' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">Integrations</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  { icon: '💬', text: 'LINE Messaging API' },
                  { icon: '📱', text: 'LINE LIFF v2' },
                  { icon: '📍', text: 'Geolocation API' },
                  { icon: '🤖', text: 'AI/ML services' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: `${(index * 0.1) + 0.4}s` }}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium hover:text-purple-600 transition-colors duration-300">{item.text}</span>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Trust Signals */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              Trusted by Industry Leaders
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proven Results Across Industries
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of organizations that have transformed their HR operations
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center animate-on-scroll">
              <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">500+</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Active Companies</div>
              <div className="w-16 h-0.5 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="text-4xl md:text-5xl font-black text-green-600 mb-2">50K+</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Employees Managed</div>
              <div className="w-16 h-0.5 bg-green-600 mx-auto mt-4"></div>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2">99.9%</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Uptime</div>
              <div className="w-16 h-0.5 bg-purple-600 mx-auto mt-4"></div>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="text-4xl md:text-5xl font-black text-orange-600 mb-2">24/7</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Support</div>
              <div className="w-16 h-0.5 bg-orange-600 mx-auto mt-4"></div>
            </div>
          </div>

          {/* Industry Logos/Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mb-20">
            <div className="text-2xl font-bold text-gray-400">Manufacturing</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">Healthcare</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">Technology</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">Retail</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">Education</div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 animate-on-scroll">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                  "This system has revolutionized our HR operations. What used to take hours now happens in seconds.
                  Our employees love the LINE integration, and our HR team has complete visibility into workforce data."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Sarah Chen</div>
                    <div className="text-sm text-gray-600">HR Director, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to Transform Your
              <span className="text-blue-400"> HR Operations?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of organizations that have modernized their workforce management
              with our intelligent LINE-powered HR system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4v4m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Demo
              </button>

              <button className="border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Sales
              </button>
            </div>

            {/* Security & Compliance Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Bank-Level Security</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-white font-bold text-xl mb-4">Smart HR System</h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Modern workforce management powered by LINE Official Account integration.
                Streamlining HR operations with intelligent automation and real-time insights.
              </p>
            </div>

            {/* Technology */}
            <div>
              <h4 className="text-white font-semibold mb-4">Technology</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Next.js & React</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Supabase PostgreSQL</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">LINE Messaging API</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">AI/ML Integration</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@smarthr.com</li>
                <li>Phone: +66 XX XXX XXXX</li>
                <li>Website: www.smarthr.com</li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-center md:text-left text-sm">
                © 2025 E-Cloud Technology. All rights reserved.
                <span className="text-gray-400"> Smart HR System powered by LINE Official Account.</span>
              </p>

              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

