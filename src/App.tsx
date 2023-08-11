import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
