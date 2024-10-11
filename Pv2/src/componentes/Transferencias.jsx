import React, { useState } from 'react';
import Menu from './Menu';
import estilos from '../estilos/Transferencias.module.css';
import { useNavigate } from 'react-router-dom';

function Transferencias() {
  const [cuentaDestino, setCuentaDestino] = useState('');
  const [valorTransferir, setValorTransferir] = useState('');
  const [tipoTransferencia, setTipoTransferencia] = useState('normal');
  
  const navigate = useNavigate(); 

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log({ cuentaDestino, valorTransferir, tipoTransferencia });
    alert('Transferencia exitosa');
    navigate('/plataforma'); 
  };

  return (
    <div>
      <Menu />
      <div className={estilos.contenedorTransferencia}>
        <h2 className={estilos.titulo}>Transferir Dinero</h2>
        
        <form className={estilos.formulario} onSubmit={manejarEnvio}>

          <div className={estilos.grupoInput}>
            <label htmlFor="cuentaDestino">Cuenta de Destino
               (ponga  propia si es para retirar o depositar)</label>
            <input
              type="text"
              id="cuentaDestino"
              value={cuentaDestino}
              onChange={(e) => setCuentaDestino(e.target.value)}
              required
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
              onChange={(e) => setTipoTransferencia(e.target.value)}
            >
              <option value="normal">Transferir</option>
              <option value="urgente">Depositar</option>
              <option value="urgente">Retirar</option>
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
