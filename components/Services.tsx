'use client'

import { motion, Variants } from 'framer-motion'

export default function Services() {

  const services = [
    {
      title: 'UI Design',
      description: 'Learning to create visually appealing and intuitive user interfaces. Practicing design principles, color theory, and typography to build engaging user experiences.',
      icon: '🎨',
    },
    {
      title: 'Graphic Design',
      description: 'Exploring graphic design principles including branding, typography, layout design, and visual communication. Learning to create compelling visual designs for various mediums.',
      icon: '🖼️',
    },
    {
      title: 'UX Research',
      description: 'Exploring user research methods to understand user needs, behaviors, and pain points. Learning to conduct interviews, surveys, and usability studies.',
      icon: '🔬',
    },
    {
      title: 'Prototyping',
      description: 'Building interactive prototypes using tools like Figma to bring designs to life. Learning to create clickable prototypes for testing and presentation.',
      icon: '⚡',
    },
    {
      title: 'Design Systems',
      description: 'Understanding design systems and component libraries. Learning to create consistent, reusable design elements and maintain design standards.',
      icon: '📐',
    },
    {
      title: 'User Testing',
      description: 'Practicing usability testing techniques to gather feedback and iterate on designs. Learning to conduct tests and analyze user behavior.',
      icon: '🧪',
    },
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-warm-orange text-sm font-semibold tracking-wider uppercase">
              Focus Areas
            </span>
            <motion.div
              className="h-0.5 bg-gradient-to-r from-warm-orange to-neon-orange mt-2 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I'm <span className="text-warm-orange neon-glow">Learning</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Key areas I'm focusing on to grow as a UI/UX designer
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group glass-card rounded-xl p-8 border border-warm-orange/20 hover:border-warm-orange/40 transition-all duration-300 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 0 30px rgba(255, 77, 0, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Edge glow */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-warm-orange to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="space-y-4">
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
