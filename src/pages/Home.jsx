import React from 'react';
import Computer3D from '../components/Computer3D';
import VideoCamera3D from '../components/VideoCamera3D';
import '../styles/home.css';

export default function Home() {
  return (
    <main className="home-main">
      {/* Hero fuera del contenedor limitado */}
      <section className="hero-section">
        <img src="public/FrenteTec7.png" alt="Fachada de la escuela" className="hero-img" />
        <div className="hero-overlay">
          <h1>Escuela Técnica N°7 "José Ingenieros"</h1>
          <p className="home-slogan">
            Innovación, conocimiento y futuro: formamos técnicos líderes para el mundo digital y creativo.
          </p>
        </div>
      </section>

      <section className="home-news-banner">
        <img src="/images/evento.jpg" alt="Evento destacado" className="news-img" />
        <div>
          <h2>📰 Novedades</h2>
          <ul>
            <li>Inscripción 2025 abierta: ¡Sumate a la próxima generación de técnicos!</li>
            <li>Nuevo laboratorio de informática y multimedia inaugurado.</li>
            <li>Charlas con empresas tecnológicas y creativas durante septiembre.</li>
          </ul>
        </div>
      </section>

      <section className="home-tecnicaturas">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <h2 className="tecnicaturas-title">Nuestras Tecnicaturas</h2>
        <div className="tecnicaturas-area">
          <div className="computer3d-container">
            <Computer3D />
          </div>
          <div className="tecnicaturas-list">
            <div className="tecnicatura">
              <h3>Técnico en Programación</h3>
              <p>
                Formación en desarrollo de software, aplicaciones web y móviles, lógica y pensamiento computacional. Prácticas con lenguajes modernos y proyectos reales.
              </p>
            </div>
            <div className="tecnicatura">
              <h3>Técnico en Multimedio</h3>
              <p>
                Diseño gráfico, edición de video, animación digital y producción multimedia. Creatividad aplicada a la comunicación visual y digital.
              </p>
            </div>
          </div>
          <div className="videocamera3d-container">
            <VideoCamera3D />
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Escuela Técnica N°7</h4>
            <p>“José Ingenieros”</p>
            <p>Formando técnicos líderes para el mundo digital y creativo.</p>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>📍 Av. Ejemplo 1234, Ciudad</li>
              <li>📞 (011) 1234-5678</li>
              <li>✉️ info@tecnica7.edu.ar</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Redes</h4>
            <ul className="footer-social">
              <li><a href="#"><span aria-label="Facebook">🌐</span> Facebook</a></li>
              <li><a href="#"><span aria-label="Instagram">📸</span> Instagram</a></li>
              <li><a href="#"><span aria-label="X">🐦</span> X</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Escuela Técnica N°7 "José Ingenieros" &mdash; Todos los derechos reservados.
        </div>
      </footer>
    </main> 
  )
}