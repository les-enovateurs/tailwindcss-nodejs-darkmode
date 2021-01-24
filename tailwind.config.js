module.exports = {
  purge: {
    enabled: true,
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
