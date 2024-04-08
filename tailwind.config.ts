import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkgreen: {
          '100': '#1A3B25',
          '200': '#1A4D2C',
          '600': '#63FF98',
        },
        deepblue: {
          '100': '#161D2D',
          '200': '#2E364D',
        },
        cerulean: {
          '100': '#0F3D5E',
          '600': '#98E6FF',
        },
        light: {
          '100': '#D6DBDC',
        },
      },
    },
  },
  plugins: [],
};
export default config;
