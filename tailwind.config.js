/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFD1DC',
          purple: '#E6E6FA',
          blue: '#AEC6CF',
          yellow: '#FDFD96',
          green: '#77DD77',
        },
        cream: '#FFFDD0',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        display: ['Baloo 2', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .7 },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
