import React, {useEffect} from 'react'
import Head from "next/head"
import {Header, Footer} from 'components'

import style from './style.module.scss'

const MIN_WIDTH = 428

function Layout({children}) {
  useEffect(() => {
    // change viewport for phones
    const changeViewport = () => {
      const viewport = document.querySelector("meta[name=viewport]");
      const newViewport = document.createElement("meta")
      newViewport.setAttribute("name", "viewport")
      if (window.screen.width <= MIN_WIDTH) {
        document.head.removeChild(viewport);
        newViewport.setAttribute("content", "width=" + MIN_WIDTH);
      } else {
        document.head.removeChild(viewport);
        newViewport.setAttribute("content", "width=device-width, initial-scale=1")
      }
      document.head.appendChild(newViewport)
    }
    window.addEventListener('resize', changeViewport)

    changeViewport()

    return () => {
      window.removeEventListener('resize', changeViewport)
    }
  }, [])

  return (
    <div className={style.layout}>
      <Head>
        <link
          rel="preload"
          href="/assets/fonts/Aeroport Mono/Aeroport Mono.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/Kalam-Regular/Kalam-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/RedHatDisplay-Italic/RedHatDisplay-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/yourjustice/yourjustice.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          as="font"
          crossOrigin=""
        />
        <title>YourJustice.life</title>
        <meta name="description" content="Decentralized laws, justice and economics for digital tribes and sovereign individuals." />
        <meta property="og:title" content="YourJustice.life" />
        <meta property="og:description" content="Decentralized laws, justice and economics for digital tribes and sovereign individuals." />
        <meta property="og:image" content="/assets/images/social-preview.jpg" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
