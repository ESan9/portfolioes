import Typewriter from "./Typewriter";

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
          Sviluppo applicazioni che{" "}
          <span className="text-white-400">
            <Typewriter text="lasciano il segno." />
          </span>
        </h1>
        <p className="text-xl text-white mb-10 leading-relaxed">
          Il mio focus è scrivere codice pulito e mantenibile, partendo da un
          back end robusto e progettando interfacce utente intuitive e
          accessibili per il front end.
        </p>
        <div className="flex gap-4">
          <button className="border-2 border-white px-8 py-3 rounded-full font-bold text-white hover:bg-cyan-600 hover:text-white transition-all cursor-pointer">
            Guarda i miei lavori
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-full font-bold text-white hover:bg-cyan-600 hover:text-white transition-all cursor-pointer">
            Le tecnologie che utilizzo
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
