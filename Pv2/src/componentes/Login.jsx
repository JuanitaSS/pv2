import { useState } from 'react';
import estilos from '../estilos/Login.module.css'; 
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [email, setEmail] = useState(''); 
  const [contraseña, setContraseña] = useState(''); 
  const [user, setUser] = useState([]);
  const navigate = useNavigate(); 

  const userAuth = (evento) => {
    evento.preventDefault();
    const data = { email: email, contraseña: contraseña };
    fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    })
      .then(async (response) => 
        {
          if (!response.ok) 
            {
              const errorData = await response.json();
              alert(errorData.message);
            throw new Error(errorData.message || 'Error de autenticación'); // Captura el mensaje de error del backend
            }
            return response.json();
        })
      .then((info) => {
        setUser(info);
        navigate('/Plataforma', { state: { user: info } });
      })
      .catch((err) => console.error("Error al autenticar usuario:", err));
  };

  return (
    <div className={estilos.contenedorLogin}>
      <h1 className={estilos.titulo}>Estebanquito</h1>
      <div className={estilos.cajaLogin}>
        <form onSubmit={userAuth}>
          <div className={estilos.grupoInput}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className={estilos.grupoInput}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className={estilos.botonLogin}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
