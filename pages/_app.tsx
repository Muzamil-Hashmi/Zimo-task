import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Hero from  '../Component/element/Hero'
import Header from '../Component/layout/Header'
import Footer from '../Component/layout/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from 'react';
import Base from '../Component/layout/Base'
// import "bootstrap/dist/js/bootstrap.min.js"


export default function App({ Component, pageProps }: AppProps) {

  return<>
  
  <Base>
  <Component {...pageProps} />
   </Base>
    </> 
}