import React from 'react'

import style from './index.module.scss'

export default function CustomLink({to, className = 'link', children}) {
  return (
    <a href={to} className={style[className]}>{children}</a>
  )
}
