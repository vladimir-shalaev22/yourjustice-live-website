import React, {useRef, useEffect} from 'react'
import Markdown from 'markdown-to-jsx'

import {Button, Code, CustomLink, Paragraph, ArticleTable, ArticleAuthor} from 'components'

import style from './index.module.scss'

export default function ArticleContent({content, setNav}) {
  const mdRef = useRef(null)

  useEffect(() => {
    if (mdRef.current) {
      const elems = mdRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6')
      // const levels = new Set([...elems].map(el => el.nodeName).sort((a, b) => a[1] - b[1]))
      // console.log(levels)
      // const nav = [...elems].map(elem => {
      //   return {
      //
      //   }
      // })
      setNav([...elems])
    }
  }, [mdRef, content, setNav])

  return (
    <div className={style.wrapper}>
      <div ref={mdRef} className={style.article}>
        <Markdown
          options={{
            wrapper: React.Fragment,
            overrides: {
              Button: {
                component: Button,
              },
              Code: {
                component: Code,
              },
              Link: {
                component: CustomLink,
              },
              Paragraph: {
                component: Paragraph,
              },
              Table: {
                component: ArticleTable,
              },
              Author: {
                component: ArticleAuthor
              }
            },
          }}
        >{content}</Markdown>
      </div>
    </div>
  )
}
