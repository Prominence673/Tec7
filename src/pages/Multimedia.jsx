import LayoutCareers from "../components/LayoutCareers";
import VideoCamera3D from "../components/VideoCamera3D";

export default function Multimedia() {
  return (
    <LayoutCareers
      aside={
        <div className="career-aside-content">
          <VideoCamera3D />
        </div>
      }
    >
      <div className="multimedia-page">
        <h1 className="career-title">Tecnicatura en Multimedia</h1>
        <section className="career-section">
          <p>
            La Tecnicatura en Multimedia te prepara para el mundo digital y
            creativo, combinando diseño, comunicación y tecnología. Nuestro plan
            de estudios está orientado a brindarte las herramientas necesarias
            para la producción audiovisual, el diseño gráfico y la animación
            digital.
          </p>
        </section>
        <section className="career-section">
          <h2 className="career-subtitle">Nuestro Enfoque Práctico</h2>
          <p>
            Aprenderás en talleres equipados con computadoras, cámaras, software
            de edición y herramientas profesionales. La formación integra teoría y
            práctica, permitiéndote desarrollar proyectos reales de comunicación
            visual y multimedia.
          </p>
          <ul className="career-list">
            <li>Diseño Gráfico y Edición de Imagen</li>
            <li>Producción y Edición de Video</li>
            <li>Animación Digital</li>
            <li>Comunicación Visual y Publicidad</li>
          </ul>
          <p>
            En estos espacios, podrás crear piezas gráficas, videos, animaciones y
            campañas digitales, afianzando tus conocimientos desde la práctica.
          </p>
        </section>
        <section className="career-section">
          <h2 className="career-subtitle">Perfil del Técnico en Multimedia</h2>
          <p>
            El egresado será capaz de desempeñarse en estudios de diseño,
            productoras audiovisuales, agencias de publicidad y empresas
            tecnológicas. Dominarás herramientas y software clave de la
            industria, incluyendo:
          </p>
          <ul className="career-list">
            <li>Adobe Photoshop, Illustrator, Premiere, After Effects</li>
            <li>Herramientas de Animación y Modelado 3D</li>
            <li>Software de Edición de Audio y Video</li>
          </ul>
        </section>
        <section className="career-section">
          <h2 className="career-subtitle">¿Qué Podrás Lograr como Técnico?</h2>
          <ul className="career-list">
            <li>Diseño y producción de piezas gráficas y audiovisuales</li>
            <li>Edición y postproducción de video y audio</li>
            <li>Animación digital y modelado 3D</li>
            <li>Gestión de proyectos multimedia y campañas digitales</li>
          </ul>
        </section>
        <section className="career-section">
          <h2 className="career-subtitle">
            Práctica Profesionalizante Externa (Pasantías)
          </h2>
          <p>
            La formación se completa con la Práctica Profesionalizante Externa.
            Esta etapa es fundamental para que puedas aplicar tus conocimientos en
            un entorno laboral real, garantizando tu mejor inserción en el mercado
            de trabajo.
          </p>
        </section>
      </div>
    </LayoutCareers>
  );
}