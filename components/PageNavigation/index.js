import React, {useState, useEffect} from 'react'
// import {HashLink as Link} from 'react-router-hash-link'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {Search} from 'components'

import style from './index.module.scss'

const OFFSET = -96

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
    // console.log(router)
    // const {pathname, query} = router
    // const path = pathname.replace('[id]', query.id)
    // const id = e.target.getAttribute('href').match(/#(.*)/)[1]
    // const el = document.getElementById(id)
    // const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    // window.scrollTo({ top: yCoordinate + OFFSET, behavior: 'smooth' });
    // console.log(path)
    // window.location.hash = id
    // router.push(path, path + '#' + id, {scroll: false})
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
        {search && <Search />}
        <p>On this page</p>
        <ul>
          {nav.map((anchor, i) => <li key={anchor.id + i}>
            <Link href={{
              pathname: rootPath,
              hash: anchor.id
            }}>
              <a className={active === anchor.id ? style.active : ''}>
                {anchor.innerText}
              </a>
            </Link>
          </li>)}
        </ul>
      </div>
    </div>
  )
}
