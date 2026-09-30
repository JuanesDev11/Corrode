export default function Pista({ caballos, progreso, seleccionadoId, ganadorId }) {
  return (
    <div className="overflow-hidden rounded-xl bg-green-800 p-3 shadow-inner">
      {caballos.map((c) => {
        const pct = Math.min(100, progreso[c.id] ?? 0);
        const esGanador = c.id === ganadorId;
        const esApostado = c.id === seleccionadoId;
        return (
          <div key={c.id} className="flex items-center gap-2 border-b border-dashed border-green-600 py-2 last:border-b-0">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${c.color}`}
            >
              {c.numero}
            </span>

            <div className="relative h-9 flex-1 pr-9">
              <div className="relative h-full">
                <span
                  className="absolute top-0 -scale-x-100 text-3xl leading-9 transition-[left] duration-100 ease-linear"
                  style={{ left: `${pct}%` }}
                  aria-label={c.nombre}
                >
                  🐎
                </span>
              </div>
              <span className="absolute right-0 top-0 text-2xl leading-9">🏁</span>
            </div>

            <span className="w-28 truncate text-right text-xs">
              {esGanador && '🏆 '}
              {esApostado && '⭐ '}
              {c.nombre}
            </span>
          </div>
        );
      })}
    </div>
  );
}
