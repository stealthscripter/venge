/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      pally: ['Pally'],
      Pilcrow: ['Pilcrow Rounded'],
      Gluten: ['Gluten']
    },
    extend: {
      animation: {
        colorChange: 'colorChange 12s ease-in-out infinite',
      },
      keyframes: {
        colorChange: {
            '0%': {
                backgroundPosition: '0 50%'
            },
            '50%': {
                backgroundPosition: '100% 50%'
            },
            '100%': {
                backgroundPosition: '0 50%'
            },
            
        }
      }
    },
  },
  plugins: [],
}

