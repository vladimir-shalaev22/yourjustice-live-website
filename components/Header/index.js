import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import {Language} from 'components'

import {data} from './data'

import style from './index.module.scss'

export default function Header({lang, setLang}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {locale} = useRouter()
  const {links} = data

  const handleMenu = e => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  const handleScroll = el => {
    // const offset = el.getAttribute('offset') || -72
    // const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    // window.scrollTo({ top: yCoordinate + offset, behavior: 'smooth' })
    // setIsMenuOpen(false)
  }

  return <header className={style.header}>
    <div className={style.headerContainer}>
      <Link href="/">
        <a className={style.toHome}>
          YourJustice.live
        </a>
      </Link>
      <ul className={style.links}>
        {links.map((link, i) => <li key={`23c322p11kc1` + i}>
          <Link href={link.link}>{link.text[locale]}</Link>
        </li>)}
      </ul>
      <div className={style.languages}>
        <Language lang={lang} setLang={setLang} />
      </div>
      <div className={style.menuWrapper}>
        <button className={`${style.burger} ${isMenuOpen ? style.opened : ''}`} onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`${style.menu} ${isMenuOpen ? style.opened : ''}`}>
          <div className={style.menuLanguage}>
            <Language lang={lang} setLang={setLang} />
          </div>
          <ul>
            {links.map((link, i) => <li key={`23c322p11kc1` + i}>
              <Link href={link.link}>{link.text[locale]}</Link>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  </header>
}
