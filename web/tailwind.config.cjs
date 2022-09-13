/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.88%, #43E7AD 33.94%, #E1D55D 40.57%)',
        'game-gradient': 'linear-gradient(188deg, rgba(0, 0, 0, 0)  0%, rgba(0, 0, 0, 0.9) 67.88%)',
        galaxy: "url('/Fundo.png')"
      },
    },
  },
  plugins: [],
}