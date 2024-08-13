/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    fontFamily: {
      'display': 'Kanit',
      'body': 'Poppins',
    },
    extend: {
      animation: {
        "loop-scroll-left": "loop-scroll 50s linear infinite",
        "loop-scroll-right": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll-left": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-100%"},
        },
        "loop-scroll-right": {
          from: { transform: "translateX(-100%)"},
          to: { transform: "translateX(0)"},
        },
      },
      colors: {
        'primary': '#640EF1',
        'secondary-dark': '#130031',
        'secondary-normal': '#646986',
        'secondary-light': '#8D90A8',
        'neutral-white': '#FFFFFF',
        'neutral-gray': '#F1F4F5',
        'accent-dark': '#395C00',
        'accent-light': '#8CE100',
      },
    },
  },
  plugins: [],
};

