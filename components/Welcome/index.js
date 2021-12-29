import React from 'react'
import Link from 'next/link'

import {Button} from 'components'


import style from './index.module.scss'

export default function Welcome() {

  return <div className={style.welcome} id="vision">
    <h2>Welcome to The&nbsp;New&nbsp;Equilibrium!</h2>
    <p>We&nbsp;are&nbsp;building&nbsp;a&nbsp;justice&nbsp;bridge to&nbsp;a&nbsp;fairer&nbsp;world. <br />Join the game-changing project and create sovereignty and freedom  for Humanity.</p>
    <ul>
      <li>
        <Button className={style.button} type="link" to="/whitepaper">WhitePaper</Button>
      </li>
      <li>
        <Button className={style.button} type="link" fill={true} to="/answers/smart-contracts">Create a jurisdiction</Button>
      </li>
    </ul>
  </div>
}
