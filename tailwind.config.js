/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Almost-White": "hsl(0, 0%, 98%)",
        "Medium-Gray": "hsl(0, 0%, 41%)",
        "Almost-Black": "hsl(0, 0%, 8%)"
      },
      spacing: {
        '7.5': '1.875rem', 
      },
      backgroundImage: theme => ({
        'icon-arrow': "url('/icon-arrow.svg')",
      }),
    },
  },
  plugins: [],
}

