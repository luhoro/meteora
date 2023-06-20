/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'gray-prim': '#CCCCCC',
        'green-prim': '#C7E574',
        'purple-prim': '#9353FF',
        'red-sec': '#EE6471',
        'orange-sec': '#F87F46',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [
    {
    tailwindcss: {},
    autoprefixer: {},
    },
  ]
}

