/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {max: '580px'}
    },
    extend: {
      backgroundColor: {
        'color-01': 'rgba(00, 00, 00, 0.7)', 
        'color-02': '#3F3F3F',
        'color-03': '#D9D9D9', 
        'color-04': '#3AB8C7',
        'color-05': 'rgba(0, 0, 0, 0.5)',
      }, 
      animation: {
        'change-background-image': 'change-background-image 15s infinite'
      },
      keyframes: {
        'change-background-image': {
          '0%': {backgroundImage: "url('./src/assets/background-image-1.jpg')" },
          '30%': {backgroundImage: "url('./src/assets/background-image-2.jpg')"},
          '60%': {backgroundImage: "url('./src/assets/background-image-3.jpg')"},
          '100%': {backgroundImage: "url('./src/assets/background-image-4.jpg')"}
        }
      }
    },
  },
  plugins: [],
}