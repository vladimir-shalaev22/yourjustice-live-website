import React from 'react'

import style from './index.module.scss'

const comparisonData = [
  ['', 'Existing States', 'Network States'],
  ['States and Laws systems', '190-249', 'Unlimited'],
  ['Transparency & Trust', '2/3 of countries corrupted', 'Insignificant corruption'],
  ['Crypto Economy Support', 'Weak', 'By default'],
  ['Justice speed and cost', '180 days - 5 years', '5-60 days, $100-1500'],
  ['Law & Justice officials', 'Serving themselves', 'Serving values and community'],
  ['Customer satisfaction', 'Declining', 'Presumably high'],
  ['Governance nativity', 'Only after high school', 'Facebook - level'],
  ['Reputation effects', 'Washed out by media', 'Indelible and Unforgettable'],
  ['Military enforcement', 'Centralized', 'None or Decentralized'],
  ['Case complexity', 'Any', 'Any']
]

export default function Comparison() {
  return <div className={style.wrapper} id="equilibrium">
    <div className={style.header}>
      <h2>Equilibrium</h2>
      <p>Why we consider it broken and what&#39;s our vision of Justice 3.0 in a hybrid reality</p>
    </div>
    <div className={style.comparison}>
      <ul>
        {comparisonData.map((row, y) => <li key={'row' + y + 'fsdf2352f23'}>
          <ul>
            {row.map((cell, i) => <li key={'cell' + i + 'fsdf2352f23'}>
              {cell}
              {i !== 0 && y !== 0 && <span>{comparisonData[0][i]}</span>}
            </li>)}
          </ul>
        </li>)}
      </ul>
    </div>
  </div>
}
