import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import estilos from '../estilos/Yo.module.css'; 

function Yo() {
  const navigate = useNavigate();
  
  const location = useLocation();
  const user = location.state?.user;

  const usuario = {
    nombre: user[0]?.nombre,
    email: user[0]?.email,
    numeroCuenta: user[0]?.numcuenta,
    tipoCuenta: user[0]?.tipo,
  };

  const manejarSalir = () => {

    navigate('/'); 
  };

  const manejarRegresar = () => {

    navigate('/plataforma', { state: { user } }); 
  };

  return (
    <div className={estilos.contenedorUsuario}>
      <h2 className={estilos.titulo}>Mi Usuario</h2>
      <div className={estilos.informacionUsuario}>
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Número de Cuenta:</strong> {usuario.numeroCuenta}</p>
        <p><strong>Tipo de Cuenta:</strong> {usuario.tipoCuenta}</p>
      </div>
      <div className={estilos.botonera}>
        <button className={estilos.boton} onClick={manejarRegresar}>
          Regresar a la Plataforma
        </button>
        <button className={estilos.boton} onClick={manejarSalir}>
          Salir
        </button>
      </div>
    </div>
  );
}

export default Yo;
