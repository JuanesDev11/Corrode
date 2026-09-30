/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        corrode: {
          950: '#001527',
          900: '#00315c',
          800: '#0d4a8a',
          700: '#0b3a6e',
          200: '#cfd8e3',
        },
      },
    },
  },
  plugins: [],
};
