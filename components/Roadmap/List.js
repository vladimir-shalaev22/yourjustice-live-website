import React, {useEffect, useRef} from 'react'

import List from './List'

import style from './List.module.scss'

export default function RoadmapList({data}) {
  const lastElem = useRef('')

  useEffect(() => {
    const lastOffset = lastElem.current.offsetTop
    const branch = lastElem.current.querySelector(`.${style.branch}`)
    branch.style.height = `${lastOffset + 20}px`
  }, [])

  return (
    <ul className={style.wrapper}>
      {data.map((item, index) => index === data.length - 1
        ? <li ref={lastElem} className={style.listItem} key={`82d09gf3dx1` + index}>
          <div className={style.branch}></div>
          <p className={style.listText}>{item.text}</p>
          {item.list && <List data={item.list} />}
        </li>
        : <li className={style.listItem} key={`82d09gf3dx1` + index}>
        <p className={style.listText}>{item.text}</p>
        {item.list && <List data={item.list} />}
      </li>)}
    </ul>
  )
}
