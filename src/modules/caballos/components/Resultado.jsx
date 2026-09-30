export default function Resultado({ resultado, apuesta }) {
  if (!resultado) return null;

  const { ganador, orden } = resultado;
  const gano = apuesta?.caballoId === ganador.id;
  const pago = gano ? apuesta.monto * ganador.cuota : 0;
  const medallas = ['🥇', '🥈', '🥉'];

  return (
    <div className={`rounded-xl p-4 shadow ${gano ? 'bg-green-600' : 'bg-corrode-800'}`}>
      <h3 className="text-xl font-bold">
        🏆 Ganador: #{ganador.numero} {ganador.nombre}
      </h3>
      <p className="mt-1">
        {gano
          ? `¡Ganaste! Tu pago: $${pago.toFixed(0)}`
          : 'Esta vez no fue tu caballo. ¡Intenta de nuevo!'}
      </p>
      <ol className="mt-3 space-y-1 text-sm">
        {orden.slice(0, 3).map((c, i) => (
          <li key={c.id}>
            {medallas[i]} #{c.numero} {c.nombre}
          </li>
        ))}
      </ol>
    </div>
  );
}
