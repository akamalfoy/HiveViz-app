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
        cream: { DEFAULT: '#DDD7C8', light: '#EBE5D8', surface: '#F2ECE0' },
        dark: { DEFAULT: '#21241E', card: '#2A2E26', deep: '#181B15' },
        gold: { DEFAULT: '#7A8165', light: '#9BA384', bronze: '#8F9776' },
        olive: { DEFAULT: '#3F4934', dark: '#2E3526', light: '#535E46' },
        'border-cream': '#C9C3B4',
        'border-dark': '#383D32',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
