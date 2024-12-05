import style from '@/styles/Main2.module.scss'

export default function Main2() {
  return (
    <>
      <main className={style.main}>
        <section className={style.sec2}>
          <img src="https://www.w3schools.com/w3images/app5.jpg" alt="" className={style.img}/>
        </section>
        <section className={style.sec1}>
          <div className={style.sec1Title}>
            <b className={style.bigTitle}>Clarity</b>
          </div>
          <div className={style.sec1Title}>
            <b className={style.secTitle}>Pixels, who?</b>
          </div>
          <div className={style.sec1Text}>
            <p className={style.text}>
              <b className={style.text1}>A revolution in resolution. </b>
              Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
