import { EQUIPOS } from '../data/equipos';
import {Buscar} from '../../../global/LogicaBusqueda';
import { NavLink } from 'react-router-dom';

const Imagenes = ({ src, alt, className }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`rounded-full w-40 h-40 object-contain shadow-xl cursor-pointer m-4 border-2 border-corrode-950/20 ${className}`} 
    />
  );
};

export default function FulbolHomePage(){
    const { escritoUser } = Buscar();
    const limpio = escritoUser.trim() === "";
    const equiposFiltrados = EQUIPOS.filter(equipo =>
      equipo.name.toLowerCase().includes(escritoUser.toLowerCase().trim())
    );

    return (
        <div>
            <div>
                <p className="text-3xl font-bold mb-2">Equipos</p>
            </div>
            {limpio?(
                <div>
                <div className="flex justify-between my-4 bg-corrode-950/10 shadow-xl rounded-2xl">
                    <div className="flex flex-col items-center">
                        <Imagenes
                        src={EQUIPOS[0].img}
                        alt="Real Madrid"
                        />
                        <span className="mb-3 text-lg">{EQUIPOS[0].name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Imagenes
                        src={EQUIPOS[1].img}
                        alt="Real Madrid"
                        />
                        <span className="mb-3 text-lg">{EQUIPOS[1].name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Imagenes
                        src={EQUIPOS[2].img}
                        alt="Real Madrid"
                        />
                        <span className="mb-3 text-lg">{EQUIPOS[2].name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Imagenes
                        src={EQUIPOS[3].img}
                        alt="Real Madrid"
                        />
                        <span className="mb-3 text-lg">{EQUIPOS[3].name}</span>
                    </div>
                </div> 
                <div className="flex justify-between my-4 bg-corrode-950/10 shadow-xl rounded-2xl">
                    <div className="flex flex-col items-center">
                        <Imagenes
                        src={EQUIPOS[4].img}
                        alt="Real Madrid"
                        />
                        <span className="mb-3 text-lg">{EQUIPOS[4].name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Imagenes
                        src={EQUIPOS[5].img}
                        alt="Real Madrid"
                        />
                        <span className="mb-3 text-lg">{EQUIPOS[5].name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Imagenes
                        src={EQUIPOS[6].img}
                        alt="Real Madrid"
                        />
                        <span className="mb-3 text-lg">{EQUIPOS[6].name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Imagenes
                        src={EQUIPOS[7].img}
                        alt="Real Madrid"
                        />
                        <span className="mb-3 text-lg">{EQUIPOS[7].name}</span>
                    </div>
                </div> 
                </div>
            ):(
                <div>
                    {equiposFiltrados.length === 0 ? (
                        <p className="text-slate-400 text-center py-8">No se encontraron equipos de fútbol</p>
                    ) : (
                        <div className="flex flex-wrap justify-start gap-10 my-4 bg-corrode-950/10 shadow-xl rounded-2xl p-4">
                            {equiposFiltrados.map((equipo) => (
                                <div key={equipo.id} className="flex flex-col items-center">
                                    <NavLink to="/futbol/equipo" end={true}>
                                        <Imagenes 
                                        src={equipo.img} 
                                        alt={equipo.name}
                                        />
                                        <span className="mb-3 text-lg">{equipo.name}</span>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}