/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background': '#14213D',
      'dark': '#0C1424',
      'light': '#E5E5E5',
      'highlight': '#FCA311',
    },
    extend: {
      textShadow: {
        DEFAULT: '4px -6px #E5E5E5, -10px 10px #0C1424'
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

