module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "praebrg": ['Praebrg', 'sans-serif'],
        "scouser-ste": ['Scouser_Ste', 'sans-serif']
      },
      colors: {
        golden: "#c39e53",
        "dark-blue": "#143a5f"
      }
    },
  },
  plugins: [],
}