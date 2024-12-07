import { FaAndroid, FaApple, FaWindows } from 'react-icons/fa6'
import style from '@/styles/Navbar.module.scss'
import { useState } from 'react'
import { TbXboxX } from 'react-icons/tb'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <nav className={style.nav}>
        <section>
          <Image src="https://www.w3schools.com/w3images/app2.jpg" alt="pic" width={1600} height={900} className={style.img} />
        </section>
        <section className={style.view}>
          <div>
            <b className={style.viewTitle}>CLICK! Fast and Easy</b>
          </div>
          <hr className={style.hr} />
          <div>
            <p className={style.text}>Choose from thousands of features</p>
          </div>
          <div>
            <button className={style.btn} onClick={() => setIsOpen(true)}>
              Download <FaAndroid /> <FaApple /> <FaWindows />
            </button>
          </div>
        </section>
        {isOpen && (
          <main className={style.popo}>
            <section className={style.sec}>
              <b className={style.title}>D O W N L O A D</b>
              <p className={style.text}>
                Download the app in AppStore, Google Play or Microsoft Store.
              </p>
              <span className={style.text}>
                <FaAndroid /> <FaApple /> <FaWindows />
              </span>
              <br />
              <input type="text" className={style.input} placeholder="Enter e-mail" />
              <br />
              <button onClick={() => setIsOpen(!true)} className={style.btn}>
                Fack Downnload
              </button>
              <button className={style.x} onClick={() => setIsOpen(!true)}>
                <TbXboxX />
              </button>
            </section>
          </main>
        )}
        <section>
          <div className={style.TakeTourView}>
            <b className={style.TakeTour}>Take Tour &gt;</b>
          </div>
        </section>
      </nav>
    </>
  )
}
