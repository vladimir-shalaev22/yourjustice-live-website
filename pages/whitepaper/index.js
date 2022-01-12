import React, {useState} from 'react'
import Link from 'next/link'

import {ArticleContent, PageNavigation, WhitepaperChapter} from 'components'

import {getData} from 'utils'

import {links} from 'components/WhitepaperChapter/data'

import style from './index.module.scss'

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
            <h1>YourJustice WhitePaper</h1>
          </div>
          <div className={style.index}>
            <p>Table of contents</p>
            <ul>
              {links.map(elem => <li key={elem.link}>
                {elem.inners
                  ? <WhitepaperChapter elem={elem} />
                  : <Link href={'/whitepaper/' + elem.link}>
                    <a className={style.link}>
                      {elem.text}
                    </a>
                  </Link>
                }
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
