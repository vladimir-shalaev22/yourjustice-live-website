import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import {ArticleContent, PageNavigation, WhitepaperChapter} from 'components'

import {getData} from 'utils'

import {links} from 'components/WhitepaperChapter/data'

import { translations } from './_data'

import style from './index.module.scss'

export async function getStaticProps(context) {
  const {locale} = context
  const result = await getData('', 'whitepaper', locale)

  return {
    props: result
  }
}

export default function WhitePaper({data}) {
  const [nav, setNav] = useState([])
  const {locale} = useRouter()

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.header}>
            <div className={style.breadcrumbs}><Link href="/">Home</Link> / <span>Whitepaper</span></div>
            <div className={style.date}>Page last updated: November 25, 2021</div>
            <h1>YourJustice WhitePaper</h1>
            <details>
              <summary>Legal disclaimer</summary>
              The sole purpose of this White Paper is to outline the objectives and proposed architecture of YourJustice to those, who may be interested. This White Paper and its contents do not, and are not intended to, constitute, or form any part of, an offer for sale, prospectus or invitation to subscribe for or purchase Tokens. Nothing in White Paper can be considered as “investment advice” for any purpose. If and when YourJustice proceeds with offering for sale and subscription its Tokens, it will do so through definitive sale and subscription documents. Nothing in this White Paper should be read as a promise of how YourJustice business will develop or of the utility or value of its Tokens. This White Paper outlines current plans, which could change for any number of reasons at the discretion of the board of directors of YourJustice. The ongoing development and maintenance of the YourJustice Platform may be abandoned and/or materially modified for a number of reasons, including, but not limited to, lack of interest from the public, lack of funding, lack of commercial success or prospects, or departure of key personnel. The industry in which YourJustice operates is new and the regulatory status of organisations such as YourJustice, blockchain technology and Tokens is unsettled in many jurisdictions. It is therefore difficult to predict how or whether governmental authorities may regulate YourJustice, the YourJustice Platform and the Tokens. YourJustice may therefore cease the development and any of the activities of the YourJustice Platform in the event that governmental actions make it unlawful or commercially undesirable to continue to do so. Statements contained in the White Paper may constitute “forward-looking statements”. Forward-looking statements are generally identifiable by the use of the words “may”, “will”, “should”, “plan”, “expect”, “anticipate”, “estimate”, “believe”, “intend”, “project”, “goal” or “target” or the negative of these words or other variations on these words or comparable terminology. Forward-looking statements are based on current expectations and involve a number of known and unknown risks, uncertainties and other factors that could cause the actual performance of YourJustice to be materially different from any future performance expressed or implied by such forward-looking statements. You should not place undue reliance on forward-looking statements and no undertaking is given to publicly update or revise any forward-looking statements that may be made herein, whether as a result of new information, future events or otherwise.
            </details>
          </div>
          <div className={style.index}>
            <p>{translations.tableOfContents[locale]}</p>
            <ul>
              {links.map(elem => <li key={elem.link}>
                {elem.inners
                  ? <WhitepaperChapter elem={elem} />
                  : <Link href={'/whitepaper/' + elem.link}>
                    <a className={style.link}>
                      {elem.text[locale]}
                    </a>
                  </Link>
                }
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
