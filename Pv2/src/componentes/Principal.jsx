import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import estilos from "../estilos/Principal.module.css"; 

function Principal() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    "/img/imagen1carrusel.jpg",
    "/img/imagen2carrusel.jpg",
    "/img/imagen3carrusel.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div>
      <div className={estilos.menu}>
        <h2 style={{ color: '#fff', fontFamily: "'Qwitcher Grypen', cursive", marginLeft: '10px' }}>Estebanquito</h2>
        <Link to="/" className={estilos.menuItem}>Home</Link>
        <Link to="/Registro" className={estilos.menuItem}>Registrate</Link>
        <Link to="/Login" className={estilos.menuItem}>Inicia</Link>
      </div>

      <div className={estilos.carousel}>
        {slides.map((src, index) => (
          <div className={estilos.mySlides} style={{ display: index === slideIndex ? "block" : "none" }} key={index}>
            <img src={src} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className={estilos.Container}>
        <h1>
          <strong>¡BIENVENIDOS A</strong> <strong>BANCO ESTEBANQUITO!</strong>
        </h1>
      </div>

      <div className={estilos.info1}>
        <h4>
          <strong>
            En Banco Estebanquito, nos embarcamos en una misión clara: ofrecer una nueva forma de entender la banca. 
            Somos un banco emergente que busca simplificar tus finanzas, brindando servicios claros, accesibles y totalmente
            orientados a tus necesidades. Creemos que todos merecen acceso a servicios financieros de calidad, sin complicaciones.
          </strong>
        </h4>
      </div>

      <div className={estilos.juntos}>
        <div className={estilos.sectionB}>
          <div className={estilos.titulo}>
            <h3>
              <strong>Nuestro compromiso contigo:</strong>
            </h3>
          </div>
          <div className={estilos.info2}>
            <h5>
              <ol>
                <li>
                  Cuentas básicas: Perfectas para quienes buscan 
                  una gestión simple de su dinero.
                </li>
                <li>
                  Préstamos personales: Flexibles y adaptados a tu 
                  realidad.
                </li>
                <li>
                  Asesoría financiera: Estamos para ayudarte a tomar 
                  las mejores decisiones desde el inicio de tu vida financiera
                </li>
              </ol>
            </h5>
          </div>
        </div>

        <div className={estilos.sectionA}>
          <div className={estilos.titulo}>
            <h3>
              <strong>Lo que ofrecemos:</strong>
            </h3>
          </div>
          <div className={estilos.info2}>
            <h5>
              <ol>
                <li>
                  Transparencia: Olvídate de las letras pequeñas y sorpresas.
                  En Banco Estebanquito, todo es claro desde el primer momento.
                </li>
                <li>
                  Accesibilidad: Desde pequeñas soluciones financieras hasta productos
                  más completos, estamos aquí para acompañarte en cada paso.
                </li>
                <li>
                  Innovación: A través de nuestra plataforma digital, puedes gestionar tu 
                  dinero de manera fácil, rápida y segura.
                </li>
              </ol>
            </h5>
          </div>
        </div>
      </div>

      <div className={estilos.titulo}>
        <h2>
          <strong>¿Listo para comenzar?</strong>
        </h2>
      </div>

      <div className={estilos.info1}>
        <h5>
          <strong>
            Regístrate ahora para acceder a todas las oportunidades 
          </strong>
        </h5>
      </div>
    </div>
  );
}

export default Principal;
