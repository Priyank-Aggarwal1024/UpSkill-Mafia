import React from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Curriculum from './components/Curriculum'
import Refund from './components/Refund'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview' element={<><Navbar /><Overview /></>} />
        <Route path='/curriculum' element={<><Navbar /><Curriculum /></>} />
        <Route path='/refund' element={<><Navbar /><Refund /></>} />
        <Route path='/testimonials' element={<><Navbar /><Testimonials /></>} />
      </Routes>
    </>
  )
}

export default App
