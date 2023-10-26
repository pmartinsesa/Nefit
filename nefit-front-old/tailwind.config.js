/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        557: '55rem'
      },
      backgroundImage: {
        'nefit-logo': "url('/src/Assets/images/nefit-logo.png')",
      },
      colors: {
        red: {
          primary: "#902019",
          active: "#E01F1F",
          secondary: "#C1473F",
          brown: "#2E1F1F"
        },
        gray: {
          800: "#454442",
          400: "#B5B5B5"
        }
      }
    },
  },
  plugins: [],
}

