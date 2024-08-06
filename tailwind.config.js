/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        andalus: ['Andalus', 'serif'],
      },
      fontSize: {
        '40px': '40px',
      },
      lineHeight: {
        '61': '61.05px',
      },
      colors: {
        'custom-text': 'rgba(223, 175, 9, 1)',
      },
     
      
    },
  },
  plugins: [],
};
