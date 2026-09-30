import { Link } from 'react-router-dom';

const secciones = [
  {
    to: '/caballos',
    emoji: '🐎',
    titulo: 'Carreras de caballos',
    texto: 'Elige tu caballo, apuesta y míralo correr en tiempo real.',
  },
  {
    to: '/futbol',
    emoji: '⚽',
    titulo: 'Fútbol',
    texto: 'Consulta los partidos y sus cuotas.',
  },
];

export default function InicioPage() {
  return (
    <section>
      <h2 className="mb-2 text-3xl font-bold">Bienvenido a Corrode</h2>
      <p className="mb-6 text-corrode-200">Elige una sección para empezar a apostar.</p>
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
    </section>
  );
}
