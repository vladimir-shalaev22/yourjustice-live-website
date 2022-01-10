import React, {useState, useEffect} from 'react'
// import {HashLink as Link} from 'react-router-hash-link'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {Search} from 'components'

import style from './index.module.scss'

const OFFSET = -70

export default function PageNavigation({sidebar, search = false, side = 'right', nav, rootPath}) {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')
  const router = useRouter()

  const handleToggle = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const handleScroll = e => {
    e.preventDefault()
    const hash = e.target.getAttribute('data-id')
    const elem = document.getElementById(hash)
    const coord = elem.getBoundingClientRect().top + window.pageYOffset
    history.replaceState(null, null, `#${hash}`)
    window.scrollTo({
      top: coord,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    setActive(nav[0]?.id)
  }, [nav])


  useEffect(() => {
    const ids = nav.map(anchor => anchor.id)

    const onScroll = e => {
      const scrollPos = window.scrollY
      let set = ''
      ids.forEach((id, index) => {
        const elem = document.getElementById(id)
        const elemPos = elem ? elem.getBoundingClientRect().top + scrollPos : 0
        if (elemPos - (scrollPos - OFFSET) <= 10) {
          set = id
        }
      })
      if (set !== active) {
        setActive(set === '' ? ids[0] : set)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [nav, active])

  return (
    <div className={`${style.wrapper} ${sidebar ? style.sidebar : ''} ${isOpen ? style.opened : ''} ${side === 'left' ? style.left : ''}`}>
      <button className={`${style.button} ${isOpen ? style.opened : ''}`} onClick={handleToggle}>
        <span>On this page</span>
      </button>
      <div className={`${style.dropdown} ${isOpen ? style.opened : ''}`}>
        {/* {search && <Search />} */}
        <p>On this page</p>
        <ul>
          {nav.map((anchor, i) => <li key={`sdxmc230cc-1c32` + i}>
            <a className={active === anchor.id ? style.active : ''} data-id={anchor.id} onClick={handleScroll}>
              {anchor.text}
            </a>
          </li>)}
        </ul>
      </div>
    </div>
  )
}
