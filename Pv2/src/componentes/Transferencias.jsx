import React, { useState } from 'react';
import Menu from './Menu';
import estilos from '../estilos/Transferencias.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

function Transferencias() {
  const [cuentaDestino, setCuentaDestino] = useState('');
  const [valorTransferir, setValorTransferir] = useState('');
  const [tipoTransferencia, setTipoTransferencia] = useState('normal');
  
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  const manejarEnvio = (e) => {
    e.preventDefault();
    const data = {
      cuentaDestino,
      valorTransferir,
      tipoTransferencia,
      idUsuario: user[0]?.idUsuario,
      fecha: format(new Date(), 'yyyy-MM-dd HH:mm:ss') 
    };

    fetch('http://localhost:3001/transfer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert('Transferencia exitosa');
        navigate('/plataforma', { state: { user } });
      })
      .catch((error) => {
        console.error('Error al realizar la transferencia:', error);
        alert('Error al realizar la transferencia');
      });
  };

  const handleTipoTransferenciaChange = (e) => {
    const newTipoTransferencia = e.target.value;
    setTipoTransferencia(newTipoTransferencia);
    if (newTipoTransferencia === 'normal') {
      setCuentaDestino(''); 
    } else if (newTipoTransferencia === 'depositar') {
      setCuentaDestino(user[0]?.numcuenta); 
    } else if (newTipoTransferencia === 'retirar') {
      setCuentaDestino(user[0]?.numcuenta); 
    }
  };

  return (
    <div>
      <Menu />
      <div className={estilos.contenedorTransferencia}>
        <h2 className={estilos.titulo}>Transferir Dinero</h2>
        
        <form className={estilos.formulario} onSubmit={manejarEnvio}>

          <div className={estilos.grupoInput}>
            <label htmlFor="cuentaDestino">Cuenta de Destino</label>
            <input
              type="text"
              id="cuentaDestino"
              value={cuentaDestino}
              onChange={(e) => setCuentaDestino(e.target.value)}
              required
              disabled={tipoTransferencia === 'depositar' || tipoTransferencia === 'retirar'} 
            />
          </div>

          <div className={estilos.grupoInput}>
            <label htmlFor="valorTransferir">Valor a Transferir</label>
            <input
              type="number"
              id="valorTransferir"
              value={valorTransferir}
              onChange={(e) => setValorTransferir(e.target.value)}
              required
            />
          </div>

          <div className={estilos.grupoInput}>
            <label htmlFor="tipoTransferencia">Tipo de Transferencia</label>
            <select
              id="tipoTransferencia"
              value={tipoTransferencia}
              onChange={handleTipoTransferenciaChange}
            >
              <option value="normal">Transferir</option>
              <option value="depositar">Depositar</option>
              <option value="retirar">Retirar</option>
            </select>
          </div>

          <button type="submit" className={estilos.botonTransferir}>
            Transferir
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transferencias;
