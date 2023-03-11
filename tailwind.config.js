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
        sourceCodePro: ['Source Code Pro', 'monospace'],
        mono: ['Syne Mono', 'monospace']
      },
      colors:{
        folderYellow: "#FDB900",
        accent: "#013006",
        "not-black": "#212121",
        "not-white": "#f8f8f8",
        "card-paper": "#FFF3E1",
        background: "#FFFCF4"
      },
      boxShadow:{
        hardShadowLeft: "-3px 3px rgb(0,0,0)",
        hardShadowRight: "3px 3px rgb(0,0,0)"
      }
    },
  },
  plugins: [],
}
