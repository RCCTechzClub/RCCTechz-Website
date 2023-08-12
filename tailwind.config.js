module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '576px',
      bp_650: '650px',
      md: '768px',
      lg: '992px',
      bp_1100: '1100px',
      bp_1170: '1170px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        primary: { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }
      }
    },
  },
  plugins: [],
}
