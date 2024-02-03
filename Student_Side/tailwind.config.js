/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1440px',    // Custom breakpoint for 1440px
        'lg': '1024px',    
        'md': '768px',     
      },
    },
  },
  plugins: [],
}

