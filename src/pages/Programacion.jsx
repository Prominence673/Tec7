import LayoutCareers from "../components/LayoutCareers";
import Computer3D from "../components/Computer3D";
import "../styles/programacion.css";

export default function Programacion() {
  return (
    <LayoutCareers
      aside={
        <div className="career-aside-content">
          <Computer3D />
        </div>
      }
    >
      <div className="programacion-page">
        <h1 className="career-title">Tecnicatura en Programación</h1>
        <section className="career-section">
          <p>
            La Programación es una de las especialidades técnicas con mayor demanda y proyección de futuro. Nuestro plan de estudios se enfoca en brindarte las herramientas esenciales para la creación de software, desarrollo de hardware y diseño web.
          </p>
        </section>
        <section className="career-section">
          <h2 className="career-subtitle">Nuestro Enfoque Práctico</h2>
          <p>
            Integramos la teoría con la práctica intensiva a través de talleres especializados. Contamos con laboratorios equipados con ordenadores, aplicaciones y el material tecnológico necesario (editores de código, programas de desarrollo de aplicaciones, etc.) que garantizan un aprendizaje aplicado.
          </p>
          <ul className="career-list">
            <li>Programación (Estructurada y Orientada a Objetos)</li>
            <li>Diseño Web Estático y Dinámico</li>
            <li>Procesos Industriales</li>
            <li>Seguridad Informática</li>
          </ul>
          <p>
            En estos espacios, podrás llevar a cabo proyectos reales de creación de aplicaciones y desarrollo de páginas web, afianzando tus conocimientos desde la práctica.
          </p>
        </section>
        <section className="career-section">
          <h2 className="career-subtitle">Perfil del Técnico en Programación</h2>
          <p>
            El egresado estará capacitado para ser un profesional versátil, apto para la construcción de diferentes tipos de software y plataformas. Adquirirás dominio en tecnologías y lenguajes clave de la industria, incluyendo:
          </p>
          <ul className="career-list">
            <li>Lenguajes y Bases de Datos: Visual Basic.NET, SQL, C#, PHP</li>
            <li>Desarrollo Web: HTML, CSS, JavaScript</li>
            <li>Sistemas Integrados: Arduino</li>
          </ul>
        </section>
        <section className="career-section">
          <h2 className="career-subtitle">¿Qué Podrás Lograr como Técnico?</h2>
          <ul className="career-list">
            <li>Creación de Soluciones Empresariales: Diseñar y desarrollar Sistemas de Gestión y aplicaciones de uso general.</li>
            <li>Desarrollo de Software: Producir programas, módulos o componentes de sistemas de computación, incluso integrándolos en plataformas ya existentes.</li>
            <li>Análisis y Ejecución: Interpretar especificaciones de diseño o requisitos, verificando y depurando (testeando) el producto desarrollado.</li>
            <li>Gestión de Infraestructura: Explotar las funcionalidades de los sistemas de información, hardware, software y redes.</li>
          </ul>
        </section>
        <section className="career-section">
          <h2 className="career-subtitle">Práctica Profesionalizante Externa (Pasantías)</h2>
          <p>
            La formación se completa con la Práctica Profesionalizante Externa. Esta etapa es fundamental para que puedas aplicar tus conocimientos en un entorno laboral real, garantizando tu mejor inserción en el mercado de trabajo.
          </p>
        </section>
      </div>
    </LayoutCareers>
  );
}