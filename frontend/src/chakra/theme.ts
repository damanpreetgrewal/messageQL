import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  brand: {
    100: '#3da4f7',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'whiteAlpha.200',
      },
    }),
  },
});
