import { Box } from '@mui/material'
import React from 'react'
import {Navbar} from "../shared/Navbar"
import { Sidebar } from '../shared/Sidebar'

export const Layout = ({children}) => {
  return (
    <Box sx={{width:"100%", height:"100vh", display:"flex"}}>
        <Sidebar />
        <Box sx={{width:"calc(100% - 240px)"}}>
          <Navbar/>
          {children}
        </Box>
    </Box>
  )
}
