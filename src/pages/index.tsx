import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { IoAmericanFootballSharp } from 'react-icons/io5'

export default function Home() {
  return (
    <>
      <IoAmericanFootballSharp />

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </>
  )
}
