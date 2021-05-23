import { theme as baseTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import { appColors } from './colors';

export const definitions = {
  ...baseTheme,
  breakpoints: createBreakpoints({
    sm: '22em',
    md: '60em',
    lg: '75em',
    xl: '80em',
  }),
  colors: appColors,
  components: {
    Text: {
      variants: {
        h1: {
          fontSize: '4rem',
          lineHeight: '4.125rem',
          fontWeight: 700,
        },
        h3: {
          fontSize: '2rem',
          lineHeight: '2.125rem',
          fontWeight: 700,
        },
        h5: {
          fontSize: '1.5rem',
          lineHeight: '1.675rem',
          fontWeight: 700,
        },
        h6: {
          fontSize: '1.25rem',
          lineHeight: '1.375rem',
          fontWeight: 700,
        },
        body: {
          fontSize: '1rem',
          lineHeight: '1.125rem',
        },
        bold: {
          fontSize: '1rem',
          lineHeight: '1.125rem',
          fontWeight: 700,
        },
        caption: {
          fontSize: '0.875rem',
          lineHeight: '1rem',
        },
      },
      defaultProps: {
        v: 'body',
        color: 'black',
      },
    },
  },
};
