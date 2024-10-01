import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        557: '55rem'
      },
      backgroundImage: {
        'nefit-logo': "url('/src/Assets/Images/nefit-logo.png')",
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
export default config
