import { pricing } from "@/Data/pricing"
import { premium } from "@/Data/premium"
import style from "@/styles/Main4.module.scss"
import { FaDownload } from "react-icons/fa";

export default function Main4() {
  return (
    <>
      <main className={style.main}>
        <section className={style.title}>
          <b className={style.bigTitle}>Pricing</b>
          <p className={style.text}>Choose a pricing plan that fits your needs.</p>
        </section>
        <section className={style.sec}>
            {pricing.map((v,i) =>(
            <div key={i} className={style.div}>
                <div className={style.title}><b>{v.title}</b></div>
                <div className={style.text}><b>{v.photo} </b> Photos</div>
                <div className={style.text}><b>{v.features} </b> Features</div>
                <div className={style.text}><b>{v.ads} </b> Ads</div>
                <div className={style.text}><b>{v.support} </b> Support</div>
                <div className={style.price}><b>${v.price}   </b></div>
                <div className={style.text}><button className={style.btn}><FaDownload />Download</button></div>
            </div>
            ))}
            {premium.map((value,index) =>(
            <div key={index} className={style.div}>
                <div className={style.title2}><b>{value.title2}</b></div>
                <div className={style.text}><b>{value.photo2} </b> Photos</div>
                <div className={style.text}><b>{value.features2} </b> Features</div>
                <div className={style.text}><b>{value.ads2} </b> Ads</div>
                <div className={style.text}><b>{value.support2} </b> Support</div>
                <div className={style.price}><b>${value.price2}</b></div>
                <div className={style.text}><button className={style.btn}><FaDownload />Download</button></div>
            </div>
            ))}
        </section>
      </main>
    </>
  )
}
