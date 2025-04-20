/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary blue shades (darker, more saturated)
        primary: {
          100: '#E6F8FF',
          200: '#B3ECFF',
          300: '#80DFFF',
          400: '#4DD2FF',
          500: '#00A3FF', // Main primary color (more saturated)
          600: '#0082CC',
          700: '#006299',
          800: '#004166',
          900: '#002033',
        },
        // Secondary color shades (cyan with teal undertones)
        secondary: {
          100: '#E6FFFD',
          200: '#B3FFF8',
          300: '#80FFF3',
          400: '#4DFFEE',
          500: '#00E6FF', // Main secondary color (brighter cyan)
          600: '#00B8CC',
          700: '#008A99',
          800: '#005C66',
          900: '#002E33',
        },
        // Accent color shades (electric blue)
        accent: {
          100: '#E6F0FF',
          200: '#B3D1FF',
          300: '#80B2FF',
          400: '#4D93FF',
          500: '#0055FF', // Main accent color
          600: '#0044CC',
          700: '#003399',
          800: '#002266',
          900: '#001133',
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 163, 255, 0.5)',
        'glow-cyan': '0 0 20px rgba(0, 230, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};