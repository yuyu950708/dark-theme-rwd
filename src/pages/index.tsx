import * as React from 'react'
import Button from '@mui/material/Button'
import { IoAmericanFootballSharp } from 'react-icons/io5'
import style from "@/styles/Home.module.scss"

export default function Home() {
  return (
    <section className={style.sec}>
      <h2 className={style.title}>Lorem ipsum dolor sit amet.</h2>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<IoAmericanFootballSharp />}
        >
          Get Start
        </Button>
    </section>
  )
}