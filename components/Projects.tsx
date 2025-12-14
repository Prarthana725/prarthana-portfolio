'use client'

import { motion } from 'framer-motion'

export default function Projects() {

  const projects = [
    {
      title: 'Restaurant & Admin Suite',
      category: 'Student Project',
      description: 'A full restaurant web + admin dashboard exploration: dark UI, booking flows, and management screens.',
      imageSrc: 'project 1.png',
      caseStudyUrl: 'https://www.figma.com/design/8FZjQfSXujEgrRkDXzYMCE/-st-yr-project?node-id=0-1&t=he1ILwDQfGqjOkIf-1',
      tags: ['Brand', 'Dashboard', 'Figma'],
    },
    {
      title: 'Auction Platform UI',
      category: 'Client Project',
      description: 'Auction marketplace layouts featuring seller tools, bidder dashboards, and listing flows.',
      imageSrc: 'Project 2.png',
      caseStudyUrl: 'https://www.figma.com/design/6CRpyAVZZuHRAcQIfYVvYq/2nd-yr-project?node-id=448-2&t=m6Mkcmz58qIx7WvD-1',
      tags: ['Marketplace', 'UX', 'Prototyping'],
    },
    {
      title: 'Marketing Collateral & Ads',
      category: 'Client Project',
      description: 'Promotional ads and marketing visuals designed with luxury gold palettes and hospitality themes.',
      imageSrc: 'project 3.png',
      caseStudyUrl: 'https://www.figma.com/design/2BGmjXS0WHgeKzNt6PDVaG/Hotel-marketing-post?node-id=0-1&t=iPKJ9MBvjjUnlTyZ-1',
      tags: ['Marketing', 'Visual Design', 'Ads'],
    },
    {
      title: 'Blue SaaS Website Flow',
      category: 'Client Project',
      description: 'Clean blue/white SaaS website flows with multiple page states: home, login, blog, and dashboard screens.',
      imageSrc: 'project 4.png',
      caseStudyUrl: 'https://www.figma.com/design/Ug2t37NzUzWFXBD2HDKtDK/LMS-System?node-id=0-1&t=sfPgMjB0GpErdRGP-1',
      tags: ['Website', 'Content', 'Layout'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-32 relative">
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
              Featured Projects
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
            My <span className="text-warm-orange neon-glow">Projects</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my design journey and process
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative glass-card rounded-2xl overflow-hidden border border-warm-orange/20 hover:border-warm-orange/40 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >

              {/* Image Preview */}
              <motion.div
                className="relative h-64 bg-black flex items-center justify-center border-b border-warm-orange/20 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-4 border-2 border-warm-orange/30 rounded-lg"></div>
              </motion.div>

              {/* Content */}
              <div className="p-8 space-y-4 relative z-10">
                <span className="text-warm-orange text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-warm-orange/10 border border-warm-orange/30
                                 rounded-full text-xs text-warm-orange font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* 🔗 View Case Study Button */}
                <motion.a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-orange font-semibold text-sm hover:text-neon-orange transition-colors duration-300 flex items-center gap-2 mt-4"
                  whileHover={{ x: 5 }}
                >
                  View Case Study
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

