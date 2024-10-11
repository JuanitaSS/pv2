import { useState } from 'react';
import estilos from '../estilos/Login.module.css'; 
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [correo, setCorreo] = useState(''); 
  const [contrasena, setContrasena] = useState(''); 
  const navigate = useNavigate(); 

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    
    console.log('Correo:', correo, 'Contraseña:', contrasena);

    navigate('/Plataforma'); 
  };

  return (
    <div className={estilos.contenedorLogin}>
      <h1 className={estilos.titulo}>Estebanquito</h1>
      <div className={estilos.cajaLogin}>
        <form onSubmit={manejarEnvio}>
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

          <button type="submit" className={estilos.botonLogin}>
            iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
