import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';
import estilos from '../estilos/Saldos.module.css';

function Saldos() {
  const [transfer, setTransfer] = useState([]);
  const location = useLocation();
  const user = location.state?.user;

  useEffect(() => {
    fetch('http://localhost:3001/transfer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ idUsuario: user[0]?.idUsuario }),
    })
      .then((data) => data.json())
      .then((info) => {
        setTransfer(info);
      })
      .catch((err) => console.error("Error al consultar transferencias:", err));
  }, [user]);

  const trans = transfer;
  return (
    <div>
      <Menu />
      <h1 className={estilos.titulo}>Saldos y Movimientos</h1>
      <div className={estilos.tablaContenedor}>
        <table className={estilos.tabla}>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Cuenta</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {trans.map((transferencia, index) => (
              <tr key={index}>
                <td>{transferencia?.fecha}</td>{console.log(transferencia?.fecha)}
                <td>{transferencia?.tipo}</td>
                <td>{transferencia?.cuentadestino}</td>
                <td>{transferencia?.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Saldos;
