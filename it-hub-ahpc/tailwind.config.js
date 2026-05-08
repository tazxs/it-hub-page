/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#0057FF',
        'primary-dark': '#0B0F19',
        'secondary-dark': '#161B26',
        'surface': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        headings: ['Space Grotesk', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
      },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}