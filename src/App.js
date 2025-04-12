import React, { useState, useEffect } from 'react';
import './App.css';
import fondo from './assets/mierda.jpg';
import logo from './assets/logo.png';
import imagenCarpinteria from './assets/mueble1.jpg';


function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');

    const handleScroll = () => {
      if (scrollContainer.scrollTop > 20) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Agregar efecto de desvanecimiento
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Agregar la clase cuando aparece
          } else {
            entry.target.classList.remove('show'); // Eliminar la clase cuando desaparece
          }
        });
      },
      { threshold: 0.3 }
    );
  
    elements.forEach((el) => observer.observe(el));
  
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
  

  return (
    <div className="app">
      {/* Menú de navegación con efecto de desaparición inmediata */}
      <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicio</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenedor del contenido desplazable */}
      <div className="scroll-container">
        <section className="page page1">
          <div className="overlay"></div>
          <div className="logo-container">
          <div className="logo-content">
            <img src={logo} alt="Logo" className="logo" />
            <h2 className="slogan">Muebles que transforman tu hogar</h2>
          </div>
        </div>
        </section>

        {/* Segunda página con texto alineado a la derecha y efecto de fade-in */}
        <section className="page page2">
          <div className="image-container fade-in">
            <img src={imagenCarpinteria} alt="Carpintería Hugo" className="left-image" />
          </div>
          <div className="text-container fade-in">
            <h1>¿Quienes Somos?</h1>
            <p>
            En CAD, nos especializamos en la fabricación de muebles de melamina a medida y la creación de ambientes funcionales con drywall. Cada pieza que diseñamos y cada pared que levantamos tienen un propósito: mejorar tu espacio, hacerlo más cómodo y reflejar tu estilo.

Trabajamos con precisión, detalle y calidad para que tu visión se haga realidad. ¿Listo para transformar tu ambiente?
            </p>
          </div>
        </section>


        <section className="page page3">
          <div className="text-container fade-in">
            <h1>Melamina</h1>
            <p>
            En CAD, fabricamos muebles personalizados según tu necesidad y espacio, ofreciendo soluciones funcionales y estéticas para cualquier ambiente:

Clósets, reposteros, estantes, escritorios para oficinas, centros de entretenimiento, y mucho más.

Cada mueble está hecho con materiales de alta calidad, garantizando resistencia y un acabado impecable. Transforma tu hogar u oficina con muebles hechos a tu medida.
</p>


          </div>
          <div className="image-container fade-in">
            <img src={imagenCarpinteria} alt="Melamina" className="right-image" />
          </div>
        </section>

        <section className="page page2">
          <div className="image-container fade-in">
            <img src={imagenCarpinteria} alt="Carpintería Hugo" className="left-image" />
          </div>
          <div className="text-container fade-in">
            <h1>Drywall</h1>
            <p>
            En CAD, creamos y transformamos espacios con drywall, ofreciendo soluciones rápidas, funcionales y estéticas para hogares y negocios.

Muros, ambientes, cielos rasos, casas para vivienda, decoraciones, estanterías, revestimientos, y más.

Trabajamos con materiales de primera, garantizando resistencia, elegancia y acabados de calidad. Si buscas un espacio moderno y bien distribuido, nosotros lo hacemos posible.
            </p>
          </div>
        </section>

        <section className="page page3">
          <div className="text-container fade-in">
            <h1>Melamina</h1>
            <p>
              En CAD, nos especializamos en la creación de closets y roperos con diseños personalizados...
            </p>
          </div>
          <div className="image-container fade-in">
            <img src={imagenCarpinteria} alt="Melamina" className="right-image" />
          </div>
        </section>

      </div>

      {/* Botón flotante de WhatsApp */}
      <a href="https://wa.me/1234567890" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default App;
