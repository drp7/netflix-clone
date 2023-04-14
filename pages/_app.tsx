import Title from '../components/Title'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <> <Title /><Component {...pageProps} /></>
}

export default MyApp
