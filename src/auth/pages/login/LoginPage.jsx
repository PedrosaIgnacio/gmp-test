import React from 'react'
import {Box, Button, Grid, TextField, Typography, Divider, Link, SvgIcon} from "@mui/material"
import { useNavigate } from 'react-router-dom'
import SquarespaceLogo from "../../../assets/squarespace.png"
import {FcGoogle} from "react-icons/fc"
import {FaApple} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"

export const LoginPage = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{width:"100%", height:"100vh", backgroundColor:"#f5f5f5"}}>
        {/* <Box sx={{borderRadius:2,backgroundColor:"#f5f5f5", width:"30%", height:"65%", boxShadow:5, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:4}}>
            <Box sx={{width:"60%"}}>
                <Typography sx={{fontFamily:"Roboto", fontWeight:600, fontSize:"27px",}}>Iniciar Sesión</Typography>
            </Box>
            <Box sx={{width:"60%"}}>
                <TextField label="Usuario" variant='standard' fullWidth/>
            </Box>
            <Box sx={{width:"60%"}}>
                <TextField label='Contraseña' variant='standard' fullWidth/>
            </Box>
            <Box sx={{width:"60%"}}>
                <Button sx={{backgroundColor:"black", "&:hover":{backgroundColor:"black"}}} variant='contained' fullWidth onClick={() => navigate("/home")}>Ingresar</Button>
            </Box>
        </Box> */}
        <Box sx={{p:7, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <img src={SquarespaceLogo} style={{width:62, height:42}}/>
            <Typography fontWeight={500} fontFamily={"Roboto"}>CREA TU CUENTA</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column",justifyContent:"center", p:4,height:"calc(90vh - 90px)"}}>
            <Typography textAlign={"center"} fontWeight={500} fontFamily={"Roboto"} fontSize={27}>Ingresa a Squarespace</Typography>
            <Box sx={{display:"flex", justifyContent:"center", my:4}} >
                <Box width={"500px"} height={"300px"} p={2} sx={{display:"flex", flexDirection:"column", justifyContent:"center", gap:4}} >
                    <TextField sx={{py:1}} label="Usuario" variant='standard' fullWidth InputLabelProps={{sx:{fontSize:18}}}/>
                    <TextField sx={{py:1}} label="Contraseña" variant='standard' fullWidth InputLabelProps={{sx:{fontSize:18}}}/>
                    <Button fullWidth variant="text" sx={{p:1.5, borderRadius:0, backgroundColor:"black", color:"white", "&:hover":{backgroundColor:"black"}}}>INGRESAR</Button>
                </Box>
                <Divider orientation='vertical' flexItem sx={{my:2, mx:4}}>
                    <Typography fontWeight={400} fontFamily={"Roboto"}>
                    OR
                    </Typography>
                </Divider>
                <Box width={"500px"} height={"300px"} p={2} sx={{display:"flex", flexDirection:"column", justifyContent:"center", gap:4}}>
                    <Button fullWidth color="inherit" startIcon={<FcGoogle />} variant="outlined" sx={{py:2, px:4,  borderRadius:0, textTransform:"none", display:"flex", justifyContent:"start",gap:2}}>
                        <Typography sx={{marginLeft:"auto", marginRight:"auto", fontWeight:500}}>
                            Continuar con Google
                        </Typography>
                        </Button>
                    <Button fullWidth color="inherit" startIcon={<FaApple />} variant="outlined" sx={{py:2, px:4,  borderRadius:0, textTransform:"none", display:"flex", justifyContent:"start", gap:2}}>
                        <Typography sx={{marginLeft:"auto", marginRight:"auto", fontWeight:500}}>
                            Continuar con Apple
                        </Typography>
                    </Button>
                    <Button fullWidth color="inherit" startIcon={<BsFacebook color='#139EF8'/>} variant="outlined" sx={{py:2, px:4, borderRadius:0, textTransform:"none", display:"flex", justifyContent:"start", alignItems:"center", gap:2}}>
                        <Typography sx={{marginLeft:"auto", marginRight:"auto", fontWeight:500}}>
                            Continuar con Facebook
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Link href='#' textAlign={"center"} fontWeight={500} fontFamily={"Roboto"} fontSize={15} textTransform={"uppercase"} sx={{my:3}}>No puedes iniciar sesión?</Link>
            <Box sx={{my:3}}>
                <Typography fontSize={12} fontWeight={500} fontFamily={"Roboto"} textAlign={"center"} sx={{color:"#b4b4b4"}}>Secure login with reCAPTCHA subject to Google</Typography>
                <Typography fontSize={12} fontWeight={500} fontFamily={"Roboto"} textAlign={"center"} sx={{textDecoration:"underline", my:1, color:"#b4b4b4"}}>Terms & Privacy</Typography>
            </Box>
        </Box>
    </Box>
  )
}
