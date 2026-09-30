import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import InicioPage from '../modules/inicio/pages/InicioPage';
import FutbolPage from '../modules/futbol/pages/FutbolPage';
import CaballosPage from '../modules/caballos/pages/CaballosPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<InicioPage />} />
          <Route path="/futbol" element={<FutbolPage />} />
          <Route path="/caballos" element={<CaballosPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
