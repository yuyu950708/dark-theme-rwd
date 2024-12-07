import style from '@/styles/Main1.module.scss'
import { FaDownload, FaAndroid, FaApple, FaWindows } from 'react-icons/fa6'
import Image from 'next/image'

export default function Main1() {
  return (
    <>
      <main className={style.main}>
        <section className={style.sec1}>
          <div className={style.sec1Title}>
            <b className={style.bigTitle}>The App</b>
          </div>
          <div className={style.sec1Title}>
            <b className={style.secTitle}>Why buy it?</b>
          </div>
          <div className={style.sec1Text}>
            <p className={style.text}>
              <b className={style.text1}>Take photos like a pro. </b>
              You should buy this app because lorem ipsum consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
          <div className={style.sec1Text}>
            <button className={style.downloadBtn}>
              <FaDownload /> Download Application
            </button>
          </div>
          <div className={style.sec1Text}>
            Available for <FaAndroid className={style.android} />{' '}
            <FaApple className={style.apple} /> <FaWindows className={style.window} />
          </div>
        </section>
        <section className={style.sec2}>
          <Image src="https://www.w3schools.com/w3images/img_app.jpg" width={300} height={200} alt="" className={style.img}/>
        </section>
      </main>
    </>
  )
}
