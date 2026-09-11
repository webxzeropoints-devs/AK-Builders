/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#171716',
        'deep-black': '#0F0F0E',
        cream: '#F5F0E6',
        'off-white': '#FAF7F0',
        beige: '#DED4C1',
        gold: '#C7A96B',
        'dark-text': '#252321',
        'muted-text': '#77736C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
