import { PARTIDOS } from '../data/partidos';

export default function FutbolPage() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold">Apuestas de fútbol</h2>
      <ul className="space-y-3">
        {PARTIDOS.map((p) => (
          <li key={p.id} className="rounded-xl bg-corrode-800 p-4 shadow">
            <div className="flex items-center justify-between">
              <span className="font-semibold">
                {p.local} <span className="text-corrode-200">vs</span> {p.visitante}
              </span>
              <span className="text-sm text-corrode-200">{p.hora}</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
              <div className="rounded bg-corrode-900 py-2">Local <b>{p.cuotas.local}</b></div>
              <div className="rounded bg-corrode-900 py-2">Empate <b>{p.cuotas.empate}</b></div>
              <div className="rounded bg-corrode-900 py-2">Visitante <b>{p.cuotas.visitante}</b></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
