import React, {useState} from 'react'
import Link from 'next/link'

import {ArticleContent, PageNavigation} from 'components'

import {getData} from 'utils'

import style from 'styles/pages/whitepaper.module.scss'

export async function getStaticProps(context) {
  const {locale} = context
  const result = await getData('', 'whitepaper', locale)

  return {
    props: result
  }
}

export default function WhitePaper({data}) {
  const [nav, setNav] = useState([])

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.header}>
            <div className={style.breadcrumbs}><Link href="/">Home</Link> / <span>Whitepaper</span></div>
            <div className={style.date}>Page last updated: November 25, 2021</div>
          </div>
          <div className={style.navigation}>
            <PageNavigation nav={nav} />
          </div>
          <ArticleContent content={data} setNav={setNav} />
        </div>
        <div className={style.sidebar}>
          <div className={style.sticky}>
            <PageNavigation nav={nav} sidebar={true} search={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
