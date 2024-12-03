import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { IoAmericanFootballSharp } from 'react-icons/io5'
import style from "@/styles/Home.module.scss"

export default function Home() {
  return (
    <>
      <div className={style.abc}>Lorem ipsum dolor sit amet.</div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>

        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<IoAmericanFootballSharp />}
        >
          Upload files
        </Button>
      </Stack>
    </>
  )
}