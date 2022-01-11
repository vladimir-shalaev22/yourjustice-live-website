import React, {useState} from 'react'
import Link from 'next/link';

import style from './index.module.scss'

export default function WhitepaperChapter({elem}) {
  const [isOpen, setIsOpen] = useState(false)
  const {text, link, inners} = elem

  const onToggle = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className={style.wrapper}>
      <a className={`${style.toggle} ${isOpen ? style.opened : ''}`} onClick={onToggle}></a>
      <Link href={link}>
        <a className={style.link}>{text}</a>
      </Link>
      <ul className={`${style.links} ${isOpen ? style.opened : ''}`}>
        {inners.map(elem => <li key={elem.link}>
          <Link href={elem.link}>{elem.text}</Link>
        </li>)}
      </ul>
    </div>
  )
}
