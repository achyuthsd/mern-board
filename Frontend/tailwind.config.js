import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // scan all JSX/TSX files in src
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '639px' }, // custom breakpoint for small screens
        'm-sm': { max: '984px' }, // custom breakpoint for small screens
        'm1-sm': { max: '692px' }, // custom breakpoint for small screens
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", "coffee", "forest", "lemonade"],
  },
}
