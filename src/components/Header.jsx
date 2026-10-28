import { useLocation, useNavigate } from 'react-router-dom';
import {CircleUser, Undo2} from 'lucide-react';
import BarraBusqueda from '../components/BarraBusqueda';

export default function Header() {
  const pagina = useLocation();
  const ruta = useNavigate();
  const titulos = {
    '/': 'Home',
    '/futbol': 'Fútbol',
    '/caballos': 'Carreras de caballos',
    '/partidosHoy': 'Hoy'
  };
  const tituloActual = titulos[pagina.pathname];
  const rutaEquipo = pagina.pathname.startsWith('/futbol/') && pagina.pathname !== '/futbol';

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#0b3a6e] px-6 py-2 shadow-lg text-corrode-200">
      <div className="flex justify-start items-center w-full max-w-lg">
        {rutaEquipo?(
          <Undo2 className="cursor-pointer" size={18}
          onClick={()=>ruta(-1)}/>
        ):(
          <h1 className="tracking-wide">{tituloActual}</h1>
        )}
        <div className="h-5 w-[1px] bg-corrode-200/30 ml-4 mr-4"></div>
        <BarraBusqueda/>
      </div>
      <div className="flex justify-between items-center">
        <CircleUser className="cursor-pointer" size={18}/>
        <span className="pl-2">name</span>
      </div>
    </header>
  );
}
