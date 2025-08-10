"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ArrowDown,
  ExternalLink,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Camera,
  Sun,
  Moon,
  Shuffle,
  Facebook,
  Linkedin,
} from "lucide-react"

export default function OramaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      name: "Sage",
      description:
        "Top quality services and hospitality and the doctors working within and the location of the establishment were clearly communicated within 2 short format videos. The clinic's brand story and identity were elevated.",
      category: "Healthcare",
    },
    {
      name: "Digital X",
      description:
        "Digital x Academy for Digital Marketing. This leading education institution demanded us to enhance their key courses and placements. We delivered 5 short formatted video outs, which focused on fictional and comical elements.",
      category: "Education",
    },
    {
      name: "Sleepy Head",
      description: "The client wanted to focus on one single element for story telling and it was crafted accordingly.",
      category: "Lifestyle",
    },
    {
      name: "Matha Garments",
      description:
        "One of the leading garment distributors in South India with a legacy over 38 years. We create content for all 3 major platforms, building around their manufacturing processes and founder story.",
      category: "Fashion",
    },
  ]

  const services = [
    {
      title: "Comprehensive Production Solutions",
      description:
        "End-to-end production services encompassing conceptualization, pre-production planning, shooting, post-production editing, and final delivery.",
      icon: "🎬",
      image: "/images/o6.png",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Streamlined processes that enable us to provide top-notch services without compromising quality, optimizing costs while delivering unparalleled results.",
      icon: "💰",
      image: "/images/o3.png",
    },
    {
      title: "Enhanced Brand Visibility",
      description:
        "Leveraging creative prowess and industry insights to elevate your brand's visibility through innovative production techniques and captivating storytelling.",
      icon: "📈",
      image: "/images/o5.png",
    },
    {
      title: "Customized Approach",
      description:
        "Tailor-made solutions that align with your brand's identity, values, and target audience, ensuring a personalized and impactful approach.",
      icon: "🎯",
      image: "/images/o7.png",
    },
  ]

  const galleryImages = [
    { src: "/images/o1.png", alt: "Man in black and white, artistic pose" },
    { src: "/images/o2.png", alt: "Man in black and white, standing in doorway" },
    { src: "/images/o3.png", alt: "Man in black and white, thoughtful pose with cigarette" },
    { src: "/images/o4.png", alt: "Man with reflective sunglasses, sepia tone" },
    { src: "/images/o5.png", alt: "Man in patterned jacket, urban setting" },
    { src: "/images/o6.png", alt: "Couple in white, cinematic outdoor shot" },
    { src: "/images/o7.png", alt: "Close-up portrait of a woman with curly hair" },
    { src: "/images/o8.png", alt: "Woman in red with a large decorated hat" },
    { src: "/images/o9.png", alt: "Man in black and white, sitting with cigarette" },
  ]

  const navigationItems = ["Home", "About", "Services", "Portfolio", "Gallery", "Contact"]

  // Your Google Drive video links
  const googleDriveVideoLinks = [
    "https://drive.google.com/file/d/1Fczamy-D3zodbvFi6bnRjXKsZHqK6c-A/view?usp=drive_link",
    "https://drive.google.com/file/d/1xuuRqCK5Jq_cjbxj3BJ3C62VvGpSZc3N/view?usp=drive_link",
    "https://drive.google.com/file/d/1JLu3NYmz38rrps06GnwxaOi2-zjtqV4d/view?usp=drive_link",
    "https://drive.google.com/file/d/1agQFL_CqJ2uFgj2SHSJHd2uwE4bQnCEw/view?usp=drive_link",
    "https://drive.google.com/file/d/1nlBCCEQm-U5MWKrh-_Tusgwn2wpK4Z7m/view?usp=drive_link",
    "https://drive.google.com/file/d/1XaiQBfiTWtEo24ljRUioJosQAW6cOq2y/view?usp=drive_link",
    "https://drive.google.com/file/d/1OkP8-6DR4W4E-ckgnvUUyVMOi9RrOmRd/view?usp=drive_link",
    "https://drive.google.com/file/d/1DgQOR0IXkbwuJUQZ02_wZ34gnVKuKgR6/view?usp=drive_link",
    "https://drive.google.com/file/d/1-j4YvQ5_7dPdWogNakzNPpkDl_Gq0M3e/view?usp=drive_link",
    "https://drive.google.com/file/d/1W1-OZnwvzlmxIm938V4UFD8iIu0kDGQP/view?usp=drive_link",
  ]

  const playRandomGoogleDriveVideo = () => {
    const randomIndex = Math.floor(Math.random() * googleDriveVideoLinks.length)
    const videoUrl = googleDriveVideoLinks[randomIndex]
    window.open(videoUrl, "_blank") // Open in a new tab
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "dark bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Preloader */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          onAnimationComplete={() => setIsLoading(false)}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl sm:text-8xl font-bold tracking-wider text-white mb-4"
          >
            ÒRAMA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg sm:text-xl text-gray-400 mb-8"
          >
            Building Experiences...
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.5 }}
            className="h-1 w-48 sm:w-64 bg-white/20 rounded-full overflow-hidden"
          >
            <div className="h-full bg-white/80 animate-pulse"></div>
          </motion.div>
        </motion.div>
      )}

      {/* Main Content - Only render after preloader is done */}
      {!isLoading && (
        <>
          {/* Navigation */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 backdrop-blur-md ${isDarkMode ? "bg-black/20 border-b border-white/10" : "bg-white/20 border-b border-black/10"}`}
          >
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <motion.div whileHover={{ scale: 1.05 }} className="text-xl sm:text-2xl font-bold tracking-wider">
                  ÒRAMA
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                  {navigationItems.map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ y: -2, color: isDarkMode ? "#a0a0a0" : "#333333" }}
                      className={`text-sm font-medium transition-colors ${isDarkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}`}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>

                <div className="flex items-center space-x-2 sm:space-x-4">
                  {/* Theme Toggle */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-full backdrop-blur-sm ${isDarkMode ? "bg-white/10" : "bg-black/10"}`}
                  >
                    {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </motion.button>

                  {/* Mobile Menu Toggle */}
                  <motion.button
                    className={`md:hidden p-2 rounded-full backdrop-blur-sm ${isDarkMode ? "bg-white/10" : "bg-black/10"}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                height: isMenuOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`md:hidden backdrop-blur-md border-t overflow-hidden ${isDarkMode ? "bg-black/95 border-white/10" : "bg-white/95 border-black/10"}`}
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isMenuOpen ? 1 : 0,
                      x: isMenuOpen ? 0 : -20,
                    }}
                    transition={{ delay: index * 0.1 }}
                    className={`block text-lg font-medium py-2 border-b last:border-b-0 ${isDarkMode ? "text-white hover:text-gray-300 border-white/10" : "text-black hover:text-gray-700 border-black/10"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.nav>

          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements - Reduced on mobile */}
            <motion.div style={{ y }} className="absolute inset-0 opacity-10 sm:opacity-20">
              <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl sm:blur-3xl"></div>
              <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-24 sm:w-48 h-24 sm:h-48 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl sm:blur-3xl"></div>
              <div className="absolute bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-2xl sm:blur-3xl"></div>
            </motion.div>

            {/* New Floating Elements - White */}
            <motion.div
              className={`absolute top-[5%] left-[10%] w-24 h-24 rounded-full blur-xl bg-white/20 border border-white/30 animate-float-1`}
            ></motion.div>
            <motion.div
              className={`absolute bottom-[15%] right-[5%] w-32 h-32 rounded-full blur-xl bg-white/20 border border-white/30 animate-float-2`}
            ></motion.div>
            <motion.div
              className={`absolute top-[30%] right-[20%] w-16 h-16 rounded-full blur-xl bg-white/20 border border-white/30 animate-float-3`}
            ></motion.div>
            <motion.div
              className={`absolute bottom-[5%] left-[30%] w-20 h-20 rounded-full blur-xl bg-white/20 border border-white/30 animate-float-4`}
            ></motion.div>

            <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 pt-20 sm:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-6 sm:space-y-8"
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4 sm:mb-8 leading-tight"
                >
                  ÒRAMA
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed px-4"
                >
                  We don't just create content — we build experiences.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12"
                >
                  Creative Agency & Film Production House
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <Button
                    size={isMobile ? "default" : "lg"}
                    className="bg-white text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 rounded-full font-medium w-full sm:w-auto max-w-xs sm:max-w-none"
                  >
                    Work With Us
                  </Button>
                </motion.div>

                {/* Stats - Mobile optimized */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto px-4"
                >
                  {[
                    { number: "50+", label: "PROJECTS" },
                    { number: "100%", label: "SATISFACTION" },
                    { number: "24/7", label: "SUPPORT" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-gray-400 tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="flex flex-col items-center space-y-2"
              >
                <span className="text-xs sm:text-sm tracking-wider">SCROLL</span>
                <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">About Òrama</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed px-4">
                  At Òrama, we specialize in crafting compelling narratives and elevating brand identities through
                  innovative content strategies. Our expert team develops captivating storylines to enhance both
                  long-term and short-term brand engagement, ensuring your message resonates deeply with your target
                  audience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 px-4"
              >
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Leveraging a diverse pool of talented professionals, we offer a full spectrum of services including
                  web design, catalogue creation, and organic content marketing. Our holistic approach ensures that
                  every aspect of your brand's digital presence is meticulously crafted to drive meaningful connections
                  and sustained growth.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Discover how Òrama can transform your brand's vision into impactful stories and dynamic content that
                  sets you apart in the marketplace.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-16 sm:py-20 lg:py-32 bg-white/5">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">What We Offer</h2>
                <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                  Comprehensive solutions tailored to elevate your brand and create lasting impact
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: isMobile ? 1.02 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
                  >
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={250}
                        height={150}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="py-16 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">Our Projects</h2>
                <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                  Showcasing our creative excellence across diverse industries
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: isMobile ? 1.02 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.name}</h3>
                        <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">
                          {project.category}
                        </Badge>
                      </div>
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0 ml-4"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{project.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* New Play Random Work Button */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-16"
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">Want to see more?</h3>
                <Button
                  onClick={playRandomGoogleDriveVideo}
                  size={isMobile ? "default" : "lg"}
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-7 rounded-full font-semibold shadow-lg transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Shuffle className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                    Play Random Work
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
                <p className="text-sm text-gray-500 mt-4">(This will open the video in a new tab via Google Drive)</p>
              </motion.div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="py-16 sm:py-20 lg:py-32 bg-white/5">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">Our Gallery</h2>
                <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                  A visual journey through our creative work and behind-the-scenes moments.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer"
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-white text-lg sm:text-xl font-bold text-center px-4">{image.alt}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">Let's Work Together</h2>
                <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
                  Ready to transform your brand's vision into impactful stories? Get in touch with us today.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                  <motion.a
                    href="tel:9400422107"
                    whileHover={{ scale: isMobile ? 1.02 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 flex items-center space-x-4 hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="font-medium text-sm sm:text-base">Phone</div>
                      <div className="text-gray-400 text-sm sm:text-base break-all">9400422107, 6282743623</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:Oramamedia660@gmail.com"
                    whileHover={{ scale: isMobile ? 1.02 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 flex items-center space-x-4 hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="font-medium text-sm sm:text-base">Email</div>
                      <div className="text-gray-400 text-sm sm:text-base break-all">Oramamedia660@gmail.com</div>
                    </div>
                  </motion.a>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center px-4"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">Hope to Work With You Soon</h3>
                  <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                    We are excited about the prospect of collaborating with you and contributing to your continued
                    success.
                  </p>
                  <Button
                    size={isMobile ? "default" : "lg"}
                    className="bg-white text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 rounded-full font-medium w-full sm:w-auto max-w-xs sm:max-w-none"
                  >
                    Start Your Project
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Fixed Social Buttons - Mobile optimized and stealthier */}
          <div
            className={`fixed ${isMobile ? "bottom-6 right-4 flex-row space-x-3 space-y-0" : "right-6 top-1/2 transform -translate-y-1/2 flex-col space-y-4"} z-40 flex`}
          >
            {[
              { icon: Camera, label: "Portfolio", href: "#portfolio" },
              { icon: Phone, label: "Call", href: "tel:9400422107" },
              { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919400422107" },
              { icon: Instagram, label: "Instagram", href: "#" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, [isMobile ? "y" : "x"]: 50 }}
                animate={{ opacity: 1, [isMobile ? "y" : "x"]: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`block p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors group ${isMobile ? "w-12 h-12 bg-white/5 border border-white/5" : "w-auto h-auto bg-white/10 backdrop-blur-sm border border-white/10"}`}
                title={item.label}
              >
                <item.icon className={`${isMobile ? "w-4 h-4" : "w-5 h-5"}`} />
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <footer className="py-16 sm:py-20 lg:py-24 bg-black border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-8 mb-12 sm:mb-16">
                {/* Footer Logo & Description */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:col-span-1 text-center md:text-left"
                >
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-wider mb-4">ÒRAMA</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    Creative Agency & Film Production House. We don't just create content — we build experiences.
                  </p>
                  <div className="flex justify-center md:justify-start space-x-4 mt-6">
                    <motion.a
                      href="https://www.instagram.com/oramamedia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: "#E1306C" }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/oramamedia"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: "#1877F2" }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/company/oramamedia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: "#0A66C2" }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Services Links */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center md:text-left"
                >
                  <h4 className="text-xl sm:text-2xl font-bold mb-6">Services</h4>
                  <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                    <li>
                      <a href="#services" className="hover:text-white transition-colors">
                        Film Production
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="hover:text-white transition-colors">
                        Photography
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="hover:text-white transition-colors">
                        Design & Branding
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="hover:text-white transition-colors">
                        Digital Marketing
                      </a>
                    </li>
                  </ul>
                </motion.div>

                {/* Company Links */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center md:text-left"
                >
                  <h4 className="text-xl sm:text-2xl font-bold mb-6">Company</h4>
                  <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                    <li>
                      <a href="#about" className="hover:text-white transition-colors">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" className="hover:text-white transition-colors">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#process" className="hover:text-white transition-colors">
                        Our Process
                      </a>
                    </li>
                    <li>
                      <a href="#team" className="hover:text-white transition-colors">
                        Team
                      </a>
                    </li>
                  </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center md:text-left"
                >
                  <h4 className="text-xl sm:text-2xl font-bold mb-6">Contact</h4>
                  <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                    <li>
                      <a href="tel:9400422107" className="hover:text-white transition-colors">
                        9400422107
                      </a>
                    </li>
                    <li>
                      <a href="tel:6282743623" className="hover:text-white transition-colors">
                        6282743623
                      </a>
                    </li>
                    <li>
                      <a href="mailto:Oramamedia660@gmail.com" className="hover:text-white transition-colors">
                        Oramamedia660@gmail.com
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Bottom Copyright and Message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left space-y-4 sm:space-y-0"
              >
                <p className="text-gray-500 text-sm sm:text-base">
                  © {new Date().getFullYear()} ÒRAMA Media. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm sm:text-base">Hope to work with you soon!</p>
              </motion.div>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}
