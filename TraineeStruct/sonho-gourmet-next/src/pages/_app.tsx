import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()
  console.log(pathname)
  return (
  <>
    {pathname==='/Login' ? (
      <Component {...pageProps} />
    ):(
      <>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </>
    )}
    
  </>
  )
  
}