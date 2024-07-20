/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'breathing': 'breathing 3s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.75' },
        },
      },
      colors: {
        customColor: {
          'dark-magenta': '#440C3B',
          'dark-blue': '#080A1D',
          'brand-magenta': '#EF30D2',
          'brand-blue':'#2633CC',
          'shop-blue': '#0a003b'
        },
      },
    },
  },
  plugins: [],
}
