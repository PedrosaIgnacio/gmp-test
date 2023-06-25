import { Box, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SidebarItem = ({item, selected}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(item.location)
    }

    return (
    <Box key={item.id} sx={{borderRadius:2, mx:2, height:"60px" ,backgroundColor:`${selected ? "rgb(27, 35, 45)" : "inherit"}`}}>
        <ListItem disableGutters disablePadding onClick={handleClick} sx={{height:"100%"}}>
            <ListItemButton sx={{height:"100%", py:0}}>
                <ListItemIcon sx={{color:"white"}}>{item.icon}</ListItemIcon>
            <ListItemText sx={{color:"white"}}>{item.name}</ListItemText>
            </ListItemButton>
        </ListItem>
    </Box>
    )
}
