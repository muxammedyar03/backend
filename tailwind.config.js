/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bColor: '#172a48',
        tColor: 'var(--text-color)'
      }
    },
  },
  plugins: [],
}