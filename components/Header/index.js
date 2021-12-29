import React, {useState} from 'react'
// import {HashLink as Link} from 'react-router-hash-link'
import Link from 'next/link'

import {Language} from 'components'

import style from './index.module.scss'

export default function Header({lang, setLang}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          YourJustice.life
        </a>
      </Link>
      <ul className={style.links}>
        <li>
          <Link href="/#vision">Vision</Link>
        </li>
        <li>
          <Link href="/#ecosystem">Ecosystem</Link>
        </li>
        <li>
          <Link href="/#equilibrium">Equilibrium</Link>
        </li>
        <li>
          <Link href="/#team">Team</Link>
        </li>
        <li>
          <Link href="/#joinus">Join us</Link>
        </li>
        <li>
          <Link href="/#contacts">Contacts</Link>
        </li>
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
            <li>
              <Link href="/#vision">Vision</Link>
            </li>
            <li>
              <Link href="/#ecosystem">Ecosystem</Link>
            </li>
            <li>
              <Link href="/#equilibrium">Equilibrium</Link>
            </li>
            <li>
              <Link href="/#team">Team</Link>
            </li>
            <li>
              <Link href="/#joinus">Join us</Link>
            </li>
            <li>
              <Link href="/#contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
}
