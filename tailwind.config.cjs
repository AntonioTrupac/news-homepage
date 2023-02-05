/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': 'hsl(35, 77%, 62%)',
        'primary-red': 'hsl(5, 85%, 63%)',
        'grayish': 'hsl(233, 8%, 79%)',
        'dark-gray': 'hsl(236, 13%, 42%)',
        'dark-blue' : 'hsl(240, 100%, 5%)',
        'off-white': 'hsl(36,100%,99%)',
        'line': '#5E607A',
      },
    }
  },
  plugins: [],
}
