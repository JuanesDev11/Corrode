import { Link } from 'react-router-dom';
import logo from '../assets/logo-corrode.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-corrode-800 px-6 py-2 shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">Apuesta seguro</h1>
      <Link to="/" aria-label="Ir al inicio">
        <img
          src={logo}
          alt="Corrode logo"
          className="h-16 w-16 rounded-xl bg-white object-contain"
        />
      </Link>
    </header>
  );
}
