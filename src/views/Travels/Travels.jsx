import { Box } from '@mui/material'
import React from 'react'
import { TravelsTable } from './components/TravelsTable/TravelsTable'

export const Travels = () => {
  return (
    <Box sx={{p:2}}>
      <TravelsTable />
    </Box>
  )
}
