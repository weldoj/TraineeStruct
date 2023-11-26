import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
  
}