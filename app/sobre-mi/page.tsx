import styles from "./sobremi.module.css";

export default function SobreMi() {
  return (
    <main className={styles.container}>

      {/* Header */}
      <section className={styles.header}>
        <h1>Sobre mí</h1>
        <p className={styles.subtitle}>
          Desarrollador Web — Colombia
        </p>
      </section>

      {/* Resumen */}
      <section className={styles.summary}>
        <p>
          Desarrollador Web con formación técnica en Análisis y Programación,
          con experiencia en desarrollo de sitios funcionales orientados a la
          experiencia del usuario. Especializado en WordPress, WooCommerce,
          HTML, CSS, JavaScript y conocimientos en React, Next.js.
          Experiencia en e-commerce, landing pages e integración de SEO,
          Google Tag Manager, Google Ads y Google Analytics.
        </p>
      </section>

      {/* Grid principal */}
      <section className={styles.grid}>

        {/* Experiencia */}
        <div className={styles.column}>
          <h2>Experiencia</h2>

          <div className={styles.card}>
            <h3>Desarrollador Web</h3>
            <span className={styles.meta}>
              Agencia Digital · 2024 – 2026
            </span>
            <ul>
              <li>Desarrollo WordPress y WooCommerce</li>
              <li>Landing pages en HTML y CSS</li>
              <li>Integración Google Tag Manager y Analytics</li>
              <li>Optimización SEO</li>
            </ul>
          </div>

        </div>

        {/* Habilidades */}
        <div className={styles.column}>
          <h2>Habilidades</h2>

          <div className={styles.skills}>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>WordPress</span>
            <span>WooCommerce</span>
            <span>SEO</span>
            <span>Google Analytics</span>
            <span>Google Tag Manager</span>
          </div>


          <a 
            href="/CRISTIAN_OVIEDO_HV.pdf" 
            download 
            className={styles.cvButton}
          >
            Descargar CV
          </a>


        </div>

      </section>

    </main>
  );
}
