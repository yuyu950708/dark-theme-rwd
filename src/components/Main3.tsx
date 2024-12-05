import style from '@/styles/Main3.module.scss'
import { FaBoltLightning, FaBatteryFull } from 'react-icons/fa6'
import { IoDiamond, IoEarthSharp } from 'react-icons/io5'
import { FaHeart, FaCamera, FaCloud, FaShieldAlt } from 'react-icons/fa'
import { RiHardDrive3Fill } from 'react-icons/ri'
import { IoMdPerson } from 'react-icons/io'
import { MdWifi } from 'react-icons/md'
import { HiMiniPhoto } from "react-icons/hi2";

export default function Main3() {
  return (
    <>
      <main className={style.main}>
        <section className={style.title}>
          <b className={style.bigTitle}>Features</b>
          <p  className={style.text}>This app is just so lorem ipsum</p>
        </section>
        <section className={style.icons}>
          <div className={style.icon}>
            <FaBoltLightning className={style.fast} />
            <br />
            fast
          </div>
          <div className={style.icon}>
            <FaHeart className={style.loved}/>
            <br />
            Loved
          </div>
          <div className={style.icon}>
            <FaCamera className={style.clarity}/>
            <br />
            Clarity
          </div>
          <div className={style.icon}>
            <FaBatteryFull  className={style.power}/>
            <br />
            Power
          </div>
          <div className={style.icon}>
            <IoDiamond  className={style.sharp}/>
            <br />
            Sharp
          </div>
          <div className={style.icon}>
            <FaCloud  className={style.cloud}/>
            <br />
            Cloud
          </div>
          <div className={style.icon}>
            <IoEarthSharp className={style.global}/>
            <br />
            Global
          </div>
          <div className={style.icon}>
            <RiHardDrive3Fill  className={style.storage}/>
            <br />
            Storage
          </div>
          <div className={style.icon}>
            <IoMdPerson  className={style.safe}/>
            <br />
            Safe
          </div>
          <div className={style.icon}>
            <FaShieldAlt  className={style.stabile}/>
            <br />
            Stabile
          </div>
          <div className={style.icon}>
            <MdWifi  className={style.connected}/>
            <br />
            Connected
          </div>
          <div className={style.icon}>
            <HiMiniPhoto  className={style.hd}/>
            <br />
            HD
          </div>
        </section>
      </main>
    </>
  )
}
