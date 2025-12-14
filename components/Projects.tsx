'use client'

import { motion, Variants } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Restaurant & Admin Suite',
      category: 'Student Project',
      description:
        'A full restaurant web + admin dashboard exploration: dark UI, booking flows, and management screens.',
      imageSrc: '/project 1.png',
      caseStudyUrl:
        'https://www.figma.com/design/8FZjQfSXujEgrRkDXzYMCE/-st-yr-project',
      tags: ['Brand', 'Dashboard', 'Figma'],
    },
    {
      title: 'Auction Platform UI',
      category: 'Client Project',
      description:
        'Auction marketplace layouts featuring seller tools, bidder dashboards, and listing flows.',
      imageSrc: '/project 2.png',
      caseStudyUrl:
        'https://www.figma.com/design/6CRpyAVZZuHRAcQIfYVvYq/2nd-yr-project',
      tags: ['Marketplace', 'UX', 'Prototyping'],
    },
    {
      title: 'Marketing Collateral & Ads',
      category: 'Client Project',
      description:
        'Promotional ads and marketing visuals designed with luxury gold palettes and hospitality themes.',
      imageSrc: '/project 3.png',
      caseStudyUrl:
        'https://www.figma.com/design/2BGmjXS0WHgeKzNt6PDVaG/Hotel-marketing-post',
      tags: ['Marketing', 'Visual Design', 'Ads'],
    },
    {
      title: 'Blue SaaS Website Flow',
      category: 'Client Project',
      description:
        'Clean blue/white SaaS website flows with multiple page states: home, login, blog, and dashboard screens.',
      imageSrc: '/project 4.png',
      caseStudyUrl:
        'https://www.figma.com/design/Ug2t37NzUzWFXBD2HDKtDK/LMS-System',
      tags: ['Website', 'Content', 'Layout'],
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
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
          <span className="text-warm-orange text-sm font-semibold uppercase tracking-wider">
            Featured Projects
          </span>

          <motion.div
            className="h-0.5 bg-gradient-to-r from-warm-orange to-neon-orange mt-2 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            My <span className="text-warm-orange neon-glow">Projects</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            A collection of projects showcasing my design journey and process
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden border border-warm-orange/20 hover:border-warm-orange/40"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <span className="text-warm-orange text-xs font-semibold uppercase">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-warm-orange/10 border border-warm-orange/30 rounded-full text-xs text-warm-orange"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-warm-orange font-semibold text-sm mt-4"
                  whileHover={{ x: 5 }}
                >
                  View Case Study →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
