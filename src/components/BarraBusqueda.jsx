import {Search} from 'lucide-react';

export default function BarraBusqueda() {
  return (
    <div className="flex justify-between items-center p-2 mr-4">
        <Search size={18}/>
        <input 
            type="text" 
            placeholder="Buscar..." 
            className="pl-2 bg-corrode-950/10"
        />
    </div>
  );
}