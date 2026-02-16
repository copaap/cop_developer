'use client';

import { link } from "fs";
import "./home.css";
import { useState, useEffect } from 'react';
import Link from "next/link";

const slides = [
  { title: 'Proyecto 1',  clase: 'cardtortas', link: 'https://laabuelaisabel.com/' },
  { title: 'Proyecto 2', clase: 'cardbebis', link: 'https://bebisoasis.com/' },
  { title: 'Proyecto 3', clase: 'cardambientador', link: 'https://atmosfe.com.co/' },
  { title: 'Proyecto 4', clase: 'cardapartamentos', link: 'https://www.rua19apartamentos.com/' },
];



export default function Home() {

 const [currentIndex, setCurrentIndex] = useState(0);
const  [visibleSlides, setVisiblesSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisiblesSlides(1);
      }else if (window.innerWidth < 1024) {
        setVisiblesSlides(2);
      }else{
        setVisiblesSlides(3);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize)

  }, []);


  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, slides.length - visibleSlides)
    );
  };

  return (
    <>
      <section className="banner">
        <div className="info_principal">
          <h1 className="puesto">Desarrollador web</h1>
          <p className="descripcion">
            ¡Hola! Soy Cristian, un desarrollador web apasionado por crear experiencias digitales atractivas
            y funcionales. Me especializo en construir sitios y aplicaciones modernos usando React, Next.js y CSS,
            siempre enfocado en rendimiento, usabilidad y diseño creativo. Explora mi portafolio para ver mis proyectos
            y cómo puedo dar vida a tus ideas.
          </p>
         
          <Link className="button_ver" href="/#proyectos">Ver más</Link>
        </div>
        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source src="/video_desarrollador.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </section>

      <div id="proyectos" className="carousel-wrapper">
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {slides.map((slide, i) => (
            <a href={slide.link} target="_blank" rel="noopener noreferrer" key={i} className={`card ${slide.clase}`}>
              <div className="card-content">
                <h3>{slide.title}</h3>
              </div>
            </a>
          ))}
          
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    <span className="nota-proyectos">
  Desarrollo web realizado por mí para distintas marcas en mi anterior empresa. 
  Cada proyecto contó con una propuesta creativa específica y fui el encargado de su implementación técnica.
</span>
    </>
  );
}
