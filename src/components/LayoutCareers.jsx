import React from "react";
import "../styles/careers.css";

export default function LayoutCareers({ children }) {
  return (
    <div className="career-layout">
      <section className="career-header">
        {/* Aquí va el título principal */}
      </section>
      <div className="career-content">
        <aside className="career-aside">
          {/* Aquí puedes poner una imagen, ícono o resumen */}
        </aside>
        <main className="career-main">
          {children}
        </main>
      </div>
      <section className="career-extra">
        {/* Aquí puedes poner información adicional, perfil, etc */}
      </section>
    </div>
  );
}