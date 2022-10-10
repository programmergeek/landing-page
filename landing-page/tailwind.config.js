/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        sourceCodePro: ['Source Code Pro', 'monospace']
      },
      colors:{
        folderYellow: "#FDB900",
        accent: "#592905",
        "card-paper": "#FFF3E1",
        background: "#FFFCF4"
      }
    },
  },
  plugins: [],
}
