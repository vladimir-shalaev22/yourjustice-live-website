import React from 'react'
import {useRouter} from 'next/router'

import Item from './Item'
import List from './List'

import style from './index.module.scss'

import {data} from './data'

export default function Roadmap() {
  const {locale} = useRouter()
  const {header, roadmap} = data

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2>{header.title[locale]}</h2>
        <p>{header.text[locale]}</p>
      </div>
      <div className={style.roadmap}>
        {roadmap[locale].map((item, index) => <div className={style.roadpoint} key={`jc37vcj1d0` + index}>
          <p className={style.roadpointHeader}>{item.header}</p>
          {item.list && <List data={item.list} />}
        </div>)}
      </div>
    </div>
  )
}
