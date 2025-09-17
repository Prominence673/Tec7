import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
    <div className='Container'>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
