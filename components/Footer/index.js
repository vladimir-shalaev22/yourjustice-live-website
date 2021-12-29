import React from 'react'
import Link from 'next/link'

import {Language, Icon} from 'components'
import Socials from './Socials'

import style from './index.module.scss'

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
    language: 'kr'
  },
  {
    icon: 'telegram',
    src: '/',
    language: 'ru'
  }
]

export default function Footer({lang, setLang}) {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.siteLinks}>
          <div className={style.contacts} id="contacts">
            <h3>Contact us:</h3>
            <ul>
              <li>
                <Link href="/">
                  <a className={style.profile}>
                    <Icon icon="profile" className={style.icon} /><span>Andrey Panferov</span>
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
            <div className={style.linksGroup}>
              <h3>YourJustice.live</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Communities</Link>
                </li>
                <li>
                  <Link href="/">Developers</Link>
                </li>
              </ul>
            </div>
            <div className={style.linksGroup}>
              <h3>Technology</h3>
              <ul>
                <li>
                  <Link href="/whitepaper">WhitePapers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.socials}>
            <Socials socials={socialsCommon} />
            <Socials socials={tgLanguage} />
          </div>
        </div>
        <div className={style.copy}>
          <div className={style.copyLinks}>
            <span>Copyright © 2021 YourJustice.live. All rights reserved.</span>
            <ul>
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Cookie Policy</Link></li>
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
