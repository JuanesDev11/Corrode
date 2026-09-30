import { NavLink } from 'react-router-dom';

const enlaces = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/futbol', label: 'Fútbol' },
  { to: '/caballos', label: 'Caballos' },
];

export default function Navbar() {
  return (
    <nav className="bg-corrode-700">
      <ul className="mx-auto flex max-w-5xl">
        {enlaces.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `block px-5 py-3 transition-colors hover:text-black ${
                  isActive ? 'border-b-4 border-white font-semibold' : 'text-white'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
