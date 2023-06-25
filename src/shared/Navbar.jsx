import { Avatar, Box, IconButton, Typography } from '@mui/material'
import React, {useState} from 'react'
import { useAuthStore } from '../store/auth/useAuthStore'
import SofiAvatar from "../assets/sofi.jpeg"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const Navbar = () => {
    const auth = useAuthStore(state => state);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleLoginClick = () => {
        auth.logout()
        handleClose();
    }

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Box sx={{backgroundColor:"#263346", display:"flex", justifyContent:"end", height:"80px", px:5, alignItems:"center"}}>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:1}}>
            <Avatar sx={{width:"42px", height:"42px"}} src={auth.user.userFirstName === "Sofia" ? SofiAvatar : null}/>
            <Box>
                <Box sx={{display:"flex", alignItems:"center", gap:1}}>
                    <Typography fontSize={16} sx={{color:"white"}} fontWeight={500} fontFamily={"Roboto"}>
                        {auth.user.userFirstName}
                    </Typography>
                    <IconButton sx={{p:0}} onClick={handleClick}>
                        <KeyboardArrowDownIcon sx={{color:"white"}}/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLoginClick}>Cerrar Sesión</MenuItem>
                    </Menu>
                </Box>
                <Typography fontSize={14} sx={{color:"white"}} fontWeight={400} fontFamily={"Roboto"}>
                    {auth.user.userType}
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}
