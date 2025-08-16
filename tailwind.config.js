/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42175B',
        secondary: '#8C31C1',
        accent: '#FFC107',
        gradient: {
          start: '#42175B',
          end: '#8C31C1',
        },
        rankGradient: {
          start: '#42175B',
          end: '#FBBB18',
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        serif: ['Source Serif Pro', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'semi-bold': '700',
      },
      width: {
        '27': '6.67rem', // 106.67px for brand logo containers
        '89': '22.25rem', // 356px for service cards
        '18': '4.5rem', // 72px for small elements
      },
      gap: {
        '15': '3.75rem', // 60px for component spacing
        '25': '6.25rem', // 100px for logo spacing
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(139deg, #42175B 6%, #8C31C1 100%)',
        'gradient-rank': 'linear-gradient(90deg, #42175B 0%, #811861 18%, #BB2A5D 36%, #E44E49 55%, #FA8333 75%, #FBBB18 100%)',
      },
      boxShadow: {
        'custom': '2px 4px 6px 0px rgba(0, 0, 0, 0.16)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
