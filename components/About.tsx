'use client'

import { motion, Variants } from 'framer-motion'

export default function About() {

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const numberVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
      },
    },
  }

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* LEFT CONTENT */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-warm-orange text-sm font-semibold tracking-wider uppercase">
                About Me
              </span>
              <motion.div
                className="h-0.5 bg-gradient-to-r from-warm-orange to-neon-orange mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              Designing with{' '}
              <span className="text-warm-orange neon-glow">Purpose</span> and{' '}
              <span className="text-warm-orange neon-glow">Passion</span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-300 leading-relaxed text-lg"
              variants={itemVariants}
            >
              <motion.p variants={itemVariants}>
                I'm Prarthana, a UI/UX and Graphic Design student passionate about
                creating digital experiences that are both visually appealing and
                user-friendly. Currently, I'm working as a Junior UI/UX Designer
                intern at{' '}
                <span className="text-warm-orange font-semibold">
                  Codearch Pvt Ltd
                </span>
                .
              </motion.p>

              <motion.p variants={itemVariants}>
                My learning journey focuses on understanding user needs,
                practicing creative problem-solving, and staying updated with
                modern design trends. I believe great design comes from empathy
                and understanding.
              </motion.p>

              <motion.p variants={itemVariants}>
                When I'm not studying or working on projects, I'm exploring new
                design tools, learning from industry professionals, and
                continuously improving my craft.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div className="relative" variants={cardVariants}>
            <motion.div
              className="glass-card rounded-2xl p-8 space-y-6 border-l-4 border-warm-orange"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(255, 77, 0, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  My Learning Journey
                </h3>

                <div className="inline-block px-4 py-2 bg-warm-orange/10 border border-warm-orange/30 rounded-lg">
                  <p className="text-warm-orange text-sm font-semibold">
                    💼 Junior UI/UX Designer Intern – Codearch Pvt Ltd (Remote)
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Every project is a learning opportunity. I focus on growing
                  through real-world challenges and continuous improvement.
                </p>
              </div>

              <div className="pt-6 border-t border-warm-orange/20">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    variants={numberVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-warm-orange">2+</div>
                    <div className="text-gray-400 text-sm mt-1">
                      Years Learning
                    </div>
                  </motion.div>

                  <motion.div
                    variants={numberVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-warm-orange">5+</div>
                    <div className="text-gray-400 text-sm mt-1">
                      Projects Completed
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
