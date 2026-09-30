export default function ListaCaballos({ caballos, seleccionadoId, onSeleccionar, deshabilitado }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {caballos.map((c) => {
        const activo = c.id === seleccionadoId;
        return (
          <button
            key={c.id}
            type="button"
            disabled={deshabilitado}
            onClick={() => onSeleccionar(c.id)}
            className={`flex items-center gap-3 rounded-xl p-3 text-left shadow transition disabled:cursor-not-allowed disabled:opacity-60 ${
              activo
                ? 'bg-white text-corrode-900 ring-4 ring-yellow-400'
                : 'bg-corrode-800 hover:bg-corrode-700'
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-white ${c.color}`}
            >
              {c.numero}
            </span>
            <span className="flex-1">
              <span className="block font-semibold">{c.nombre}</span>
              <span className={`text-xs ${activo ? 'text-corrode-800' : 'text-corrode-200'}`}>
                Cuota x{c.cuota.toFixed(1)}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
