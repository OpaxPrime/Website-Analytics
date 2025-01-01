/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          900: '#1E3A8A',
        },
        'gray': {
          300: '#D1D5DB',
          400: '#9CA3AF',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};