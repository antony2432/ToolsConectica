/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundCs': '#004643',
        'backgroundWithCard': '#abd1c6',
        'buttonBg': '#f9bc60',
        'buttonText': '#001e1d',
        'paragraph': '#abd1c6',
        'subHeadLine': '#0f3433',
        'headline': '#fffffe',
        'cardHeadline': '#fffffe',
        'cardBackground': '#004643',
        'cardParagraph': '#abd1c6',
      }
    },
  },
  plugins: [],
}
