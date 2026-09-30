import { useCallback, useEffect, useRef, useState } from 'react';

const TICK_MS = 100;

const crearProgreso = (caballos) =>
  Object.fromEntries(caballos.map((c) => [c.id, 0]));

/**
 * Simula una carrera en tiempo real.
 * - progreso: { [idCaballo]: 0..100+ }
 * - estado: 'espera' | 'corriendo' | 'finalizada'
 * - resultado: { ganador, orden } cuando termina
 */
export function useCarrera(caballos, onFinish) {
  const [estado, setEstado] = useState('espera');
  const [progreso, setProgreso] = useState(() => crearProgreso(caballos));
  const [resultado, setResultado] = useState(null);

  const timer = useRef(null);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  const detener = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  // Limpia el intervalo si el componente se desmonta a mitad de carrera
  useEffect(() => detener, [detener]);

  const iniciar = useCallback(() => {
    if (timer.current) return;

    let avance = crearProgreso(caballos);
    setProgreso(avance);
    setResultado(null);
    setEstado('corriendo');

    timer.current = setInterval(() => {
      const siguiente = {};
      caballos.forEach((c) => {
        const impulso = Math.random() * 1.6 + 0.4;
        const ventaja = 0.9 + c.velocidad * 0.02;
        siguiente[c.id] = avance[c.id] + impulso * ventaja;
      });
      avance = siguiente;
      setProgreso(siguiente);

      if (caballos.some((c) => siguiente[c.id] >= 100)) {
        detener();
        const orden = [...caballos].sort((a, b) => siguiente[b.id] - siguiente[a.id]);
        const final = { ganador: orden[0], orden };
        setResultado(final);
        setEstado('finalizada');
        onFinishRef.current?.(final.ganador, final.orden);
      }
    }, TICK_MS);
  }, [caballos, detener]);

  return { estado, progreso, resultado, iniciar };
}
