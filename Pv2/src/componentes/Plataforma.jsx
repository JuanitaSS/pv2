import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from './Menu';
import estilos from '../estilos/Plataforma.module.css';

function Plataforma() {
  const location = useLocation();
  const user = location.state?.user; 
  if (!user) {
    return <p>Error: No se encontró información del usuario.</p>; 
  }
  const saldoDisponible = Number(user[0]?.saldo);

  return (
    <div>
      <Menu />

      <h1 className={estilos.tituloUsuario}>Hola, {user[0]?.nombre}</h1> 

      <div className={estilos.cuentasContenedor}>
        <div className={estilos.tituloCuentas}>Tus cuentas</div>

        <div className={estilos.contenedorMorado}>
          <div className={estilos.informacionCuenta}>
            <div className={estilos.tipoCuenta}>Cuenta de {user[0]?.tipo}</div>
            <div className={estilos.telefono}>Tel: {user[0]?.numcuenta}</div>
          </div>

          <div className={estilos.saldoSubcontenedor}>
            <div>
              <h2 className={estilos.saldoDisponible}>Saldo Disponible</h2>
              <p className={estilos.saldoMonto}>${saldoDisponible.toFixed(2)}</p> {/* Formato de dos decimales */}
            </div>
            <div className={estilos.imagenSaldo}>
              <img
                src="/img/Plataforma.png" // Cambia la ruta a la imagen según corresponda
                alt="Imagen relacionada con el saldo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={estilos.botonera}>
        <Link to="/Saldos" className={estilos.botonAccion}>
          <i className="material-icons">date_range</i> 
          Saldos y Movimientos
        </Link>
        
        <Link to="/Transferencias" className={estilos.botonAccion}>
          <i className="material-icons">near_me</i> 
          Transferencias
        </Link>
        
        <Link to="/Prestamos" className={estilos.botonAccion}>
          <i className="material-icons">business_center</i> 
          Préstamos
        </Link>
        
        <Link to="/Pago" className={estilos.botonAccion}>
          <i className="material-icons">attach_money</i> 
          Pago de Créditos
        </Link>
      </div>
    </div>
  );
}

export default Plataforma;
