import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { ArticleContent, PageNavigation, Button } from 'components'

import { getData, getAllFiles } from 'utils'

import style from './index.module.scss'

export async function getStaticProps(context) {
  const { locale, params } = context
  const page = params.id
  const result = await getData('whitepaper', page, locale)

  return {
    props: {
      ...result,
      page,
    },
  }
}

export async function getStaticPaths({ locales }) {
  const pages = getAllFiles('whitepaper')

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...pages.map(id => ({
        params: {
          id,
        },
        locale,
      })),
    ],
    []
  )

  return {
    paths,
    fallback: false,
  }
}

export default function Article({ data, page }) {
  const [nav, setNav] = useState([])

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.header}>
            <div className={style.breadcrumbs}>
              <Link href="/">Home</Link> / <span>Whitepaper</span>
            </div>
            <div className={style.date}>
              Page last updated: November 25, 2021
            </div>
            <h1>YourJustice WhitePaper</h1>
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
