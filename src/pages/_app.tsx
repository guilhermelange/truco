import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { theme } from '../styles/theme';
import { GameProvider } from '../context/GameContext';
import SEO from '../components/app/SEO';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GameProvider>
        <SEO title='Online'></SEO>
        <Component {...pageProps} />
      </GameProvider>
    </ChakraProvider>)
}

export default MyApp
