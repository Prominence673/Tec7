import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>Escuela Técnica N°7</h4>
          <p>“Manuel Sadosky”</p>
          <p>Formando técnicos líderes para el mundo digital y creativo.</p>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li><FaMapMarkerAlt style={{marginRight: "7px"}} /> Av. Ejemplo 1234, Ciudad</li>
            <li><FaPhoneAlt style={{marginRight: "7px"}} /> (011) 1234-5678</li>
            <li><FaEnvelope style={{marginRight: "7px"}} /> info@tecnica7.edu.ar</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Redes</h4>
          <ul className="footer-social">
            <li><a href="#"><FaFacebookF style={{marginRight: "7px"}} /> Facebook</a></li>
            <li><a href="#"><FaInstagram style={{marginRight: "7px"}} /> Instagram</a></li>
            <li><a href="#"><FaTwitter style={{marginRight: "7px"}} /> X</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Escuela Técnica N°7 "Manuel Sadosky" &mdash; Todos los derechos reservados.
      </div>
    </footer>
  );
}