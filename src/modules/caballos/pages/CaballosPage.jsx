import { useState } from 'react';
import { CABALLOS } from '../data/caballos';
import { useCarrera } from '../hooks/useCarrera';
import ListaCaballos from '../components/ListaCaballos';
import Pista from '../components/Pista';
import PanelApuesta from '../components/PanelApuesta';
import Resultado from '../components/Resultado';
import HistorialApuestas from '../components/HistorialApuestas';

export default function CaballosPage() {
  const [seleccionadoId, setSeleccionadoId] = useState(null);
  const [monto, setMonto] = useState(0);
  const [apuesta, setApuesta] = useState(null);
  const [historial, setHistorial] = useState([]);

  const { estado, progreso, resultado, iniciar } = useCarrera(CABALLOS, (ganador) => {
    if (!apuesta) return;
    const apostado = CABALLOS.find((c) => c.id === apuesta.caballoId);
    const gano = apuesta.caballoId === ganador.id;
    setHistorial((prev) =>
      [
        {
          id: Date.now(),
          apostado,
          ganador,
          monto: apuesta.monto,
          gano,
          pago: gano ? apuesta.monto * ganador.cuota : 0,
        },
        ...prev,
      ].slice(0, 10)
    );
  });

  const corriendo = estado === 'corriendo';
  const caballoElegido = CABALLOS.find((c) => c.id === seleccionadoId);

  const handleApostar = () => {
    if (!caballoElegido) return;
    setApuesta({ caballoId: caballoElegido.id, monto: Number(monto) || 0 });
    iniciar();
  };

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Carreras de caballos</h2>

      <Pista
        caballos={CABALLOS}
        progreso={progreso}
        seleccionadoId={seleccionadoId}
        ganadorId={resultado?.ganador.id}
      />

      <Resultado resultado={resultado} apuesta={apuesta} />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="mb-3 text-lg font-semibold">Elige tu caballo</h3>
          <ListaCaballos
            caballos={CABALLOS}
            seleccionadoId={seleccionadoId}
            onSeleccionar={setSeleccionadoId}
            deshabilitado={corriendo}
          />
        </div>
        <PanelApuesta
          caballo={caballoElegido}
          monto={monto}
          onMontoChange={setMonto}
          onApostar={handleApostar}
          corriendo={corriendo}
        />
      </div>

      <HistorialApuestas historial={historial} />
    </section>
  );
}
