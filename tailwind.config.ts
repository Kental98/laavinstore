import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'glow-cyan': '#00d9ff',
        'glow-magenta': '#ff00ff',
        'dark-bg': '#0a0e27',
        'dark-secondary': '#16213e',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-magenta': '0 0 20px rgba(255, 0, 255, 0.4)',
      },
      animation: {
        'float-in': 'floatIn 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        shimmer: {
          '0%, 100%': { filter: 'saturate(1.1) contrast(1.05)' },
          '50%': { filter: 'saturate(1.2) contrast(1.1)' },
        },
      },
      screens: {
        '3xl': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;