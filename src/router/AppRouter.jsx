import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom"
import { LoginPage } from '../auth/pages/login/LoginPage'
import { Home } from '../views/Home/Home'
import { Schedule } from '../views/Schedule/Schedule'
import { Travels } from '../views/Travels/Travels'
import { useAuthStore } from '../store/auth/useAuthStore'
import { Layout } from '../layout/Layout'

export const AppRouter = () => {
  const auth = useAuthStore(state => state.isLoggedIn);
  return (
    <Routes>
      {
        auth ? 
            <>
              <Route path="/home" element={
                <Layout>
                  <Home/>
                </Layout>
              }/>
              <Route path="/schedule" element={
                <Layout>
                  <Schedule/>
                </Layout>
              }/>
              <Route path="/travels" element={
                <Layout>
                  <Travels/>
                </Layout>
              }/>

              <Route path="/*" element={
                <Navigate to="/home"/>
              }/>

            </>
        :
        <>
          <Route path="/auth/login" element={<LoginPage/>}/>
          <Route path="/*" element={<Navigate to="/auth/login" />}/>
        </>
      }
    </Routes>
  )
}
