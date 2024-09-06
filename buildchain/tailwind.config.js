// module exports
module.exports = {
  content: [
    '../src/templates/**/*.{twig,html}',
    '../src/vue/**/*.{vue,html}',
    '../src/css/**/*.{css,pcss,scss}',
  ],
  safelist: [],
  theme: {
    fontSize: {
      'h1-sm': ['3.375rem', {
          lineHeight: '1.4',
          letterSpacing: '0.06em',
          fontWeight: '700',
      }],
      'h1-md': ['4.5rem', {
          lineHeight: '1.4',
          letterSpacing: '0.06em',
          fontWeight: '700',
      }],
      'h1-lg': ['6rem', {
          lineHeight: '1.4',
          letterSpacing: '0.06em',
          fontWeight: '700',
      }],
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  extend: {
  },
  plugins: [],
};