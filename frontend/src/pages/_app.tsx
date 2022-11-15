import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../chakra/theme';

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
