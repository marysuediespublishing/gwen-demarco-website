/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Urban Fantasy Colors (D002)
        'shadow-black': '#0a0a0f',
        'midnight-purple': '#2d1b4e',
        'mystic-violet': '#6b46c1',
        'ember-orange': '#ff6b35',
        'mystic-teal': '#2dd4bf',
        'fog-gray': '#94a3b8',
        'moon-silver': '#e2e8f0',
        'bone-white': '#f8fafc',

        // Dark mode surface colors
        'dark-bg': '#0a0a0f',
        'dark-surface': '#1a1025',
        'dark-border': '#3d2a5a',
        'dark-text': '#f8fafc',
        'dark-text-muted': '#94a3b8',

        // Semantic Colors
        text: {
          primary: '#f8fafc',
          secondary: '#e2e8f0',
          muted: '#94a3b8',
          inverse: '#0a0a0f',
        },
        bg: {
          primary: '#0a0a0f',
          secondary: '#1a1025',
          tertiary: '#2d1b4e',
          card: '#150d20',
        },
        border: {
          light: '#3d2a5a',
          medium: '#6b46c1',
          accent: '#ff6b35',
        },

        // Species Colors (D007)
        species: {
          shifter: '#ff6b35',
          ogre: '#2dd4bf',
          vampire: '#dc2626',
          fae: '#a855f7',
          auramancer: '#6b46c1',
          human: '#94a3b8',
        },

        // Heat Level Colors (for romance content ratings)
        heat: {
          mild: '#10b981',
          medium: '#f59e0b',
          spicy: '#ef4444',
        }
      },
      fontFamily: {
        primary: ['Cinzel', 'Georgia', 'serif'],
        secondary: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        accent: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        // Mystical Glow Effects
        'mystic': '0 0 20px rgba(107, 70, 193, 0.3)',
        'ember': '0 0 15px rgba(255, 107, 53, 0.4)',
        'teal': '0 0 25px rgba(45, 212, 191, 0.2)',
        'violet-glow': '0 0 30px rgba(107, 70, 193, 0.5), 0 0 60px rgba(107, 70, 193, 0.2)',
        'ember-glow': '0 0 25px rgba(255, 107, 53, 0.5), 0 0 50px rgba(255, 107, 53, 0.2)',
        'teal-glow': '0 0 30px rgba(45, 212, 191, 0.4), 0 0 60px rgba(45, 212, 191, 0.15)',
      },
      backgroundImage: {
        // Urban Fantasy Gradients
        'gradient-mystic': 'linear-gradient(135deg, #0a0a0f 0%, #2d1b4e 50%, #6b46c1 100%)',
        'gradient-ember': 'linear-gradient(135deg, #2d1b4e 0%, #6b46c1 50%, #ff6b35 100%)',
        'gradient-fog': 'radial-gradient(circle at 50% 50%, rgba(107, 70, 193, 0.1) 0%, transparent 50%)',
        'gradient-night': 'linear-gradient(180deg, #0a0a0f 0%, #2d1b4e 100%)',
        'gradient-card': 'linear-gradient(145deg, #1a1025 0%, #150d20 100%)',
        'radial-glow': 'radial-gradient(ellipse at 50% 40%, rgba(107, 70, 193, 0.15) 0%, rgba(255, 107, 53, 0.05) 30%, transparent 70%)',
      },
      animation: {
        // Mystical Animations
        'mystic-glow': 'mystic-glow 2s ease-in-out infinite',
        'ember-pulse': 'ember-pulse 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fog-drift': 'fog-drift 20s linear infinite',
        'fog-drift-slow': 'fog-drift 35s linear infinite',
        'flicker': 'flicker 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.2s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
      keyframes: {
        'mystic-glow': {
          '0%': { boxShadow: '0 0 5px rgba(107, 70, 193, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(107, 70, 193, 0.6)' },
          '100%': { boxShadow: '0 0 5px rgba(107, 70, 193, 0.3)' },
        },
        'ember-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fog-drift': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
          '75%': { opacity: '0.95' },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(107, 70, 193, 0.3), 0 0 30px rgba(107, 70, 193, 0.1)',
            borderColor: 'rgba(107, 70, 193, 0.5)'
          },
          '50%': {
            boxShadow: '0 0 25px rgba(107, 70, 193, 0.5), 0 0 50px rgba(107, 70, 193, 0.2)',
            borderColor: 'rgba(107, 70, 193, 0.7)'
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      aspectRatio: {
        'book': '2/3',
      },
    },
  },
  plugins: [
    // Custom component classes
    function({ addComponents, theme }) {
      addComponents({
        // Button Components
        '.btn': {
          '@apply inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-shadow-black': {},
        },
        '.btn-primary': {
          '@apply bg-ember-orange text-bone-white border-2 border-ember-orange hover:bg-[#e55a2a] hover:shadow-ember-glow hover:-translate-y-0.5 focus:ring-ember-orange': {},
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.btn-secondary': {
          '@apply bg-mystic-violet text-bone-white border-2 border-mystic-violet hover:bg-[#5a3aa8] hover:shadow-violet-glow hover:-translate-y-0.5 focus:ring-mystic-violet': {},
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.btn-outline': {
          '@apply bg-transparent text-ember-orange border-2 border-ember-orange hover:bg-ember-orange hover:text-bone-white hover:shadow-ember-glow hover:-translate-y-0.5 focus:ring-ember-orange': {},
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.btn-ghost': {
          '@apply bg-transparent text-moon-silver border-2 border-moon-silver/30 hover:border-mystic-violet hover:text-mystic-violet focus:ring-mystic-violet': {},
        },

        // Card Components
        '.card': {
          '@apply bg-gradient-card rounded-xl overflow-hidden transition-all duration-300 border border-dark-border': {},
        },
        '.card-mystic': {
          '@apply bg-gradient-fog border border-mystic-violet/20 hover:shadow-mystic': {},
        },
        '.card-hover': {
          '@apply hover:border-mystic-violet/60 hover:shadow-violet-glow hover:-translate-y-1 hover:scale-[1.02]': {},
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },

        // Input Components
        '.input-mystic': {
          '@apply w-full px-3 py-2 border-2 border-dark-border rounded-lg text-base bg-dark-surface text-moon-silver transition-all duration-200 focus:outline-none focus:border-mystic-violet focus:shadow-mystic placeholder:text-fog-gray': {},
        },

        // Badge Components
        '.badge': {
          '@apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium': {},
        },
        '.badge-shifter': {
          '@apply bg-ember-orange/10 text-ember-orange border border-ember-orange/30': {},
        },
        '.badge-vampire': {
          '@apply bg-red-600/10 text-red-500 border border-red-600/30': {},
        },
        '.badge-fae': {
          '@apply bg-purple-500/10 text-purple-400 border border-purple-500/30': {},
        },
        '.badge-ogre': {
          '@apply bg-mystic-teal/10 text-mystic-teal border border-mystic-teal/30': {},
        },
        '.badge-primary': {
          '@apply bg-ember-orange/15 text-ember-orange border border-ember-orange/40': {},
        },
        '.badge-secondary': {
          '@apply bg-mystic-violet/15 text-mystic-violet border border-mystic-violet/40': {},
        },
        '.badge-outline': {
          '@apply bg-transparent text-moon-silver border border-moon-silver/40': {},
        },

        // Series Badge
        '.badge-series': {
          '@apply bg-midnight-purple/50 text-mystic-teal border border-mystic-teal/30': {},
        },
      })
    }
  ],
};
