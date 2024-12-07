import style from '@/styles/Main2.module.scss'
import Image from 'next/image'

export default function Main2() {
  return (
    <>
      <main className={style.main}>
        <section className={style.sec2}>
          <Image src="https://www.w3schools.com/w3images/app5.jpg" alt="" width={300} height={200} className={style.img} />
        </section>
        <section className={style.sec1}>
          <div className={style.sec1Title}>
            <b className={style.bigTitle}>Clarity</b>
          </div>
          <div className={style.sec1Title}>
            <b className={style.secTitle}>Pixels&sbquo; who?</b>
          </div>
          <div className={style.sec1Text}>
            <p className={style.text}>
              <b className={style.text1}>A revolution in resolution. </b>
              Sharp and clear photos with the world&rsquo;s best photo engine&sbquo; incididunt ut labore e
              dolore magna aliqua. Ut enim ad minim veniam&sbquo; quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
