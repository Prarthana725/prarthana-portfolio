'use client'

import { motion, Variants } from 'framer-motion'

export default function CTA() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background gradients */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-warm-orange/20 via-neon-orange/10 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-warm-orange/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="text-center space-y-8">
          <motion.div className="inline-block" variants={itemVariants}>
            <span className="text-warm-orange text-sm font-semibold tracking-wider uppercase">
              Let's Connect
            </span>
            <motion.div
              className="h-0.5 bg-gradient-to-r from-warm-orange to-neon-orange mt-2 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            variants={itemVariants}
          >
            Ready to Learn and <br />
            <motion.span
              className="text-warm-orange neon-glow inline-block"
              animate={{
                textShadow: [
                  '0 0 10px rgba(255, 77, 0, 0.5)',
                  '0 0 25px rgba(255, 77, 0, 0.8)',
                  '0 0 10px rgba(255, 77, 0, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Grow Together?
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I'm always open to feedback, collaboration opportunities, internships,
            or just connecting with fellow designers and mentors.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-10 py-5 bg-gradient-to-r from-warm-orange to-neon-orange text-white font-bold rounded-lg text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>

            <motion.a
              href="mailto:prarthana8774@gmail.com"
              className="px-10 py-5 border-2 border-warm-orange/50 text-warm-orange font-bold rounded-lg text-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="pt-12 flex flex-wrap justify-center gap-6 text-gray-400"
            variants={itemVariants}
          >
            <motion.a href="mailto:prarthana8774@gmail.com" whileHover={{ scale: 1.1 }}>
              prarthana8774@gmail.com
            </motion.a>
            <span>•</span>
            <motion.a href="tel:+94702724671" whileHover={{ scale: 1.1 }}>
              +94 70 272 4671
            </motion.a>
            <span>•</span>
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
