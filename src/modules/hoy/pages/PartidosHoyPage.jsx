import { PARTIDOS } from '../data/partidos';
import {Buscar} from '../../../global/LogicaBusqueda';

export default function FutbolPage() {
  const { escritoUser } = Buscar();
  const limpio = escritoUser.trim() === "";
  const eventosFiltrados = PARTIDOS.filter(equipo =>
    equipo.local.toLowerCase().includes(escritoUser.toLowerCase().trim()) || equipo.visitante.toLowerCase().includes(escritoUser.toLowerCase().trim())
  );
    
  return (
    <div>
      <section>
        <h2 className="mb-4 text-3xl font-bold">Apuestas de fútbol</h2>
          {limpio?(
            <ul className="space-y-3">
            {PARTIDOS.map((p) => (
            <li key={p.id} className="rounded-xl bg-corrode-800 p-4 shadow transition hover:-translate-y-1 hover:bg-corrode-800/70 cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  {p.local} <span className="text-corrode-200">vs</span> {p.visitante}
                </span>
                <span className="text-sm text-corrode-200">{p.hora}</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
                <div className="rounded bg-corrode-900/60 py-2">Local <b>{p.cuotas.local}</b></div>
                <div className="rounded bg-corrode-900/60 py-2">Empate <b>{p.cuotas.empate}</b></div>
                <div className="rounded bg-corrode-900/60 py-2">Visitante <b>{p.cuotas.visitante}</b></div>
              </div>
            </li>
          ))}
          </ul>
          ):(
            <div>
            {eventosFiltrados.length === 0?(
              <p className="text-slate-400 text-center py-8 bg-corrode-950/10 rounded-xl p-6 shadow transition">No se encontraron resultados para esta búsqueda</p>
            ):(
              <ul className="space-y-3">
                {eventosFiltrados.map((p) => (
                  <li key={p.id} className="rounded-xl bg-corrode-800 p-4 shadow transition hover:-translate-y-1 hover:bg-corrode-800/70 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        {p.local} <span className="text-corrode-200">vs</span> {p.visitante}
                      </span>
                      <span className="text-sm text-corrode-200">{p.hora}</span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
                      <div className="rounded bg-corrode-900/60 py-2">Local <b>{p.cuotas.local}</b></div>
                      <div className="rounded bg-corrode-900/60 py-2">Empate <b>{p.cuotas.empate}</b></div>
                      <div className="rounded bg-corrode-900/60 py-2">Visitante <b>{p.cuotas.visitante}</b></div>
                    </div>
                  </li>)
                )}
              </ul>
            )}
          </div>
          )}
      </section>
    </div>
  );
}
