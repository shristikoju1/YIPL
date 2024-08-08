/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/*.css", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        young: ['Young Serif', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'color-rose-dark': 'hsl(332, 51%, 32%)', //hsl(332, 51%, 32%)
        'color-rose-light': 'hsl(330, 100%, 98%)',
        'color-brown': 'hsl(14, 45%, 36%)',
        'color-stone-dark': 'hsl(30, 10%, 34%)',
        'color-stone': 'hsl(30, 10%, 34%)',
      },
      typography: {
        DEFAULT: {
          css: {
            'ul > li::marker': {
              'font-weight': '600',
              'color': '#757575', // Replace with your desired color
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
