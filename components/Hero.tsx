'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
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

  const imageVariants: Variants = {
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

  const particleVariants: Variants = {
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden cinematic-gradient"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT SIDE */}
        <motion.div className="space-y-8 z-10" variants={itemVariants}>
          <div className="space-y-4">
            <motion.h1 className="text-5xl md:text-7xl font-black leading-tight">
              <motion.span
                className="text-white block"
                variants={itemVariants}
              >
                Crafting Digital
              </motion.span>
              <motion.span
                className="text-warm-orange neon-glow block"
                variants={itemVariants}
              >
                Experiences
              </motion.span>
              <motion.span
                className="text-white block"
                variants={itemVariants}
              >
                That Inspire
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 font-light leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              UI/UX and Graphic Design Student passionate about learning and creating
              intuitive, beautiful digital experiences and visual designs.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-warm-orange to-neon-orange text-white font-semibold rounded-lg text-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-warm-orange/50 text-warm-orange font-semibold rounded-lg text-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={imageVariants}
        >
          <div className="relative w-full max-w-md h-[600px]">
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

            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border border-warm-orange/30">
                <Image
                  src="/portrait.jpg"
                  alt="Prarthana portrait"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Floating particles */}
            <motion.div
              className="absolute top-10 left-10 w-2 h-2 bg-warm-orange rounded-full"
              variants={particleVariants}
              animate="animate"
            />
            <motion.div
              className="absolute bottom-20 right-20 w-3 h-3 bg-neon-orange rounded-full"
              variants={particleVariants}
              animate="animate"
              transition={{ delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-warm-orange rounded-full"
              variants={particleVariants}
              animate="animate"
              transition={{ delay: 2 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
