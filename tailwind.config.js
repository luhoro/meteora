/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: true,
  content: [
    "./**/*.{html, js}"
  ],
  theme: {
    extend: {
      colors: {
        'gray-prim': '#CCCCCC',
        'green-prim': '#D1F079',
        'purple-prim': '#AF80FF',
        'red-sec': '#FD7D8A',
        'orange-sec': '#FC9B6D',
      },
      fontFamily: {
        'inter': [ 'Inter', 'sans-serif' ]
      },
      boxShadow: {
        "modal": "0px 0px 20px 0px #00000050" 
      }
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    }
  ]
}

