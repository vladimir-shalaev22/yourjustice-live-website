import React from 'react'
import {useRouter} from 'next/router'

import {Icon} from 'components'

import style from './index.module.scss'

import {data} from './data'

export default function Blockquote() {
  const {locale} = useRouter()
  const {author, quote} = data
  return <div className={style.blockquote}>
    <div className={style.container}>
      <div className={style.person}>
        <figure>
          <img src="/assets/images/blockquote-ava.png" alt="Balaji Srinivasan"/>
        </figure>
        <span>2017</span>
        <p className={style.personName}>{author.name[locale]}</p>
        <p className={style.personPosition} dangerouslySetInnerHTML={{ __html: author.position[locale] }}></p>
      </div>
      <div className={style.quote}>
        <blockquote>
          <span className={style.quoteLeft}>
            <Icon icon="quote-left" className={style.quoteIcon} />
          </span>
          <ul>
            {quote.list[locale].map((li, i) => <li key={`sdf2cd115plamc` + i} dangerouslySetInnerHTML={{ __html: li}}></li>)}
          </ul>
          <span className={style.quoteRight}>
            <Icon icon="quote-right" className={style.quoteIcon} />
          </span>
        </blockquote>
        <p>{data.quote.postscriptum[locale]}</p>
      </div>
    </div>
  </div>
}
