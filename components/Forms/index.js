import React, {useState, useEffect} from 'react'

import Form from './Form'

import style from './index.module.scss'

const tabsFalse = {
  developers: false,
  investors: false,
  lawyers: false
}

export default function Forms() {
  const [tab, setTab] = useState({})
  const [isMobile, setIsMobile] = useState(false)

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
          <h2>Join us! </h2>
          <p>Share your thoughts and skills. We are open for fresh ideas and valuable contributors.</p>
        </div>
        <div className={style.forms}>
          <div className={style.tabs}>
            <a className={tab.developers ? style.active : ''} tab="developers" onClick={handleTab}><span>Developers</span></a>
            <a className={tab.investors ? style.active : ''} tab="investors" onClick={handleTab}><span>Investors</span></a>
            <a className={tab.lawyers ? style.active : ''} tab="lawyers" onClick={handleTab}><span>Lawyers</span></a>
          </div>
          <div className={style.form}>
            <div className={tab.developers ? style.opened : ''}>
              <a tab="developers" onClick={handleToogle}><span>Developers</span></a>
              <Form type="developers" isOpen={tab.developers} />
            </div>
            <div className={tab.investors ? style.opened : ''}>
              <a tab="investors" onClick={handleToogle}><span>Investors</span></a>
              <Form type="investors" isOpen={tab.investors} />
            </div>
            <div className={tab.lawyers ? style.opened : ''}>
              <a tab="lawyers" onClick={handleToogle}><span>Lawyers</span></a>
              <Form type="lawyers" isOpen={tab.lawyers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
