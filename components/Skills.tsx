'use client'

import { motion } from 'framer-motion'

export default function Skills() {

  const skills = [
    { name: 'UI Design', icon: '🎨', level: 95 },
    { name: 'Graphic Design', icon: '🖼️', level: 90 },
    { name: 'UX Research', icon: '🔍', level: 90 },
    { name: 'Prototyping', icon: '⚡', level: 92 },
    { name: 'Figma', icon: '💎', level: 95 },
    { name: 'User Testing', icon: '🧪', level: 88 },
    { name: 'Design Systems', icon: '📐', level: 90 },
    { name: 'Wireframing', icon: '📝', level: 93 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-warm-orange text-sm font-semibold tracking-wider uppercase">Skills & Expertise</span>
            <motion.div
              className="h-0.5 bg-gradient-to-r from-warm-orange to-neon-orange mt-2 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I <span className="text-warm-orange neon-glow">Excel</span> At
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of design skills and technologies
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative glass-card rounded-xl p-6 border border-warm-orange/20 hover:border-warm-orange/50 transition-all duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/0 to-neon-orange/0 rounded-xl group-hover:from-warm-orange/10 group-hover:to-neon-orange/5 transition-all duration-300"></div>
              
              <div className="relative z-10 text-center space-y-4">
                <motion.div
                  className="text-4xl mb-2"
                  whileInView={{ rotate: [0, 10, -10, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
                
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-warm-orange to-neon-orange rounded-full shadow-glow"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                  />
                </div>
                
                <motion.div
                  className="text-warm-orange text-xs font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                >
                  {skill.level}%
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

