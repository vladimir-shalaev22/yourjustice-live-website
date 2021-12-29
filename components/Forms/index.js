import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import Form from './Form'

import style from './index.module.scss'

import {data} from './data'

const tabsFalse = {
  developers: false,
  investors: false,
  lawyers: false
}

export default function Forms() {
  const [tab, setTab] = useState({})
  const [isMobile, setIsMobile] = useState(false)
  const {locale} = useRouter()
  const {header, tabs} = data

  const handleTab = e => {
    e.preventDefault()
    const newTab = e.target.getAttribute('tab')
    setTab({...tabsFalse, [newTab]: true})
  }

  const handleToogle = e => {
    e.preventDefault()
    const newTab = e.target.getAttribute('tab')
    setTab({...tab, [newTab]: !tab[newTab]})
  }

  useEffect(() => {
    window.innerWidth < 768
      ? setTab(tabsFalse)
      : setTab({
      developers: true,
      investors: false,
      lawyers: false
    })
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)

    const checkIsMobile = () => {
      if (window.innerWidth < 768 && !isMobile) {
        setTab(tabsFalse)
        setIsMobile(true)
      } else if (window.innerWidth >= 768 && isMobile) {
        setTab({...tabsFalse, developers: true})
        setIsMobile(false)
      }
    }

    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [isMobile])

  return (
    <div className={style.wrapper} id="joinus">
      <div className={style.container}>
        <div className={style.header}>
          <h2>{header.title[locale]}</h2>
          <p>{header.text[locale]}</p>
        </div>
        <div className={style.forms}>
          <div className={style.tabs}>
            {tabs.map((item, i) => <a key={`dsmc32-dc1m1` + i} className={tab[item.tab] ? style.active : ''} tab={item.tab} onClick={handleTab}>
              <span>{item.text[locale]}</span>
            </a>)}
          </div>
          <div className={style.form}>
            {tabs.map((item, i) => <div key={`mc2349g2-cf1cm` + i} className={tab[item.tab] ? style.opened : ''}>
              <a tab={item.tab} onClick={handleToogle}><span>{item.text[locale]}</span></a>
              <Form type={item.tab} isOpen={tab[item.tab]} />
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
