import { useLocation } from 'react-router-dom';
import {CircleUser} from 'lucide-react';
import BarraBusqueda from '../components/BarraBusqueda';

export default function Header() {
  const pagina = useLocation();
  const titulos = {
    '/': 'Home',
    '/futbol': 'Fútbol',
    '/caballos': 'Carreras de caballos'
  };
  const tituloActual = titulos[location.pathname];
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#0b3a6e] px-6 py-2 shadow-lg text-corrode-200">
      <div className="flex justify-between items-center">
        <BarraBusqueda/>
        <h1 className="tracking-wide">{tituloActual}</h1>
      </div>
      <div className="flex justify-between items-center">
        <CircleUser className="cursor-pointer" size={18}/>
        <span className="pl-2">name</span>
      </div>
    </header>
  );
}
