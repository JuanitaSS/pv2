import { useState } from 'react';
import estilos from '../estilos/Resgistro.module.css'; 
import { useNavigate } from 'react-router-dom'; 

function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [celular, setCelular] = useState('');
  const [tipoCuenta, setTipoCuenta] = useState('ahorros');

  const navigate = useNavigate(); 

  const manejarEnvio = (evento) => {
      evento.preventDefault();
      const data = {nombre:nombre, email: correo, contraseña: contrasena, numcuenta:celular,tipo:tipoCuenta};
      fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(data),
      })
        .then((data) => data.json())
        .then((info) => {
          navigate('/login');
        })
        .catch((err) => console.error("Error al autenticar usuario:", err));
    };

  return (
    <div className={estilos.contenedor}>

      <div className={estilos.formulario}>
        <h2>Registro</h2>
        <form onSubmit={manejarEnvio}>
          <div className={estilos.grupoInput}>
            <label htmlFor="nombre">Nombre Completo</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className={estilos.grupoInput}>
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className={estilos.grupoInput}>
            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          <div className={estilos.grupoInput}>
            <label htmlFor="celular">Número de Celular</label>
            <input
              type="tel"
              id="celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              required
            />
          </div>

          <div className={estilos.grupoInput}>
            <label htmlFor="tipoCuenta">Tipo de Cuenta</label>
            <select
              id="tipoCuenta"
              value={tipoCuenta}
              onChange={(e) => setTipoCuenta(e.target.value)}
            >
              <option value="ahorros">Ahorros</option>
              <option value="corriente">Corriente</option>
            </select>
          </div>

          <button type="submit" className={estilos.botonRegistro}>
            Registrarse
          </button>
        </form>
      </div>


      <div className={estilos.imagen}>
        <img src="/img/Registro.png" alt="Imagen del banco" />
      </div>
    </div>
  );
}

export default Registro;
