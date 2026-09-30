export default function PanelApuesta({
  caballo,
  monto,
  onMontoChange,
  onApostar,
  corriendo,
}) {
  const cuota = caballo?.cuota ?? 0;
  const posibleGanancia = (Number(monto) || 0) * cuota;

  return (
    <div className="rounded-xl bg-corrode-800 p-4 shadow">
      <h3 className="mb-3 text-lg font-semibold">Tu apuesta</h3>

      <p className="mb-3 text-sm text-corrode-200">
        {caballo ? (
          <>Caballo elegido: <b className="text-white">#{caballo.numero} {caballo.nombre}</b> (x{cuota.toFixed(1)})</>
        ) : (
          'Selecciona un caballo de la lista.'
        )}
      </p>

      <label htmlFor="monto" className="mb-1 block text-sm">
        Valor de la apuesta
      </label>
      <input
        id="monto"
        type="number"
        min="0"
        value={monto}
        disabled={corriendo}
        onChange={(e) => onMontoChange(e.target.value)}
        className="mb-3 w-full rounded bg-corrode-900 px-3 py-2 text-white outline-none ring-1 ring-corrode-700 focus:ring-2 focus:ring-white disabled:opacity-60"
      />

      <p className="mb-4 text-sm text-corrode-200">
        Posible ganancia: <b className="text-white">${posibleGanancia.toFixed(0)}</b>
      </p>

      <button
        type="button"
        onClick={onApostar}
        disabled={!caballo || corriendo}
        className="w-full rounded-lg bg-yellow-400 px-4 py-3 font-bold text-corrode-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:bg-zinc-500 disabled:text-zinc-300"
      >
        {corriendo ? 'Corriendo...' : 'Apostar y correr'}
      </button>
    </div>
  );
}
