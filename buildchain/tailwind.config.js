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
      'xs': ['.75rem', {
        lineHeight: '1',

        fontWeight: '300',
      }],
      'sm': ['.875rem', {
        lineHeight: '1,25',

        fontWeight: '300',
      }],
      'base': ['1rem', {
        lineHeight: '1.5',

        fontWeight: '300',
      }],
      'lg': ['1.125rem', {
        lineHeight: '1.75',

        fontWeight: '300',
      }],
      'xl': ['1.25rem', {
        lineHeight: '1.75',
        letterSpacing: '0.06em',
        fontWeight: '300',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '1.75',
        letterSpacing: '0.06em',
        fontWeight: '300',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '1.75',
        letterSpacing: '0.06em',
        fontWeight: '300',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '1.75',
        letterSpacing: '0.06em',
        fontWeight: '300',
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