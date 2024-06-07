const { nextui } = require('@nextui-org/theme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    '// Or if using src directory:\n    ./src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js'
  ],
  theme: {
    extend: {}
  },
  plugins: [nextui()]
}
