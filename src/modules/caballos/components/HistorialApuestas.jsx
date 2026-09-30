export default function HistorialApuestas({ historial }) {
  if (historial.length === 0) return null;

  return (
    <div className="rounded-xl bg-corrode-800 p-4 shadow">
      <h3 className="mb-3 text-lg font-semibold">Historial de apuestas</h3>
      <ul className="space-y-2 text-sm">
        {historial.map((h) => (
          <li
            key={h.id}
            className="flex flex-wrap items-center justify-between gap-2 rounded bg-corrode-900 px-3 py-2"
          >
            <span>
              Apostaste ${h.monto} a <b>{h.apostado.nombre}</b>
            </span>
            <span className="text-corrode-200">Ganó {h.ganador.nombre}</span>
            <span className={h.gano ? 'font-bold text-green-400' : 'font-bold text-red-400'}>
              {h.gano ? `+$${h.pago.toFixed(0)}` : 'Perdiste'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
