import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import Prog from './pages/Programacion';
import Mult from './pages/Multimedia';
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Radio from './pages/Radio'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import './styles/App.css'

function App() {
  const location = useLocation();
  const isLoginLocation = location.pathname === '/login';

  return (
    <>
    <div className='Container'>
      { !isLoginLocation && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programacion" element={<Prog />} />
        <Route path="/multimedia" element={<Mult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      { !isLoginLocation && (
        <Chatbot />
      )}
      { !isLoginLocation && (
        <Footer/>
      )}
    <ToastContainer/>
    </div>
    </>
  )
}

export default App
