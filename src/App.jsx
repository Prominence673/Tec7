import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Dashboard from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Radio from './pages/Radio'

function App() {

  return (
    <>
    <div className='Container'>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/radio" element={<Radio />} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
