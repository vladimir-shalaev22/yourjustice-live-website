import React from 'react'
import Link from 'next/link'

import style from './index.module.scss'

export default function CustomLink({type = 'external', to, className = 'link', children}) {
  return type === 'inner'
    ? <Link href={to}>
      <a className={style[className]}>{children}</a>
    </Link>
    : <a href={to} className={style[className]}>{children}</a>
}
