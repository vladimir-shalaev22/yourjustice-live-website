import React, {useState} from 'react'
import Link from 'next/link'

import {ArticleContent, PageNavigation} from 'components'

import {getData} from 'utils'

import style from 'styles/pages/whitepaper.module.scss'

export async function getStaticProps(context) {
  const {locale} = context
  const result = await getData('', 'disclaimer', locale)

  return {
    props: result
  }
}

export default function Disclamer({data}) {
  const [nav, setNav] = useState([])

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <ArticleContent content={data} setNav={setNav} />
        </div>
      </div>
    </div>
  )
}
