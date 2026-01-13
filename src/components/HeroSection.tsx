import Typewriter from "./Typewriter";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      <div className="max-w-3xl">
        <span className="inline-block bg-blue-50 text-project px-3 py-1 rounded-full text-sm font-semibold mb-6">
          Disponibile per nuove opportunità lavorative
        </span>
        <h1 className="text-white text-3xl md:text-5xl">
          Junior Full Stack Developer
        </h1>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-white">
          Sviluppo applicazioni{" "}
          <span className="text-white-400">
            <Typewriter text="che piacciono" />
          </span>
        </h1>
        <p className="text-xl text-white mb-10 leading-relaxed">
          Il mio focus è scrivere codice pulito e mantenibile, partendo da un
          back end robusto e progettando interfacce utente intuitive e
          accessibili per il front end.
        </p>
        <div className="flex gap-4">
          <Link
            to="/about"
            className="hover:bg-cyan-600 transition-colors text-sm md:text-xl text-white mb-10 p-2 border-2 md:hidden"
          >
            Chi sono
          </Link>
          <Link
            to="/stack"
            className="hover:bg-cyan-600 transition-colors text-sm md:text-xl text-white mb-10 p-2 border-2 md:hidden"
          >
            Le tecnologie che utilizzo
          </Link>
          <Link
            to="/projects"
            className="hover:bg-cyan-600 transition-colors text-sm md:text-xl text-white mb-10 p-2 border-2"
          >
            Guarda i miei progetti
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
