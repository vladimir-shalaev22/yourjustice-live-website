import React from 'react'
import {useRouter} from 'next/router'

import Item from './Item'

import style from './index.module.scss'

import {data} from './data'

export default function Schedule() {
  const {locale} = useRouter()
  const {header, schedule} = data

  return (
    <div className={style.wrapper}>
      <div className={style.background}>
        <div className={style.header}>
          <h2>{header.title[locale]}</h2>
          <p>{header.text[locale]}</p>
        </div>
        <div className={style.list}>
          <ul>
            {schedule[locale].map((item, i) => <li key={item.date + i + 'sqpm235mwqp'}>
              <Item data={item} />
            </li>)}
          </ul>
        </div>
      </div>
      <figure>
        <img className={style.image} src="/assets/images/graf.svg" alt=""/>
        <img className={style.imageMd} src="/assets/images/graf-md.svg" alt=""/>
        <img className={style.imageSm} src="/assets/images/graf-sm.svg" alt=""/>
      </figure>
    </div>
  )
}
