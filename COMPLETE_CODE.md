# Prarthana Portfolio - Complete Code Reference

## 📁 Project Structure

```
prarthana-portfolio/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Navigation.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Services.tsx
    ├── Projects.tsx
    ├── Stats.tsx
    └── CTA.tsx
```

---

## 📄 Configuration Files

### package.json
```json
{
  "name": "prarthana-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "typescript": "^5.2.2"
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#ff4d00',
        'neon-red': '#ff1744',
        'deep-black': '#000000',
        'warm-orange': '#ff6b35',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-orange': '0 0 20px rgba(255, 77, 0, 0.5), 0 0 40px rgba(255, 77, 0, 0.3)',
        'neon-orange-lg': '0 0 30px rgba(255, 77, 0, 0.6), 0 0 60px rgba(255, 77, 0, 0.4)',
        'glow': '0 0 15px rgba(255, 107, 53, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cinematic': 'linear-gradient(135deg, rgba(255, 77, 0, 0.1) 0%, rgba(255, 23, 68, 0.05) 100%)',
      },
    },
  },
  plugins: [],
}
```

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

### postcss.config.js
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 🎨 Styles

### app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --neon-orange: #ff4d00;
  --neon-red: #ff1744;
  --warm-orange: #ff6b35;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: #000000;
  color: #ffffff;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 77, 0, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 77, 0, 0.5);
}

/* Neon glow effects */
.neon-glow {
  text-shadow: 0 0 10px rgba(255, 77, 0, 0.5),
               0 0 20px rgba(255, 77, 0, 0.3),
               0 0 30px rgba(255, 77, 0, 0.2);
}

.glow-border {
  box-shadow: 0 0 20px rgba(255, 77, 0, 0.3),
              inset 0 0 20px rgba(255, 77, 0, 0.1);
}

/* Glass morphism */
.glass-card {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 77, 0, 0.2);
}

/* Smooth animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes glow-pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(255, 77, 0, 0.5);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 40px rgba(255, 77, 0, 0.8);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-glow-pulse {
  animation: glow-pulse 3s ease-in-out infinite;
}

/* Gradient backgrounds */
.cinematic-gradient {
  background: radial-gradient(ellipse at top, rgba(255, 77, 0, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(255, 23, 68, 0.1) 0%, transparent 50%);
}

/* Hero heading animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUpDelay {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes neonPulse {
  0%, 100% {
    text-shadow: 0 0 10px rgba(255, 77, 0, 0.5),
                 0 0 20px rgba(255, 77, 0, 0.3),
                 0 0 30px rgba(255, 77, 0, 0.2);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 77, 0, 0.8),
                 0 0 40px rgba(255, 77, 0, 0.6),
                 0 0 60px rgba(255, 77, 0, 0.4);
  }
}

.hero-heading {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.hero-line-1 {
  animation: fadeInUpDelay 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.hero-line-2 {
  animation: fadeInUpDelay 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.hero-line-3 {
  animation: fadeInUpDelay 0.8s ease-out 0.6s forwards;
  opacity: 0;
}

.hero-line-2 .neon-glow {
  animation: neonPulse 3s ease-in-out infinite;
  animation-delay: 1s;
}
```

---

## 📱 App Files

### app/layout.tsx
```typescript
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prarthana - UI/UX Designer Portfolio',
  description: 'Creative portfolio of Prarthana, a UI/UX Designer specializing in modern, futuristic design solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### app/page.tsx
```typescript
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
```

---

## 🧩 Components

### components/Navigation.tsx
```typescript
'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-orange-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold">
            <span className="text-white">Prarthana</span>
            <span className="text-warm-orange neon-glow">.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-warm-orange transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button className="px-6 py-2.5 bg-gradient-to-r from-warm-orange to-neon-orange text-white font-semibold rounded-lg hover:shadow-neon-orange transition-all duration-300 hover:scale-105">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  )
}
```

### components/Hero.tsx
```typescript
'use client'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cinematic-gradient">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Headline */}
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            <h1 className="hero-heading text-5xl md:text-7xl font-black leading-tight">
              <span className="hero-line-1 text-white block">Crafting Digital</span>
              <span className="hero-line-2 text-warm-orange neon-glow block">Experiences</span>
              <span className="hero-line-3 text-white block">That Inspire</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
              UI/UX Designer passionate about creating intuitive, beautiful, and impactful digital solutions that bridge the gap between users and technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-warm-orange to-neon-orange text-white font-semibold rounded-lg shadow-neon-orange hover:shadow-neon-orange-lg transition-all duration-300 hover:scale-105 text-lg">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-warm-orange/50 text-warm-orange font-semibold rounded-lg hover:bg-warm-orange/10 hover:border-warm-orange transition-all duration-300 text-lg">
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Side - Silhouette Portrait */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md h-[600px]">
            {/* Glowing background circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/20 via-neon-orange/10 to-transparent rounded-full blur-3xl animate-glow-pulse"></div>
            
            {/* Silhouette placeholder - replace with actual image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-80 h-96 bg-gradient-to-b from-warm-orange/30 to-neon-orange/20 rounded-2xl shadow-neon-orange-lg flex items-center justify-center border border-warm-orange/30">
                <div className="text-center space-y-4">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-warm-orange/40 to-neon-orange/30 rounded-full shadow-neon-orange flex items-center justify-center">
                    <svg className="w-32 h-32 text-warm-orange/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-warm-orange/60 text-sm font-medium">Portrait Image</p>
                </div>
              </div>
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-warm-orange rounded-full shadow-glow animate-float"></div>
            <div className="absolute bottom-20 right-20 w-3 h-3 bg-neon-orange rounded-full shadow-glow animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-warm-orange rounded-full shadow-glow animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-orange/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-red/10 rounded-full blur-3xl -z-0"></div>
    </section>
  )
}
```

### components/About.tsx
```typescript
export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-warm-orange text-sm font-semibold tracking-wider uppercase">About Me</span>
              <div className="h-0.5 w-16 bg-gradient-to-r from-warm-orange to-neon-orange mt-2"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Designing with <span className="text-warm-orange neon-glow">Purpose</span> and <span className="text-warm-orange neon-glow">Passion</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                I'm Prarthana, a UI/UX Designer dedicated to creating digital experiences that are not just visually stunning, but also intuitive and user-centered. With a keen eye for detail and a passion for innovation, I transform complex ideas into elegant, accessible designs.
              </p>
              <p>
                My approach combines deep user research, creative problem-solving, and cutting-edge design trends to deliver solutions that resonate with users and drive business success. I believe great design is invisible—it guides users effortlessly through their journey.
              </p>
              <p>
                When I'm not designing, I'm exploring the latest design tools, studying user behavior patterns, and constantly pushing the boundaries of what's possible in digital design.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl p-8 space-y-6 border-l-4 border-warm-orange">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Design Philosophy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every pixel matters. Every interaction counts. I design with empathy, ensuring that every user feels understood and empowered.
                </p>
              </div>
              
              <div className="pt-6 border-t border-warm-orange/20">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-warm-orange">5+</div>
                    <div className="text-gray-400 text-sm mt-1">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-warm-orange">50+</div>
                    <div className="text-gray-400 text-sm mt-1">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### components/Skills.tsx
```typescript
export default function Skills() {
  const skills = [
    { name: 'UI Design', icon: '🎨', level: 95 },
    { name: 'UX Research', icon: '🔍', level: 90 },
    { name: 'Prototyping', icon: '⚡', level: 92 },
    { name: 'Figma', icon: '💎', level: 95 },
    { name: 'User Testing', icon: '🧪', level: 88 },
    { name: 'Design Systems', icon: '📐', level: 90 },
    { name: 'Wireframing', icon: '📝', level: 93 },
    { name: 'Interaction Design', icon: '✨', level: 91 },
  ]

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-warm-orange text-sm font-semibold tracking-wider uppercase">Skills & Expertise</span>
            <div className="h-0.5 w-16 bg-gradient-to-r from-warm-orange to-neon-orange mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I <span className="text-warm-orange neon-glow">Excel</span> At
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of design skills and technologies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative glass-card rounded-xl p-6 border border-warm-orange/20 hover:border-warm-orange/50 transition-all duration-300 hover:shadow-glow cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/0 to-neon-orange/0 rounded-xl group-hover:from-warm-orange/10 group-hover:to-neon-orange/5 transition-all duration-300"></div>
              
              <div className="relative z-10 text-center space-y-4">
                <div className="text-4xl mb-2">{skill.icon}</div>
                <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
                
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-warm-orange to-neon-orange rounded-full transition-all duration-1000 ease-out shadow-glow"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <div className="text-warm-orange text-xs font-medium">{skill.level}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### components/Services.tsx
```typescript
export default function Services() {
  const services = [
    {
      title: 'UI Design',
      description: 'Creating visually stunning and intuitive user interfaces that captivate and engage users while maintaining functionality and accessibility.',
      icon: '🎨',
    },
    {
      title: 'UX Research',
      description: 'Deep-dive user research and analysis to understand user needs, behaviors, and pain points, informing data-driven design decisions.',
      icon: '🔬',
    },
    {
      title: 'Prototyping',
      description: 'Building interactive prototypes that bring designs to life, allowing for early testing and validation before development.',
      icon: '⚡',
    },
    {
      title: 'Design Systems',
      description: 'Developing comprehensive design systems that ensure consistency, scalability, and maintainability across products and platforms.',
      icon: '📐',
    },
    {
      title: 'User Testing',
      description: 'Conducting usability testing sessions to gather feedback and iterate on designs, ensuring optimal user experience.',
      icon: '🧪',
    },
    {
      title: 'Consultation',
      description: 'Providing strategic design consultation to help businesses align their digital products with user needs and business goals.',
      icon: '💡',
    },
  ]

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-warm-orange text-sm font-semibold tracking-wider uppercase">Services</span>
            <div className="h-0.5 w-16 bg-gradient-to-r from-warm-orange to-neon-orange mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I <span className="text-warm-orange neon-glow">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive design services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-xl p-8 border border-warm-orange/20 hover:border-warm-orange/40 transition-all duration-300 hover:shadow-glow relative overflow-hidden"
            >
              {/* Orange edge glow */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-warm-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="space-y-4">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### components/Projects.tsx
```typescript
export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      category: 'UI/UX Design',
      description: 'Complete redesign of a modern e-commerce platform focusing on user experience and conversion optimization.',
      image: '🛍️',
      tags: ['Figma', 'Prototyping', 'User Research'],
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Design',
      description: 'Intuitive mobile banking application with seamless user flows and modern, secure interface design.',
      image: '📱',
      tags: ['UI Design', 'UX Research', 'Testing'],
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Design',
      description: 'Comprehensive dashboard design for SaaS platform with data visualization and user analytics.',
      image: '💼',
      tags: ['Design System', 'Prototyping', 'Figma'],
    },
    {
      title: 'Healthcare Portal',
      category: 'UI/UX Design',
      description: 'Patient-centered healthcare portal design prioritizing accessibility and ease of use.',
      image: '🏥',
      tags: ['Accessibility', 'User Testing', 'UI Design'],
    },
  ]

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-warm-orange text-sm font-semibold tracking-wider uppercase">Featured Projects</span>
            <div className="h-0.5 w-16 bg-gradient-to-r from-warm-orange to-neon-orange mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-warm-orange neon-glow">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative design solutions and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative glass-card rounded-2xl overflow-hidden border border-warm-orange/20 hover:border-warm-orange/40 transition-all duration-300 hover:shadow-neon-orange"
            >
              {/* Orange backlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/0 to-neon-orange/0 group-hover:from-warm-orange/10 group-hover:to-neon-orange/5 transition-all duration-300 -z-10"></div>
              
              {/* Mockup placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center border-b border-warm-orange/20">
                <div className="text-8xl opacity-50">{project.image}</div>
                {/* Tech-grade mockup frame */}
                <div className="absolute inset-4 border-2 border-warm-orange/30 rounded-lg"></div>
              </div>
              
              <div className="p-8 space-y-4 relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-warm-orange text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-warm-orange/10 border border-warm-orange/30 rounded-full text-xs text-warm-orange font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-warm-orange font-semibold text-sm hover:text-neon-orange transition-colors duration-300 flex items-center gap-2 mt-4">
                  View Case Study
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### components/Stats.tsx
```typescript
export default function Stats() {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '30+', label: 'Happy Clients', icon: '😊' },
    { number: '5+', label: 'Years Experience', icon: '⭐' },
    { number: '100%', label: 'Client Satisfaction', icon: '💯' },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative glass-card rounded-xl p-6 border border-warm-orange/20 hover:border-warm-orange/50 transition-all duration-300 text-center"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/0 to-neon-orange/0 group-hover:from-warm-orange/10 group-hover:to-neon-orange/5 rounded-xl transition-all duration-300"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-warm-orange neon-glow">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### components/CTA.tsx
```typescript
export default function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Warm orange spotlight background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/20 via-neon-orange/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-warm-orange/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="text-warm-orange text-sm font-semibold tracking-wider uppercase">Let's Work Together</span>
            <div className="h-0.5 w-16 bg-gradient-to-r from-warm-orange to-neon-orange mt-2 mx-auto"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to Create Something
            <br />
            <span className="text-warm-orange neon-glow">Extraordinary?</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let's collaborate to bring your vision to life with innovative design solutions that make a lasting impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-10 py-5 bg-gradient-to-r from-warm-orange to-neon-orange text-white font-bold rounded-lg shadow-neon-orange-lg hover:shadow-neon-orange transition-all duration-300 hover:scale-105 text-lg">
              Start a Project
            </button>
            <button className="px-10 py-5 border-2 border-warm-orange/50 text-warm-orange font-bold rounded-lg hover:bg-warm-orange/10 hover:border-warm-orange transition-all duration-300 text-lg">
              Get in Touch
            </button>
          </div>
          
          <div className="pt-12 flex items-center justify-center gap-8 text-gray-400">
            <a href="mailto:hello@prarthana.design" className="hover:text-warm-orange transition-colors duration-300">
              hello@prarthana.design
            </a>
            <span>•</span>
            <a href="#" className="hover:text-warm-orange transition-colors duration-300">
              LinkedIn
            </a>
            <span>•</span>
            <a href="#" className="hover:text-warm-orange transition-colors duration-300">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## 🎨 Design Features

- ✅ Deep black background (#000000)
- ✅ Rich orange-red neon glow lighting (#ff4d00, #ff6b35)
- ✅ Cinematic gradients and lighting effects
- ✅ Premium modern typography (Inter font)
- ✅ Smooth animations (fade-in, slide-up, glow pulse)
- ✅ Glass morphism effects
- ✅ High-contrast, futuristic aesthetic
- ✅ Fully responsive design
- ✅ Animated hero heading with staggered effects

---

## 📝 Notes

- Replace the portrait placeholder in `components/Hero.tsx` with your actual image
- Update project data in `components/Projects.tsx`
- Modify skills, services, and stats as needed
- Add your contact information and social links in `components/CTA.tsx`

---

**Built with Next.js 14, React 18, TypeScript, and Tailwind CSS**

