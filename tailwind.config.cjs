module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'gold-1': '#b8860b',
        'gold-2': '#ffd166',
        'black-850': '#050505',
        'glass': 'rgba(255,255,255,0.03)'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg,#b8860b 0%,#ffd166 100%)',
        'gold-dark-grad': 'linear-gradient(180deg, rgba(184,134,11,0.22), rgba(255,209,102,0.04))'
      }
    }
  },
  plugins: []
}