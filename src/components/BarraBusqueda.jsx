import {Search} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import {Buscar} from '../global/LogicaBusqueda';

export default function BarraBusqueda() {
  const page = useLocation();
  const {escritoUser,setEscritoUser}=Buscar();
  const rutaEquipo = page.pathname.startsWith('/futbol/') && page.pathname !== '/futbol';
  const getPagina = () => {
    //Futbol
    if (rutaEquipo) return "Buscar jugador...";
    if (page.pathname.includes('/futbol')) return "Buscar equipos...";
    //Caballos
    if (page.pathname.includes('/caballos')) return "Buscar caballos...";
    //Hoy
    if (page.pathname.includes('/partidosHoy')) return "Buscar eventos en línea...";
    return "Buscar...";
  };
  
  return (
    <div className="flex justify-start items-center p-2 w-full max-w-lg bg-[#0b3a6e] placeholder:text-slate-500">
        <input 
            type="text" 
            placeholder={getPagina()} 
            value={escritoUser}
            onChange={(e) => setEscritoUser(e.target.value)}
            className="bg-transparent w-full max-w-lg mr-2 border border-transparent focus:outline-none focus:border-transparent focus:border-b-corrode-200/30"
        />
        <Search className="cursor-pointer" size={18}/>
    </div> 
  );
}