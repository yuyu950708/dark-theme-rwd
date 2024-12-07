import { FaFacebookSquare, FaSnapchat, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import { TiSocialLinkedin } from 'react-icons/ti'
import style from '@/styles/Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <section className={style.sec}>
          <div className={style.icon}>
            <FaFacebookSquare className={style.icon1} />
            <IoLogoInstagram className={style.icon2} />
            <FaSnapchat className={style.icon3} />
            <FaPinterestP className={style.icon4} />
            <FaTwitter className={style.icon5} />
            <TiSocialLinkedin className={style.icon6} />
          </div>
          <div>
            Powered by{' '}
            <a href="https://www.w3schools.com/w3css/default.asp" className={style.url}>
              {' '}
              w3.css
            </a>
          </div>
        </section>
      </footer>
    </>
  )
}
