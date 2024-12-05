import style from '@/styles/Home.module.scss'
import { useState } from 'react'

export default function DaarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  return (
    <>
      <div className={style.view}>
        <main className={darkMode ? style.darkMode : style.brightMode}>
          <section>
            <div>
              <b className={style.title}>Auto Mode</b>
            </div>
            <div>
              <p className={style.title2}>Automaticly dark mode in night</p>
            </div>
          </section>
          <section className={style.btn}>
            <button className={style.dayBtn} onClick={()=> setDarkMode(!darkMode)} >Day</button>
            <button className={style.nightBtn} onClick={()=> setDarkMode(!darkMode)}>Night</button>
          </section>
        </main>
      </div>
    </>
  )
}
