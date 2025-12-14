'use client'

import { motion, Variants } from 'framer-motion'

export default function Stats() {
  const stats = [
    { number: '5+', label: 'Projects Completed', icon: '🚀' },
    { number: '2+', label: 'Design Tools', icon: '🎨' },
    { number: '2+', label: 'Years Learning', icon: '⭐' },
    { number: '8+', label: 'Skills Mastered', icon: '💯' },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative glass-card rounded-xl p-6 border border-warm-orange/20 hover:border-warm-orange/50 transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/0 to-neon-orange/0 group-hover:from-warm-orange/10 group-hover:to-neon-orange/5 rounded-xl transition-all duration-300" />

              <div className="relative z-10 space-y-3">
                <motion.div
                  className="text-3xl"
                  whileInView={{ rotate: [0, 10, -10, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {stat.icon}
                </motion.div>

                <motion.div
                  className="text-3xl md:text-4xl font-bold text-warm-orange neon-glow"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  {stat.number}
                </motion.div>

                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
