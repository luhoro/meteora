/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html, js}"
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
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'banner-sm': "url('src/images/banner/banner1sm.svg')",
        'banner-md': "url('src/images/banner/banner1md.svg')",
        'banner-lg': "url('src/images/banner/banner1lg.svg')",
      },
    },
  },
  plugins: [
    {
    tailwindcss: {},
    autoprefixer: {},
    },
  ]
}

