import React, {useState} from 'react'

import style from './Item.module.scss'

export default function Item({data}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = e => {
    e.preventDefault()

    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h4>{data.date}</h4>
        <button className={isOpen ? style.opened : ''} onClick={handleOpen}>{data.title}</button>
      </div>
      <h5>{data.title}</h5>
      <p className={isOpen ? style.opened : ''}>
        <span>{data.subtitle}</span>
        {data.text}
      </p>
    </div>
  )
}
