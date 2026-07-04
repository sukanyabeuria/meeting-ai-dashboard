/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0b0710',
          panel: '#151019',
          card: '#1a1420',
        },
        pink: {
          accent: '#ff2ea6',
          soft: '#ff5cc0',
        },
        border: {
          soft: 'rgba(255,255,255,0.06)',
        },
      },
      borderRadius: {
        xl2: '20px',
      },
      boxShadow: {
        glow: '0 0 60px rgba(255, 46, 166, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}