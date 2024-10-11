import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Principal from './componentes/Principal.jsx';
import Login from './componentes/Login.jsx';
import Registro from './componentes/Registro.jsx';
import Plataforma from './componentes/Plataforma.jsx'
import Saldos from './componentes/Saldos.jsx'
import Pago from './componentes/Pago.jsx'
import Transferencias from './componentes/Transferencias.jsx'
import Prestamos from './componentes/Prestamos.jsx'
import Yo from './componentes/Yo.jsx'

function App() {
  const [activoPrin, setactivoPrin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Registro' element={<Registro/>} />
        <Route path='/Plataforma' element={<Plataforma/>} />
        <Route path='/Saldos' element={<Saldos/>} />
        <Route path='/Pago' element={<Pago/>} />
        <Route path='/Transferencias' element={<Transferencias/>} />
        <Route path='/Prestamos' element={<Prestamos/>} />
        <Route path='/Yo' element={<Yo/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
