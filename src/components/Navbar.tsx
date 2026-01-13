import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto sticky top-0 z-100 bg-project border-b-2 border-white">
      <div className="text-2xl font-bold tracking-tighter text-white">
        {" "}
        <Link to="/" className="hover:text-cyan-600 transition-colors">
          Emanuele Sanna
        </Link>
      </div>
      <div className="hidden md:flex gap-8 font-medium text-white">
        <Link to="/about" className="hover:text-cyan-600 transition-colors">
          Chi sono
        </Link>
        <Link to="/stack" className="hover:text-cyan-600 transition-colors">
          Le tecnologie che utilizzo
        </Link>
        <Link to="/projects" className="hover:text-cyan-600 transition-colors">
          Progetti
        </Link>
      </div>
      <button className=" text-white px-5 py-2 rounded-full font-medium border-2 border-white hover:bg-cyan-600 transition-all cursor-pointer">
        <a href="/contact">Contattami</a>
      </button>
    </nav>
  );
};

export default Navbar;
