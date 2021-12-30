import React from 'react'
import {useRouter} from 'next/router'

import style from './index.module.scss'

import {data} from './data'

export default function Comparison() {
  const {locale} = useRouter()
  const {header, table} = data

  return <div className={style.wrapper}>
    <a id="equilibrium" className={style.anchor}></a>
    <div className={style.header}>
      <h2>{header.title[locale]}</h2>
      <p>{header.text[locale]}</p>
    </div>
    <div className={style.comparison}>
      <ul>
        {table[locale].map((row, y) => <li key={'row' + y + 'fsdf2352f23'}>
          <ul>
            {row.map((cell, i) => <li key={'cell' + i + 'fsdf2352f23'}>
              {cell}
              {i !== 0 && y !== 0 && <span>{table[locale][0][i]}</span>}
            </li>)}
          </ul>
        </li>)}
      </ul>
    </div>
  </div>
}
