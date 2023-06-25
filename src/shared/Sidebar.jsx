import { Box, Typography } from '@mui/material'
import React from 'react'
import { SidebarItems, SidebarItemsTransportist } from './data'
import { SidebarItem } from './SidebarItem'
import {useLocation} from "react-router-dom"
import {useAuthStore} from "../store/auth/useAuthStore"


export const Sidebar = () => {
    const location = useLocation();

    const userType = useAuthStore(state => state.user.userType)

    return (
    <Box sx={{height:"100%", backgroundColor:"#263346", width:"240px"}}>
        <Box sx={{width:"100%", height:"80px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Typography fontSize={22} sx={{color:"white"}} fontWeight={500} fontFamily={"Roboto"}>
                Safe Waste
            </Typography>
        </Box>
        <Box>
            {
                userType === "Transportista" ?
                SidebarItemsTransportist.map((item) => {
                    return(
                        <SidebarItem item={item} selected={item.location === location.pathname}/>
                    )
                })
                
                :
                SidebarItems.map((item) => {
                    return(
                        <SidebarItem item={item} selected={item.location === location.pathname}/>
                    )
                })
            }
        </Box>
    </Box>
    )
}
