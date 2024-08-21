/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_researches/*.md',
    './pages/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'research-blue': '#1E40AF',
        'research-gray': '#F3F4F6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}