import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import {Button} from 'components'

import {data} from './data'

import style from './index.module.scss'

export default function Welcome() {
  const {locale} = useRouter()
  const {title, text, buttons} = data

  return <div className={style.welcome}>
    <a id="vision" className={style.anchor}></a>
    <h2 dangerouslySetInnerHTML={{ __html: title[locale] }}></h2>
    <p dangerouslySetInnerHTML={{ __html: text[locale] }}></p>
    <ul>
      {buttons.map((button, i) => <li key={`wjmc3021d345jc2` + i}>
        <Button className={style.button} type="link" fill={button.fill} to={button.link}>{button[locale]}</Button>
      </li>)}
      <li>
      </li>
    </ul>
  </div>
}
