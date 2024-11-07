import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import estilos from '../estilos/Pago.module.css';

function Pago() {
  const [prestamos, setPrestamos] = useState([]);
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user[0]?.idUsuario) {
      console.error('Error: Usuario no encontrado');
      return;
    }

    fetch('http://localhost:3001/loan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ idUsuario: user[0].idUsuario }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Préstamos obtenidos:', data);
        // Filtrar solo los arrays que contienen información relevante
        const prestamosData = Array.isArray(data) ? data.filter(item => Array.isArray(item) && item.length > 0 && item[0].idPrestamo) : [];
        setPrestamos(prestamosData.flat());
      })
      .catch((error) => console.error('Error al obtener los préstamos:', error));
  }, [user]);

  const handlePago = (prestamo) => {
    fetch('http://localhost:3001/deleteloan', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ idPrestamo: prestamo.idPrestamo, usuario_id: prestamo.usuario_id, monto: prestamo.monto }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((result) => {
        console.log('Préstamo pagado:', result);
        setPrestamos(prestamos.filter((p) => p.idPrestamo !== prestamo.idPrestamo));
        navigate('/plataforma', { state: { user } });
      })
      .catch((error) => console.error('Error al pagar el préstamo:', error));
  };

  return (
    <div>
      <Menu />
      <h1 className={estilos.titulo}>Pagar Créditos</h1>
      <div className={estilos.tablaContenedor}>
        <table className={estilos.tabla}>
          <thead>
            <tr>
              <th>Fecha del Préstamo</th>
              <th>Fecha de Vencimiento</th>
              <th>Monto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {prestamos.map((prestamo, index) => (
              <tr key={index}>
                <td>{prestamo.fecha_solicitud}</td>
                <td>{prestamo.plazo} meses</td>
                <td>${prestamo.monto}</td>
                <td>
                  <button
                    className={estilos.botonPagar}
                    onClick={() => handlePago(prestamo)}
                  >
                    Pagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pago;
