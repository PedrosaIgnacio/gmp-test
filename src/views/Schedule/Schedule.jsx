import { Box } from '@mui/material'
import React from 'react'
import {MyCalendar} from "./components/Calendar/MyCalendar"

export const Schedule = () => {
  return (
    <Box sx={{p:2}}>
      <MyCalendar />
    </Box>
  )
}
