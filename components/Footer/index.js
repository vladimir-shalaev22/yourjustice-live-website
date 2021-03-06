import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {Language, Icon} from 'components'
import Socials from './Socials'

import style from './index.module.scss'

import {data} from './data'

const socialsCommon = [
  {
    icon: 'twitter',
    src: 'https://twitter.com/home'
  },
  {
    icon: 'discord',
    src: 'https://discord.com/'
  },
  {
    icon: 'facebook',
    src: 'https://www.facebook.com/'
  },
  {
    icon: 'instagram',
    src: 'https://www.instagram.com/'
  },
  {
    icon: 'youtube',
    src: 'https://www.youtube.com/'
  },
  {
    icon: 'linkedin',
    src: 'https://www.linkedin.com/'
  },
  {
    icon: 'medium',
    src: 'https://medium.com/'
  }
]

const tgLanguage = [
  {
    icon: 'telegram',
    src: '/',
    language: 'tr'
  },
  {
    icon: 'telegram',
    src: '/',
    language: 'en'
  },
  {
    icon: 'telegram',
    src: '/',
    language: 'us'
  },
  {
    icon: 'telegram',
    src: '/',
    language: 'ko'
  },
  {
    icon: 'telegram',
    src: '/',
    language: 'ru'
  }
]

export default function Footer({lang, setLang}) {
  const {locale} = useRouter()
  const {title, profile, linksGroups, copy} = data

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* <div className={style.siteLinks}>
          <div className={style.contacts} id="contacts">
            <h3>{title[locale]}:</h3>
            <ul>
          <li>
          <Link href="/">
          <a className={style.profile}>
          <Icon icon="profile" className={style.icon} /><span>{profile[locale]}</span>
          </a>
          </Link>
          </li>
          <li>
          <Link href="/"><a><Icon icon="phone" className={style.icon} /><span>+ 342 0332 231 123</span></a></Link>
          </li>
          <li>
          <Link href="/"><a><Icon icon="message" className={style.icon} /><span>andreypnfrv@gmail.com</span></a></Link>
          </li>
          <li>
          <Link href="/"><a><Icon icon="send" className={style.icon} /><span>@andreypnfrv</span></a></Link>
          </li>
            </ul>
          </div>
          <div className={style.links}>
            {linksGroups.map((group, i) => <div key={`dsmc20-c1kc1` + i} className={style.linksGroup}>
          <h3>{group.title[locale]}</h3>
          <ul>
          {group.links.map((link, i) => <li key={`dc1-fc2j42091` + i}>
          <Link href={link.link}>{link.text[locale]}</Link>
          </li>)}
          </ul>
            </div>)}
          </div>
          <div className={style.socials}>
            <Socials socials={socialsCommon} />
            <Socials socials={tgLanguage} />
          </div>
        </div> */}
        <div className={style.copy}>
          <div className={style.copyLinks}>
            <span>{copy.text[locale]}</span>
            <ul>
              {copy.links.map((link, i) => <li key={`vcm1-c34fc9-1` + i}>
                <Link href={link.link}>{link.text[locale]}</Link>
              </li>)}
            </ul>
          </div>
          <div className={style.language}>
            <Language lang={lang} setLang={setLang} top={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
