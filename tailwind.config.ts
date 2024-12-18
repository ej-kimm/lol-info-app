import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#dfff39',
        bgLight: '#f9f9f9',
        textDark: '#22243b',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}
export default config
