/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#f7fcf5',
          100: '#e5f5e0',
          200: '#c7e9c0',
          300: '#a1d99b',
          400: '#74c476',
          500: '#41ab5d',
          600: '#2f8a49',
          700: '#256f3b',
        },
        charcoal: {
          DEFAULT: '#2b2c28',
          light: '#4a4b45',
          soft: '#6b6c65',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Urbanist', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(65,171,93,0.35)' },
          '100%': { boxShadow: '0 0 0 16px rgba(65,171,93,0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease forwards',
        floatY: 'floatY 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        pulseRing: 'pulseRing 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
}
