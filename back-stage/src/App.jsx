import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AuthLayout from './Layouts/authLayout'
import PrivateLayout from './Layouts/privateLayout'
import LoginPage from './pages/auth/Login'
function App() {


  const ForgetPassword = () => <h2>login ForgetPassword</h2>
  const ResetPassword = () => <h2>login ResetPassword</h2>
  const Dashboard = () => <h2>dashboard </h2>
  const Computers = () => <h2>Computers</h2>
  const users = () => <h2>users</h2>
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate replace to="/login" />} />
          <Route path='/' element={<AuthLayout />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgetPassword' element={<ForgetPassword />} />
            <Route path='/resetPassword' element={<ResetPassword />} />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/computers' element={<Computers />} />
            <Route />
          </Route>
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
