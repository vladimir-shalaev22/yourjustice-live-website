import React from 'react'
import {useRouter} from 'next/router'

import {Button} from 'components'

import style from './index.module.scss'

import {data} from './data'

export default function HomeBanner({language}) {
  const {locale} = useRouter()

  return <div className={style.banner}>
    <div className={style.bannerContainer}>
      <div className={style.bannerContent}>
        <h2>YourJustice.life</h2>
        <p>{data[locale].text}</p>
        <Button type="link" to="/whitepaper" className={style.button}>WhitePaper</Button>
      </div>
    </div>
    <div className={style.bannerFooter}>
      <ul>
        {data[locale].list.map((li, i) => <li key={`vfdds2` + i}>{li}</li>)}
      </ul>
    </div>
    <button type="button" onClick={() => {
      throw new Error("Sentry Frontend Error");
    }}>
        Throw error
    </button>
  </div>
}
