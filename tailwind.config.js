/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: {
          DEFAULT: '#8b5cf6', // Violet 500
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#ec4899', // Pink 500
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#f59e0b', // Amber 500
          foreground: '#000000',
        },
        muted: {
          DEFAULT: '#1f2937', // Gray 800
          foreground: '#9ca3af', // Gray 400
        },
        card: {
          DEFAULT: '#111827', // Gray 900
          foreground: '#f3f4f6', // Gray 100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'], // You might need to import this font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, #000000, #1a1a2e, #16213e)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
