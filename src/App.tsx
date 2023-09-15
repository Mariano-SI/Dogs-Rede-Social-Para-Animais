import React from 'react'
import "./App.css"
import Home from './Features/Home/Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Features/Login/Pages/Login/Login'
import Header from './Common/Components/Header/Header'
import Footer from './Common/Components/Footer/Footer'
import { UserStorage } from './UserContext'
import User from './Features/User/Pages/User'
import ProtectedRoute from './Helper/ProtectedRoute'
import Photo from './Features/Photo/Pages/Photo'


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login/*' element={<Login/>}/>
          <Route path='conta/*' element={<ProtectedRoute> <User/> </ProtectedRoute>}/>
          <Route path='foto/:id' element={<Photo/>}/>
        </Routes>
        <Footer/>
      </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
