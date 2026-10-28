import { useParams } from 'react-router-dom';
import { EQUIPOS } from '../data/equipos';
import {Buscar} from '../../../global/LogicaBusqueda';
import {useState} from 'react';
import EstadisticaEquipo from '../components/EstadisticaEquipo';
import {Undo2} from 'lucide-react';

export default function EquipoPage() {
  const { equipo } = useParams();
  const { escritoUser } = Buscar();
  const limpio = escritoUser.trim() === "";
  const equipoSelecionado = EQUIPOS.find(e => e.name.toLowerCase() === equipo.toLowerCase());
  const existenJugadores=equipoSelecionado.jugadores || [];
  var jugadoresFiltrados;
  {!(existenJugadores.length===0)&&(
    jugadoresFiltrados = equipoSelecionado.jugadores.filter(jugador =>
      jugador.name.toLowerCase().includes(escritoUser.toLowerCase().trim())
  ))}
  const [jugadorSeleccionado, setJugadorSeleccionado]=useState(false);
  const jugadorActivo = existenJugadores.length > 0 
    ? existenJugadores.find(j => j.id === jugadorSeleccionado) 
    : null;

  return (
    <div className="w-full h-full">
      <div>
        <h1 className="text-3xl font-bold  mb-2">{equipoSelecionado ? equipoSelecionado.name : equipo}</h1>
      </div>
      {existenJugadores.length===0?(
        <div className="flex justify-between gap-10 my-4 w-full h-full">
          <p className="text-slate-400 text-center py-8 w-full h-full bg-corrode-950/10 shadow-xl rounded-2xl ">Este equipo no cuenta con jugadores</p>
          <p className="text-slate-400 text-center py-8 w-full h-full bg-corrode-950/10 shadow-xl rounded-2xl">Este equipo no cuenta con estadísticas</p>
        </div>
      ):(
        <div className="flex justify-between gap-10 my-4 w-full h-full">
        {limpio?(
          <div className="grid grid-cols-3 gap-4 bg-corrode-950/10 shadow-xl rounded-2xl overflow-y-auto max-h-[600px] overflow-x-hidden w-full"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#838e94 transparent" 
            }}>
          {equipoSelecionado.jugadores?.map((jugador)=>
            <img
              src={jugador.foto} 
              alt={jugador.name} 
              className="shadow-xl object-contain cursor-pointer mx-1 my-2 bg-transparent border-2 border-corrode-950/10 bg-corrode-950/20 rounded-2xl"
              onClick={() => setJugadorSeleccionado(jugador.id)}
            />
          )}
          </div>
        ):(
          <div className="flex justify-between gap-10 w-full h-full">
            {jugadoresFiltrados.length === 0 ? (
              <p className="text-slate-400 text-center py-8 w-full h-full bg-corrode-950/10 shadow-xl rounded-2xl ">No se encontró este jugador</p>
            ) : (
              <div className="grid grid-cols-3 gap-4 bg-corrode-950/10 shadow-xl rounded-2xl overflow-y-auto max-h-[600px] overflow-x-hidden w-full"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#838e94 transparent" 
              }}>
                {jugadoresFiltrados.map((jugador) => (
                  <img
                    src={jugador.foto} 
                    alt={jugador.name} 
                    className="shadow-xl object-contain cursor-pointer mx-1 my-2 bg-transparent border-2 border-corrode-950/10 bg-corrode-950/20 rounded-2xl"
                    onClick={()=>setJugadorSeleccionado(jugador.id)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
          <div className="bg-corrode-950/10 w-full h-full shadow-xl rounded-2xl">
          {jugadorSeleccionado?(
            <div className="w-full h-full bg-corrode-950/20 border border-corrode-950/10 rounded-2xl p-6">
              {jugadorActivo?.estadisticaJugador ? (
                  <div className="my-auto flex justify-start">
                    <Undo2 className="m-1 mr-4 cursor-pointer text-gray-400" size={20}
                    onClick={()=>setJugadorSeleccionado(null)}
                    />
                    <EstadisticaEquipo equipo={jugadorActivo} />
                  </div>
                ) : (
                  <div className="flex flex-col h-full justify-betewen">
                    <Undo2 className="m-1 mr-4 cursor-pointer text-gray-400" size={20}
                    onClick={()=>setJugadorSeleccionado(null)}
                    />
                    <div className="flex-1 flex items-center justify-center my-auto">
                      <p className="text-gray-400 text-center">Este jugador no cuenta con estadísticas</p>
                    </div>
                  </div>
                )}
            </div>
          ):(
            <div className="w-full h-full bg-corrode-950/20 border border-corrode-950/10 rounded-2xl p-6">
              <EstadisticaEquipo equipo={equipoSelecionado} />
          </div>
          )}
          </div>
        </div>
      )}
    </div>
  );
}