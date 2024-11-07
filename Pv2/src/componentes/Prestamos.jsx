import React, { useState } from 'react';
import Menu from './Menu';
import estilos from '../estilos/Prestamos.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

function Prestamos() {
  const [valorPedir, setValorPedir] = useState('');
  const [plazo, setPlazo] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation(); 
  const user = location.state?.user; 

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Usuario:", user); // Agregar log para depurar
    if (!user || !user[0]?.idUsuario) {
      alert('Error: Usuario no encontrado');
      return;
    }
    const data = {
      idUsuario: user[0].idUsuario,
      valorPedir,
      plazo,
      estado: 'pendiente',
      fecha: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    };

    console.log("Enviando datos al backend:", data);

    fetch('http://localhost:3001/makeloan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("Respuesta del backend:", response);
        return response.json();
      })
      .then((result) => {
        console.log("Resultado del backend:", result);
        navigate('/plataforma', { state: { user } });
      })
      .catch((error) => {
        console.error('Error al solicitar el préstamo:', error);
        alert('Error al solicitar el préstamo');
      });
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
