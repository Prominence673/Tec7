export default function Footer() {
    return (
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
              <li>📍 Manuel Acevedo 1864, Banfield</li>
              <li>📞 (011) 1234-5678</li>
              <li>✉️ eet7lz@yahoo.com.ar</li>
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
    );
}