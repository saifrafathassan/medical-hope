/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'main': '#0891b2',
        'primary': '#0e7490', // replace with your main color
        // 'secondary': '#b44949', // replace with your main color
      },
    },
  },
  plugins: [],
}

