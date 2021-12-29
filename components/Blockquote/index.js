import React from 'react'

import {Icon} from 'components'

import style from './index.module.scss'

export default function Blockquote() {
  return <div className={style.blockquote}>
    <div className={style.container}>
      <div className={style.person}>
        <figure>
          <img src="/assets/images/blockquote-ava.png" alt="Balaji Srinivasan"/>
        </figure>
        <span>2017</span>
        <p className={style.personName}>Balaji Srinivasan</p>
        <p className={style.personPosition}>Angel investor<br />Former CTO of Coinbase</p>
      </div>
      <div className={style.quote}>
        <blockquote>
          <span className={style.quoteLeft}>
            <Icon icon="quote-left" className={style.quoteIcon} />
          </span>
          <ul>
            <li>Start your own company</li>
            <li>Start your own community</li>
            <li>Start your own currency</li>
            <li>Start your own country<span>Network States</span></li>
          </ul>
          <span className={style.quoteRight}>
            <Icon icon="quote-right" className={style.quoteIcon} />
          </span>
        </blockquote>
        <p>Let’s get here together!</p>
      </div>
    </div>
  </div>
}
