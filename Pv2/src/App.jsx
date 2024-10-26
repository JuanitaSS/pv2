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
        <Route path='/login' element={<Login/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/plataforma' element={<Plataforma/>} />
        <Route path='/saldos' element={<Saldos/>} />
        <Route path='/pago' element={<Pago/>} />
        <Route path='/transferencias' element={<Transferencias/>} />
        <Route path='/prestamos' element={<Prestamos/>} />
        <Route path='/yo' element={<Yo/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
