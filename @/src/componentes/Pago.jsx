import React from 'react';
import Menu from './Menu';
import estilos from '../estilos/Pago.module.css';

function Pago() {


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

            <tr>
              <td>01/01/2024</td>
              <td>1 mes</td>
              <td>$1000.00</td>
              <td>
                <button className={estilos.botonPagar} >
                  Pagar
                </button>
              </td>
            </tr>
            <tr>
              <td>03/01/2024</td>
              <td>1 mes</td>
              <td>$1500.00</td>
              <td>
                <button className={estilos.botonPagar} >
                  Pagar
                </button>
              </td>
            </tr>
            <tr>
              <td>02/10/2024</td>
              <td>6 mes</td>
              <td>$3000.00</td>
              <td>
                <button className={estilos.botonPagar}>
                  Pagar
                </button>
              </td>
            </tr>
            <tr>
              <td>15/01/2024</td>
              <td>5 meses</td>
              <td>$1500.00</td>
              <td>
                <button className={estilos.botonPagar} >
                  Pagar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pago;
