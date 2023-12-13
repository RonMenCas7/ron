import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio1 from './Pages/Inicio1';
import Pagina1 from './Pages/Pagina1';
import Pagina2 from './Pages/Pagina2';
import Pagina3 from './Pages/Pagina3';
import Pagina4 from './Pages/Pagina4';
import Pagina5 from './Pages/Pagina5';
import Pagina6 from './Pages/Pagina6';
import Pagina7 from './Pages/Pagina7';
import Pagina8 from './Pages/Pagina8';
import Pagina9 from './Pages/Pagina9';
import Pagina10 from './Pages/Pagina10';




function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/Inicio1" element={<Inicio1 />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
        <Route path="/pagina4" element={<Pagina4 />} />
        <Route path="/pagina5" element={<Pagina5 />} />
        <Route path="/pagina6" element={<Pagina6 />} />
        <Route path="/pagina7" element={<Pagina7 />} />
        <Route path="/pagina8" element={<Pagina8 />} />
        <Route path="/pagina9" element={<Pagina9 />} />
        <Route path="/pagina10" element={<Pagina10 />} />

      </Routes>
    </div>
  );
}

export default App;
