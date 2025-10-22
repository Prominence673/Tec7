import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import handleChecksession from '@/components/handleChecksession'
import '../styles/Navbar.css';
import { RiComputerLine } from "react-icons/ri";
import { BsCameraReels } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { BsJournalText, BsTelephone, BsMic, BsPerson, BsClipboard, BsGear } from "react-icons/bs";
import { LuTableOfContents } from "react-icons/lu";
import handleCloseSession from '@/components/handleCloseSession.js'

export default function Navbar() {
  const [isSubnavOpen, setIsSubnavOpen] = useState(false);
  const [onSession, setOnSession] = useState(false);

  useEffect(() => {
    const handleCheck = async () => {
      const response = await handleChecksession();
      setOnSession(response.loggedIn);
    };
    handleCheck();
  }, []);

  const toggleSubnav = () => setIsSubnavOpen(o => !o);

  return (
    <div className="nav-bg">
      <nav className="nav-glass">
      <div className="nav-logo">
        </div> 
        <ul className="nav-links"> 
          <CustomLink to="/">
            <div className="nav-item">
              <IoHomeOutline />
            </div>
          </CustomLink> 
          <CustomLink to="/programacion">
            <div className="nav-item">
              <RiComputerLine />
            </div>
          </CustomLink> 
          <CustomLink to="/multimedia">
            <div className="nav-item">
              <BsCameraReels  />
            </div>
          </CustomLink> 
          <CustomLink to="/about">
            <div className="nav-item">
              <BsJournalText />
            </div>
          </CustomLink> 
 
          <CustomLink to="/radio">
            <div className="nav-item">
              <BsMic />
            </div>
          </CustomLink> 
          <CustomLink to="/projects">
            <div className="nav-item">
              <BsClipboard />
            </div>
          </CustomLink> 
          </ul>
        <ul className="nav-links-right">
          <span className="line"></span>
          <button onClick={toggleSubnav} className="nav-toggle">
            <div className="nav-item"><LuTableOfContents /></div>
          </button>
        </ul>
      </nav>
        <nav
          id="sub-nav"
          className={`sub-navglass${!isSubnavOpen ? "-disabled" : ""}`}
          >
          <ul className="sub-nav-links">
            {!onSession && (
              <CustomLink to="/login">
                <div className="sub-nav-item">
                  <p>Login</p><BsPerson />
                </div>
              </CustomLink>
            )}
            {onSession && (
              <CustomLink to="/dashboard">
                <div className="sub-nav-item">
                  <p>Panel</p><BsGear />
                </div>
              </CustomLink>
            )}
            {onSession && (
              <button onClick={handleCloseSession}>
                <div className="sub-nav-item">
                  <p>Cerrar Sesión</p><BsPerson />
                </div>
              </button>
            )}
          </ul>
        </nav>
    </div>
  );
}


function CustomLink({ to, children, ...props }) {
  const location = useLocation();
  return (
    <li className={location.pathname === to ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}
