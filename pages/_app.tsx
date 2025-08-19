import type { AppProps } from 'next/app'
import '../src/index.css'
import '../src/main.css'
import '../src/styles/theme.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
