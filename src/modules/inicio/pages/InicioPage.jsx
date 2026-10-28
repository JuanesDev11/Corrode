import { Link } from 'react-router-dom';
import {Buscar} from '../../../global/LogicaBusqueda';
import {LoaderPinwheel, Volleyball, Trophy, Target, Bike, Gauge } from 'lucide-react';

const secciones = [
  {
    to: '/caballos',
    emoji: <Trophy size={50}/>,
    titulo: 'Carreras de caballos',
    texto: 'Elige tu caballo, apuesta y míralo correr en tiempo real.',
  },
  {
    to: '/futbol',
    emoji: <Volleyball size={50}/>,
    titulo: 'Fútbol',
    texto: 'Visualiza las estadísticas de tus equipos favoritos.',
  },
  {
    to: '/tejo',
    emoji: <Target size={50}/>,
    titulo: 'Tejo',
    texto: 'Analiza los mejores mecheros, puntajes y estadísticas del turmequé.',
  },
  {
    to: '/baloncesto',
    emoji: <LoaderPinwheel size={50}/>,
    titulo: 'Baloncesto',
    texto: 'Consulta marcadores, métricas de jugadores y tablas de posiciones.',
  },
  {
    to: '/formula1',
    emoji: <Gauge size={50}/>,
    titulo: 'Fórmula 1',
    texto: 'Revisa telemetría, tiempos de vuelta y rendimiento en pista.',
  },
  {
    to: '/ciclismo',
    emoji: <Bike size={50}/>,
    titulo: 'Ciclismo',
    texto: 'Sigue la clasificación general, altimetría y etapas en vivo.',
  },
];

export default function InicioPage() {
  const { escritoUser } = Buscar();
  const limpio = escritoUser.trim() === "";
  const seccionesFiltradas = secciones.filter(seccion =>
        seccion.titulo.toLowerCase().includes(escritoUser.toLowerCase().trim())
      );

  return (
    <section>
      <h2 className="mb-2 text-3xl font-bold">Bienvenido a Corrode</h2>
      <p className="mb-6 text-corrode-200">Explora las secciones, analiza estadísticas y vive la emoción de apostar.</p>
      {limpio?(
        <div className="grid gap-4 sm:grid-cols-2">
          {secciones.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="rounded-xl bg-corrode-800 p-6 shadow transition hover:-translate-y-1 hover:bg-corrode-700"
            >
              <div className="mb-2 text-4xl">{s.emoji}</div>
              <h3 className="text-xl font-semibold">{s.titulo}</h3>
              <p className="mt-1 text-sm text-corrode-200">{s.texto}</p>
            </Link>
          ))}
        </div>
      ):(
        <div>
        {seccionesFiltradas.length === 0?(
          <p className="text-slate-400 text-center py-8 bg-corrode-950/10 rounded-xl p-6 shadow transition">No se encontró la sección</p>
        ):(
          <div className="grid gap-4 sm:grid-cols-2">
          {seccionesFiltradas.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="rounded-xl bg-corrode-800 p-6 shadow transition hover:-translate-y-1 hover:bg-corrode-700"
            >
              <div className="mb-2 text-4xl">{s.emoji}</div>
              <h3 className="text-xl font-semibold">{s.titulo}</h3>
              <p className="mt-1 text-sm text-corrode-200">{s.texto}</p>
            </Link>
          ))}
        </div>
        )}
        </div>
      )}
    </section>
  );
}
