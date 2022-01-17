import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import Form from './Form'

import style from './index.module.scss'

import {data} from './data'

export default function Forms() {
  const {locale} = useRouter()
  const {header} = data

  return (
    <div className={style.wrapper}>
      <a id="join-us" className={style.anchor}></a>
      <div className={style.container}>
        <div className={style.header}>
          <h2>{header.title[locale]}</h2>
        </div>
        <div className={style.forms}>
          <div className={style.form}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}
