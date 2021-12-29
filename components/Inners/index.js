import React from 'react'

import {Button} from 'components'

import style from './index.module.scss'

export default function Inners() {

  return <div className={style.wrapper}>
    <div className={style.header}>
      <h2>What’s inside?</h2>
      <p>Transparent anti-fragile Law 3.0 platform for all types of human relations.</p>
    </div>
    <div className={style.sections}>
      <div className={`${style.section} ${style.sectionFirst}`}>
        <figure>
          <img src="/assets/images/inner-1.png" alt="inner-1"/>
        </figure>
        <h3>Jurisdictions built on your own Values</h3>
        <p>Online tribes built on shared human values, not nationalities</p>
        <ul>
          <li>Core values declared by communities, companies, states and individuals</li>
          <li>Social rating used as humanity metric</li>
          <li>Easy search of like-minded people, community members, customers and providers, staff, citizens or netizens</li>
        </ul>
        <Button type='link' to="/article/jurisdictions" className={style.button}>Learn More</Button>
      </div>
      <div className={`${style.section} ${style.sectionSecond}`}>
        <figure>
          <img src="/assets/images/inner-2.png" alt="inner-2"/>
        </figure>
        <h3>Your own laws & justice on blockchain</h3>
        <ul>
          <li>Community and corporate governance</li>
          <li>Constitution</li>
          <li>Laws and Smart Laws</li>
        </ul>
        <Button type='link' to="/article/jurisdictions" className={style.button}>Learn More</Button>
      </div>
      <div className={`${style.section} ${style.sectionThird}`}>
        <figure>
          <img src="/assets/images/inner-3.png" alt="inner-3"/>
        </figure>
        <h3>Cross-chain economics</h3>
        <ul>
          <li>Smart contracts</li>
          <li>Public services</li>
          <li>Tokenomics</li>
        </ul>
        <Button type='link' to="/article/jurisdictions" className={style.button}>Learn More</Button>
      </div>
    </div>
  </div>
}
