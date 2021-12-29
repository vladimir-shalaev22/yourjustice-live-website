import React from 'react'

import Item from './Item'

import style from './index.module.scss'

const scheduleList = [
  {
    date: 'Release 2022',
    title: 'Innovators',
    subtitle: 'contributors with disruptive mindset',
    text: 'investors, opinion leaders, strong communities, law students, reformers, blockchain and space leaders, artists, historians, change.org adherents'
  },
  {
    date: '2026',
    title: 'Early adopters',
    subtitle: 'virtual jurisdictions & digital states, humans with legal pains',
    text: 'leaders, entities built on values that need new laws, suffering from corruption, individuals, progressive communities'
  },
  {
    date: '2028',
    title: 'Early Majority',
    subtitle: 'innovative corporations, institutions, business',
    text: 'leaders, entities built on values that need new laws, suffering from corruption, individuals, progressive communities'
  },
  {
    date: '2031',
    title: 'Late Majority',
    subtitle: 'businesses, individuals, communities',
    text: 'followers in the same domains'
  },
  {
    date: '2040',
    title: 'Laggards',
    subtitle: 'individuals',
    text: 'conservative and senior people will join our system because it’s cheaper & better and everybody else is already in'
  }
]

export default function Schedule() {
  return (
    <div className={style.wrapper}>
      <div className={style.background}>
        <div className={style.header}>
          <h2>For a long time, quickly go!</h2>
          <p>Whatever it takes to produce exponential growth</p>
        </div>
        <div className={style.list}>
          <ul>
            {scheduleList.map((item, i) => <li key={item.date + i + 'sqpm235mwqp'}>
              <Item data={item} />
            </li>)}
          </ul>
        </div>
      </div>
      <figure>
        <img className={style.image} src="/assets/images/graf.svg" alt=""/>
        <img className={style.imageMd} src="/assets/images/graf-md.svg" alt=""/>
        <img className={style.imageSm} src="/assets/images/graf-sm.svg" alt=""/>
      </figure>
    </div>
  )
}
