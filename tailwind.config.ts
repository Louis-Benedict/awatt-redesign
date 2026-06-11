import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary — forest green
        brand: {
          50:  '#EDF9F3',
          100: '#D2F0E2',
          200: '#A6E3C6',
          300: '#6DCFA2',
          400: '#35B475',
          500: '#1B8C4D',
          600: '#1B6B38',
          700: '#155530',
          800: '#104026',
          900: '#0C2E1C',
          950: '#071A10',
        },
        // Secondary — sage green for eco accents
        sage: {
          50:  '#F0F7F4',
          100: '#DAEEE5',
          200: '#B5DCCB',
          300: '#85C3A9',
          400: '#52A484',
          500: '#3A8A6A',
          600: '#2D7055',
          700: '#255A44',
          800: '#1E4736',
          900: '#153025',
        },
        // Cool neutrals — pairs with the blue brand
        warm: {
          50:  '#F5F8FC',
          100: '#EEF3FA',
          200: '#DCE7F5',
          300: '#BDD0EA',
          400: '#97B4D8',
          500: '#6E93BF',
          600: '#4E73A0',
          700: '#3A5880',
          800: '#283D5C',
          900: '#1A283D',
          950: '#0E1724',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'radial-warm': 'radial-gradient(ellipse at center, var(--tw-gradient-from), var(--tw-gradient-to))',
      },
    },
  },
  plugins: [],
};

export default config;
