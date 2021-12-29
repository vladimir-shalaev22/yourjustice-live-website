import React from 'react'

import {Button} from 'components'

import style from './index.module.scss'

export default function Cards() {
  return <div className={style.cards} id="ecosystem">
    <div className={style.cardsContainer}>
      <div className={style.cardsContent}>
        <div className={style.card}>
          <figure>
            <img src="/assets/images/card-1.png" alt="Communities & Tribes"/>
          </figure>
          <div>
            <h3>Communities & Tribes</h3>
            <p>Create a jurisdiction, onboard your community and become sovereign. Find humans with common values and grow the tribe!</p>
            <Button type='link' to="/article/jurisdictions" className={style.button}>Create a virtual state</Button>
          </div>
        </div>
        <div className={style.card}>
          <figure>
            <img src="/assets/images/card-2.png" alt="Developers"/>
          </figure>
          <div>
            <h3>Developers</h3>
            <p>Invest time in a game-changing project, help to build a fairer world through technology as part of the team.</p>
            <Button type='link' to="/article/jurisdictions" className={style.button}>Build with us</Button>
          </div>
        </div>
        <div className={style.card2x}>
          <figure>
            <img src="/assets/images/card-3.png" alt="Lawyers"/>
          </figure>
          <div>
            <h3>Lawyers</h3>
            <p>Set your own legislation system, create a state, practice law and earn money.<br/><br/>Help to establish justice in the world.</p>
            <Button type='link' to="/article/jurisdictions" className={style.button}>Explore opportunities</Button>
          </div>
        </div>
      </div>
    </div>
    <div className={style.cardsFooter}>
      <ul>
        <li>🔝
          <span>Lawyers</span>
        </li>
        <li>🦉
          <span>Community Leaders</span>
        </li>
        <li>☘️
          <span>Eco-activists</span>
        </li>
        <li>🚀
          <span>Blockchain Experts</span>
        </li>
        <li>🦄
          <span>Metaverse Developers</span>
        </li>
        <li>🏕️
          <span>Digital Nomads</span>
        </li>
        <li>👓
          <span>NFT Artists</span>
        </li>
        <li>💵
          <span>Investors</span>
        </li>
        <li>🗿
          <span>Philosophers</span>
        </li>
        <li>🏔️
          <span>Network States Founders</span>
        </li>
      </ul>
    </div>
  </div>
}
