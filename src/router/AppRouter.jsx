import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom"
import { LoginPage } from '../auth/pages/login/LoginPage'
import { Home } from '../views/Home/Home'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/login" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/*" element={<Navigate to="/auth/login" />}/>
    </Routes>
  )
}
