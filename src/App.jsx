import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Carreras from './pages/Carreras'
import Dashboard from './pages/Dashboard'
import About from './pages/About'


function App() {

  return (
    <>
    <div className='Container'>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carreras" element={<Carreras />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
