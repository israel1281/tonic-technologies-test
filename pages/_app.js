import '../styles/globals.css'
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }) {

  
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 })
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
