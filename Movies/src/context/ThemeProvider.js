import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#032541',
  dark: '#000',
});

export const textColor = theme('mode', {
  light: 'red',
  dark: 'blue',
});
