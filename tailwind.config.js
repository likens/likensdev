/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.075em',
      },
      fontSize: {
        xxs: '0.6rem'
      }
    }
  },
  plugins: [],
}

