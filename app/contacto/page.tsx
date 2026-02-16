'use client'
import styles from './contacto.module.css'

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contacto">
      <div className={styles.container}>

        {/* IZQUIERDA */}
        <div className={styles.info}>

          <h2 className={styles.title}>
            Hablemos de tu próximo proyecto
          </h2>

          <p className={styles.subtitle}>
            Estoy disponible para colaborar, desarrollar o llevar tu idea al siguiente nivel.
          </p>

          <div className={styles.cards}>

            <a href="mailto:coviedop4@gmail.com" target="_blank" className={styles.card}>
              <span>EMAIL</span>
              <h3>coviedop4@gmail.com</h3>
            </a>

            <a href="https://wa.me/573148832050" target="_blank" className={styles.card}>
              <span>WHATSAPP</span>
              <h3>314 883 2050</h3>
            </a>

            <div className={styles.card}>
              <span>UBICACIÓN</span>
              <h3>Bello, Colombia</h3>
            </div>

          </div>
        </div>

        {/* DERECHA */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://maps.google.com/maps?q=Bello,Colombia&t=&z=12&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  )
}
