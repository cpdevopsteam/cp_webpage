/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        'dark-bg': 'var(--dark-bg)',
        'card-bg': 'var(--card-bg)',
      },
      fontFamily: {
        'audiowide': ['Audiowide', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};