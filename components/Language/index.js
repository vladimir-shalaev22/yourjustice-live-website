import React, {useState, useEffect, useRef, useContext, useCallback} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import style from './index.module.scss'

export default function Language({setLang, top = false}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef()
  const router = useRouter()
  const {locale, pathname, asPath} = router

  const handleOpen = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const lang = e.target.getAttribute('lang')
    router.push(pathname, asPath, {locale: lang})
    setIsOpen(false)
  }

  useEffect((e) => {
    const checkIfOutside = e => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfOutside)
    }
  }, [isOpen])

  return (
    <div className={style.wrapper} ref={dropdownRef}>
      <button className={style.current} onClick={handleOpen}><img src={`/assets/images/${locale}.png`} alt="Current lang" /></button>
      <ul className={`${style.list} ${isOpen ? style.opened : ''} ${top ? style.top : ''}`}>
        <li>
          <button onClick={handleClick} lang="ru"><img src="/assets/images/ru.png" alt="Russian" /><span>Русский</span></button>
        </li>
        <li>
          <button onClick={handleClick} lang="en"><img src="/assets/images/en.png" alt="English" /><span>English</span></button>
        </li>
        <li>
          <button onClick={handleClick} lang="kr"><img src="/assets/images/kr.png" alt="Korean" /><span>한국인</span></button>
        </li>
        <li>
          <button onClick={handleClick} lang="tr"><img src="/assets/images/tr.png" alt="Turkish" /><span>Türk</span></button>
        </li>
      </ul>
    </div>
  )
}
