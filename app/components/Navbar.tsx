'use client'
import { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link';

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Botón minimal */}
      <button 
        className={`${styles.menuButton} ${open ? styles.active : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
      </button>

      {/* Overlay oscuro */}
      <div 
        className={`${styles.overlay} ${open ? styles.show : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Panel lateral */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <nav className={styles.menu}>
            <a href="/" onClick={() => setOpen(false)}>Inicio</a>
            <Link href="/#proyectos" onClick={() => setOpen(false)}>Proyectos</Link>
            <Link href="/sobre-mi" onClick={()=> setOpen(false)}>Sobre mí</Link>
            <Link href="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
        </nav>
      </aside>
    </>
  )
}
