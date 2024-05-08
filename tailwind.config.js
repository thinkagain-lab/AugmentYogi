/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          'dark-magenta': '#440C3B',
          'dark-blue': '#080A1D',
          'brand-magenta': '#EF30D2',
          'brand-blue':'#2633CC',
        },
      },
    },
  },
  plugins: [],
}
