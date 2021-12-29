import React from 'react'
import {useRouter} from 'next/router'

import {Button} from 'components'

import style from './index.module.scss'

import {translations} from './translations'

export default function HomeBanner({language}) {
  const {locale} = useRouter()

  return <div className={style.banner}>
    <div className={style.bannerContainer}>
      <div className={style.bannerContent}>
        <h2>YourJustice.life</h2>
        <p>{translations[locale].text}</p>
        <Button type="link" to="/whitepaper" className={style.button}>WhitePaper</Button>
      </div>
    </div>
    <div className={style.bannerFooter}>
      <ul>
        {translations[locale].list.map((li, i) => <li key={`vfdds2` + i}>{li}</li>)}
      </ul>
    </div>
  </div>
}
