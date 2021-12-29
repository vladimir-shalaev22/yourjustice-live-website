import React, {useState, useEffect} from 'react'

import Group from './Group'

import style from './index.module.scss'

export default function Team() {
  const [data, setData] = useState([])

  useEffect(() => {
    import('./team.json')
    .then(res => setData(res.team))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className={style.wrapper} id="team">
      <div className={style.container}>
        <div className={style.header}>
          <h2>About us</h2>
          <p>YourJustice is an open project with a multi-national team</p>
        </div>
        {data.map((group, i) => <Group group={group} key={group.head + i}/>)}
      </div>
    </div>
  )
}
