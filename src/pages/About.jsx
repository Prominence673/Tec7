import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-section about-quienes">
        <h2>¿Quiénes Somos?</h2>
        <p>
          La E.E.S.T. N° 7 (Escuela de Educación Secundaria Técnica N° 7) tiene el
          propósito fundamental de atraer a jóvenes egresados de la educación
          primaria y formarlos con conocimientos técnicos y habilidades prácticas
          útiles para su futuro, todo esto a través de un sistema de educación
          que combina la teoría con talleres especializados.
        </p>
      </section>
      <section className="about-section about-bloques">
        <div className="about-bloque">
          <h3>Nuestra Oferta Educativa</h3>
          <strong>Ciclo Básico (1.er a 3.er Año)</strong>
          <p>
            En este ciclo, los estudiantes cursan las materias comunes del plan
            de estudios junto a talleres fundamentales que sientan las bases de
            la educación técnica. Estos talleres son cruciales para el desarrollo
            de habilidades manuales y la comprensión de los principios
            tecnológicos.
          </p>
          <strong>Ciclo Superior (4.to a 6.to Año)</strong>
          <p>
            Aquí, los alumnos tienen la oportunidad de elegir una especialización
            (Tecnicatura). Actualmente, ofrecemos formación en áreas de alta
            demanda como Multimedia y Programación. Este ciclo incluye talleres
            específicos de la tecnicatura elegida, proporcionando una formación
            profunda y directamente aplicable al campo laboral.
          </p>
        </div>
        <div className="about-bloque">
          <h3>Preparación para el Futuro Laboral</h3>
          <strong>Prácticas Profesionalizantes (7.mo Año)</strong>
          <p>
            Durante el último año (7.mo), los estudiantes llevan a cabo las
            Prácticas Profesionalizantes (pasantías). Esta etapa es vital, ya que
            les permite aplicar los conocimientos adquiridos en un entorno real,
            desarrollar sus primeras fuentes de trabajo y potenciar
            significativamente sus oportunidades de inserción laboral a futuro.
          </p>
        </div>
      </section>

      {/* Línea divisora */}
      <div className="about-divider"></div>

      <section className="about-section about-historia">
        <h2>Un Poco Más de Historia</h2>
        <div className="about-historia-bloques">
          <div className="about-historia-bloque">
            <h3>Los Orígenes como Escuela Femenina</h3>
            <p>
              La institución fue fundada originalmente el 24 de diciembre de 1911
              bajo el nombre de Escuela Secundaria de Mujeres Julia Moreno de
              Moreno. Su propósito inicial era preparar a las jóvenes para la
              vida doméstica y social a través de talleres de oficios.
              Inicialmente, se ofrecían talleres esenciales como Cocina,
              Planchado y Corte y Confección. Con el tiempo, la oferta se amplió
              para incluir otras habilidades como Lencería, Florería, Encajes,
              Arte y Música, enriqueciendo así la formación de sus estudiantes.
            </p>
          </div>
          <div className="about-historia-bloque">
            <h3>Crecimiento e Institucionalización</h3>
            <p>
              El 20 de julio de 1924, por iniciativa de la entonces presidenta,
              la señora Rosa V., la escuela dio un paso institucional importante
              al incorporarse al Consejo Nacional de Mujeres de la Confederación
              Nacional de Beneficencia.
            </p>
            <p>
              La formación continuó evolucionando: en 1937 se sumaron disciplinas
              orientadas a la administración y la cultura, tales como
              Taquigrafía, Mecanografía y Lectura Selecta y Artística.
            </p>
          </div>
        </div>
        <div className="about-historia-bloques">
          <div className="about-historia-bloque">
            <h3>La Transformación a Escuela Técnica</h3>
            <p>
              Un cambio trascendental ocurrió en 1960, cuando se modificaron los
              planes de estudio y la institución se transformó, pasando a ser la
              E.N.E.T. N° 1 (Escuela Nacional de Educación Técnica N° 1).
            </p>
            <p>
              Cinco años después, en 1965, la escuela adquirió el que es su
              actual emplazamiento: una vieja casona ubicada en la calle Acevedo
              1864, en la localidad de Banfield.
            </p>
          </div>
          <div className="about-historia-bloque">
            <h3>La Construcción del Edificio Actual</h3>
            <p>
              Finalmente, el 21 de marzo de 1980, el Ministerio de Educación de
              la Nación se hizo cargo de la planificación y posterior construcción
              de un edificio moderno. Tras un extenso período de obras que se
              extendió por 20 años, la construcción del nuevo y definitivo edificio
              escolar fue finalizada. De esta manera, se consolidó la institución
              como la actual E.E.S.T. N° 7 de Lomas de Zamora, lista para formar a
              las nuevas generaciones de técnicos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}