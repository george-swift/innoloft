import mixins from './mixins';

const theme = {
  colors: {
    white: '#fff',
    blue: '#272e71',
    gray: '#dddddd',
    mediumGray: '#888888',
    yellow: '#e4b302',
    red: '#dc3545',
    green: '#008000',
    smoke: '#f8f9fa',
    heading: '#445063',
    bodyText: '#323b49',
    tags: '#828a97',
  },

  fonts: 'Open Sans, system, -apple-system, BlinkMacSystemFont, sans-serif',

  fontSizes: {
    base: `16px`,
    xs: `12px`,
    sm: `14px`,
    lg: `18px`,
    xl: `28px`,
  },

  mixins,
};

export default theme;
