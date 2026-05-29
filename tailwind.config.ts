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
        // Primary — warm medium blue
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B7DD8',
          600: '#2D68C4',
          700: '#2054A0',
          800: '#1A4280',
          900: '#153364',
          950: '#0D1F3C',
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
