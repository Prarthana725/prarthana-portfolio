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

