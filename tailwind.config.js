module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "oswald": ['"Oswald"'],
      "quattro": ['"Quattrocento"']
    },
    extend: {
      colors: {
        "theme-green": "#2EE38D",
        "theme-pink": "#E84191",
        "theme-orange": "#E2AA3C",
        "theme-white": "#EDEDED",
        "theme-black": "#262626",
        "theme-gray": "#7A7A7A"
      },
      zIndex: {
        "under": -1,
        "under-10": -10
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
