import React from 'react';
import '../styles/home.css';

export default function Home() {
  return (
    <>
      <header className="home-header">
        <img src="/logo.png" alt="Logo Técnica 7" className="home-logo" />
        <h1>Escuela de Educación Técnica N°7 "José Ingenieros"</h1>
        <p className="home-subtitle">Formando técnicos para el futuro</p>
      </header>

      <section className="home-description">
        <h2>Sobre la escuela</h2>
        <p>
          La Técnica 7 es una institución pública con más de 50 años de trayectoria, dedicada a la formación técnica y humana de sus estudiantes. Ofrecemos educación secundaria técnica con orientación en diversas especialidades, promoviendo valores, innovación y compromiso social.
        </p>
      </section>

      <section className="home-offer">
        <h2>Oferta educativa</h2>
        <ul>
          <li>Técnico en Electrónica</li>
          <li>Técnico en Informática</li>
          <li>Técnico en Electromecánica</li>
          <li>Talleres y cursos extracurriculares</li>
        </ul>
      </section>

      <section className="home-news">
        <h2>Noticias y novedades</h2>
        <article>
          <h3>Inscripción 2025 abierta</h3>
          <p>Ya podés inscribirte para el ciclo lectivo 2025. Consultá requisitos y fechas.</p>
        </article>
        <article>
          <h3>Nuevo laboratorio de informática</h3>
          <p>Inauguramos un espacio equipado con tecnología de última generación para nuestros estudiantes.</p>
        </article>
      </section>

      <section className="home-contact">
        <h2>Contacto</h2>
        <p>Email: info@tecnica7ldz.edu.ar</p>
        <p>Teléfono: (011) 4224-1234</p>
        <p>Dirección: Av. Hipólito Yrigoyen 1234, Lanús, Buenos Aires</p>
      </section>

      <section className="home-location">
        <h2>Ubicación</h2>
        <iframe
          title="Mapa Técnica 7"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.123456789!2d-58.400000!3d-34.700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd123456789%3A0xabcdef123456789!2sEscuela%20T%C3%A9cnica%207!5e0!3m2!1ses!2sar!4v1234567890"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <footer className="home-footer">
        <button className="home-btn">Inscribite</button>
        <button className="home-btn">Contactanos</button>
        <p>&copy; 2025 Escuela Técnica N°7 "José Ingenieros"</p>
      </footer>
    </>
  );
}