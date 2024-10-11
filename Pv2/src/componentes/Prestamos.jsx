import React, { useState } from 'react';
import Menu from './Menu';
import estilos from '../estilos/Prestamos.module.css';
import { useNavigate } from 'react-router-dom';

function Prestamos() {
  const [valorPedir, setValorPedir] = useState('');
  const [plazo, setPlazo] = useState('');
  
  const navigate = useNavigate(); 

  const manejarEnvio = (e) => {
    e.preventDefault();


    console.log({ valorPedir, plazo });

    alert('Préstamo solicitado exitosamente');

    
    navigate('/plataforma'); 
  };

  return (
    <div>

      <Menu />


      <div className={estilos.contenedorPrestamos}>
        <h2 className={estilos.titulo}>Préstamos</h2>
        
        <form className={estilos.formulario} onSubmit={manejarEnvio}>

          <div className={estilos.grupoInput}>
            <label htmlFor="valorPedir">Valor a Pedir</label>
            <input
              type="number"
              id="valorPedir"
              value={valorPedir}
              onChange={(e) => setValorPedir(e.target.value)}
              required
            />
          </div>


          <div className={estilos.grupoInput}>
            <label htmlFor="plazo">Plazo (en meses)</label>
            <input
              type="number"
              id="plazo"
              value={plazo}
              onChange={(e) => setPlazo(e.target.value)}
              required
            />
          </div>


          <button type="submit" className={estilos.botonSolicitar}>
            Solicitar Préstamo
          </button>
        </form>
      </div>
    </div>
  );
}

export default Prestamos;
