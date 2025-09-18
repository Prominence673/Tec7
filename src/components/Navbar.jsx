import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import {
  IoHomeOutline,
} from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { BsJournalText, BsTelephone, BsMic, BsPerson, BsClipboard} from "react-icons/bs";
import { useState, useEffect } from 'react';

function usePrefersColorScheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handler = e => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDarkMode;
}

export default function Navbar() {
    const prefersDark = usePrefersColorScheme();
    const [manualDark, setManualDark] = useState(null); 

    const effectiveDark = manualDark === null ? prefersDark : manualDark;

    useEffect(() => {
    document.documentElement.classList.toggle("dark", effectiveDark);
    document.documentElement.classList.toggle("light", !effectiveDark);
    }, [effectiveDark]);

    const handleToggleDarkMode = () => {
    setManualDark(prev => prev === null ? !prefersDark : !prev);
    };

  return(
    <div className="nav-bg">
      <nav className="nav-glass">
        <div className="nav-logo">
            {/*
          <img src={logoBlack} alt="logo" id="logo-black" />
          <img src={logoLight} alt="logo" id="logo-light" />
            */}
        </div>

        <ul className="nav-links">
          <CustomLink to="/">
            <div className="nav-item">
              <IoHomeOutline />
            </div>
          </CustomLink>
          <CustomLink to="/about">
            <div className="nav-item">
              <BsJournalText />
            </div>
          </CustomLink>
          <CustomLink to="/careers">
            <div className="nav-item">
              <PiStudent />
            </div>
          </CustomLink>
          <CustomLink to="/contact">
            <div className="nav-item">
              <BsTelephone />
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
          <span className='line'></span>
          <CustomLink to="/dashboard">
            <div className="nav-item">
              <BsPerson />
            </div>
          </CustomLink>
        </ul>
        </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const location = useLocation();
  return (
    <li className={location.pathname === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}