import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import InicioPage from '../modules/inicio/pages/InicioPage';
import FutbolHomePage from '../modules/futbol/pages/FutbolHomePage';
import EquipoPage from '../modules/futbol/pages/EquipoPage';
import CaballosPage from '../modules/caballos/pages/CaballosPage';
import PartidosHoyPage from '../modules/hoy/pages/PartidosHoyPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<InicioPage />} />
          <Route path="/futbol" element={<FutbolHomePage />} />
          <Route path="/futbol/:equipo" element={<EquipoPage />}/>
          <Route path="/caballos" element={<CaballosPage />} />
          <Route path="/partidosHoy" element={<PartidosHoyPage/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
