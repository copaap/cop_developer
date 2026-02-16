import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Columna 1 */}
        <div className={styles.brand}>
          <h2>Cristian</h2>
          <p>Desarrollador Web</p>
          <span>
            Construyendo experiencias digitales modernas y funcionales.
          </span>
        </div>

        {/* Columna 2 */}
        <div className={styles.links}>
          <h4>Navegación</h4>
          <Link href="/">Inicio</Link>
          <a href="#proyectos">Proyectos</a>
          <Link href="/sobre-mi">Sobre mí</Link>
          <a href="#contacto">Contacto</a>
        </div>

        {/* Columna 3 */}
        <div className={styles.contact}>
          <h4>Contacto</h4>
          <a href="mailto:coviedop4@gmail.com">coviedop4@gmail.com</a>
          <a href="https://wa.me/573148832050" target="_blank">
            WhatsApp
          </a>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Cristian — Todos los derechos reservados.
      </div>
    </footer>
  );
}
