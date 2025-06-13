import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        tostada: ['var(--font-tostada)'],
        thunder: ['var(--font-thunder)'],
        thunderFine: ['var(--font-thunder-fine)'],
        rethink: ['var(--font-rethink)', 'sans-serif'],
      },
      colors: {
        background: '#1A1A1A'
      },
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '10rem'
      }
    },
  },
  plugins: [],
}
export default config