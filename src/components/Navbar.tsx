import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto sticky top-0 z-100 bg-project border-b-2 border-white"
      aria-label="Navigazione principale"
    >
      <div className="text-2xl font-bold tracking-tighter text-white">
        {" "}
        <Link
          to="/"
          className="hover:text-cyan-600 transition-colors"
          aria-label="Torna alla home"
        >
          Emanuele Sanna
        </Link>
      </div>
      <div className="hidden md:flex gap-8 font-medium text-white">
        <Link
          to="/about"
          aria-label="Naviga alla pagina Chi sono"
          className="hover:text-cyan-600 transition-colors"
        >
          Chi sono
        </Link>
        <Link
          to="/stack"
          aria-label="Naviga alla pagina Tecnologie"
          className="hover:text-cyan-600 transition-colors"
        >
          Le tecnologie che utilizzo
        </Link>
        <Link
          to="/projects"
          aria-label="Naviga alla pagina Progetti"
          className="hover:text-cyan-600 transition-colors"
        >
          Progetti
        </Link>
      </div>
      <Link
        to="/contact"
        aria-label="Naviga alla pagina Contattami"
        className=" text-white px-5 py-2 rounded-full font-medium border-2 border-white hover:bg-cyan-600 transition-all cursor-pointer"
      >
        Contattami
      </Link>
    </nav>
  );
};

export default Navbar;
