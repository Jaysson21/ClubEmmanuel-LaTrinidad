
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        club: {
          blue: '#1E3A8A', // Deep blue
          gold: '#F5B70A', // Gold/Yellow
          green: '#16A34A', // Nature green
          light: '#F8FAFC', // Off-white background
          dark: '#0F172A', // Dark text
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
