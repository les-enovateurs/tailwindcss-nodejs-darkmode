module.exports = {
  purge: {
    enabled: false,
    content: [
      '*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
