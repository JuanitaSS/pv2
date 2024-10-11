import React from 'react';
import Menu from './Menu';
import estilos from '../estilos/Saldos.module.css';

function Saldos() {
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

            <tr>
              <td>01/10/2024</td>
              <td>Depósito</td>
              <td>bancolombia1</td>
              <td>$500.00</td>
            </tr>
            <tr>
              <td>02/10/2024</td>
              <td>Retiro</td>
              <td>Corrientatos</td>
              <td>$150.00</td>
            </tr>
            <tr>
              <td>03/10/2024</td>
              <td>Retiro</td>
              <td>un bancox</td>
              <td>$120.00</td>
            </tr>
            <tr>
              <td>04/10/2024</td>
              <td>Retiro</td>
              <td>Un banquito</td>
              <td>$130.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Saldos;
