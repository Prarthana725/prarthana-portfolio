'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cinematic-gradient">
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Headline */}
        <motion.div className="space-y-8 z-10" variants={itemVariants}>
          <div className="space-y-4">
            <motion.h1 className="text-5xl md:text-7xl font-black leading-tight">
              <motion.span
                className="text-white block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Crafting Digital
              </motion.span>
              <motion.span
                className="text-warm-orange neon-glow block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Experiences
              </motion.span>
              <motion.span
                className="text-white block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                That Inspire
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 font-light leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              UI/UX and Graphic Design Student passionate about learning and creating intuitive, beautiful digital experiences and visual designs. Currently exploring the world of design and building my portfolio.
            </motion.p>
          </div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-warm-orange to-neon-orange text-white font-semibold rounded-lg shadow-neon-orange hover:shadow-neon-orange-lg transition-all duration-300 text-lg text-center cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 77, 0, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                const projectsSection = document.getElementById('projects')
                if (projectsSection) {
                  const offset = 80 // Account for fixed navigation
                  const elementPosition = projectsSection.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Prarthana_Resume.pdf"
              className="px-8 py-4 border-2 border-warm-orange/50 text-warm-orange font-semibold rounded-lg hover:bg-warm-orange/10 hover:border-warm-orange transition-all duration-300 text-lg text-center cursor-pointer"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 107, 53, 1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Silhouette Portrait */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={imageVariants}
        >
          <div className="relative w-full max-w-md h-[600px]">
            {/* Glowing background circle */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-warm-orange/20 via-neon-orange/10 to-transparent rounded-full blur-3xl"
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Portrait Image */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative w-80 h-96 rounded-2xl shadow-neon-orange-lg overflow-hidden border border-warm-orange/30">
                {/* Portrait Image */}
                <Image
                  src="/portrait.jpg"
                  alt="Prarthana - UI/UX Design Student"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover object-center"
                  priority
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.classList.remove('hidden')
                  }}
                />
                {/* Fallback placeholder (hidden by default, shown if image fails to load) */}
                <div className="hidden w-full h-full bg-gradient-to-b from-warm-orange/30 to-neon-orange/20 flex items-center justify-center absolute inset-0">
                  <div className="text-center space-y-4">
                    <motion.div
                      className="w-48 h-48 mx-auto bg-gradient-to-br from-warm-orange/40 to-neon-orange/30 rounded-full shadow-neon-orange flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <svg className="w-32 h-32 text-warm-orange/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </motion.div>
                    <p className="text-warm-orange/60 text-sm font-medium">Portrait Image</p>
                  </div>
                </div>
                {/* Subtle gradient overlay for better integration with design */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
            
            {/* Floating particles effect */}
            <motion.div
              className="absolute top-10 left-10 w-2 h-2 bg-warm-orange rounded-full shadow-glow"
              variants={particleVariants}
              animate="animate"
            />
            <motion.div
              className="absolute bottom-20 right-20 w-3 h-3 bg-neon-orange rounded-full shadow-glow"
              variants={particleVariants}
              animate="animate"
              transition={{ delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-warm-orange rounded-full shadow-glow"
              variants={particleVariants}
              animate="animate"
              transition={{ delay: 2 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-warm-orange/10 rounded-full blur-3xl -z-0"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-neon-red/10 rounded-full blur-3xl -z-0"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  )
}

