import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Radio from './pages/Radio'
import './styles/App.css'

function App() {

  return (
    <>
    <div className='Container'>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/radio" element={<Radio />} />
      </Routes>
      <Chatbot />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
