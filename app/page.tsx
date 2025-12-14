import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Stats />
      <CTA />
      
      {/* Footer */}
      <footer className="py-12 border-t border-warm-orange/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Prarthana. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-warm-orange transition-colors duration-300 text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-warm-orange transition-colors duration-300 text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

