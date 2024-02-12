/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FF731D',
        'lightGray': '#F7F5F4',
        'lightGreen': '#82CF9C',
        'muted':'#A19791',
        'border':'#DADADA'
      },
      padding:{
        'base':'1.875rem'
      },
      screens:{
        '1.5xl':'1366px'
      }
    },
  },
  plugins: [],
};
