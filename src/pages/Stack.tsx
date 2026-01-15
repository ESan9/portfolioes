const Stack = () => {
  const spanClass =
    "hover:bg-cyan-600 transition-colors text-sm md:text-xl text-white p-2 border-2 mr-2 cursor-default";

  return (
    <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      <div className="max-w-3xl">
        <h1 className="text-white text-3xl md:text-5xl py-5">
          Il mio stack tecnologico
        </h1>
        <h2 className="text-white text-3xl md:text-5xl py-5 mb-5">Linguaggi</h2>
        <span className={spanClass}>TypeScript</span>
        <span className={spanClass}>JavaScript</span>
        <span className={spanClass}>Java</span>
        <span className={spanClass}>CSS</span>
        <span className={spanClass}>HTML</span>
        <h2 className="text-white text-3xl md:text-5xl py-5 mt-5 mb-5">
          Librerie e framework
        </h2>
        <span className={spanClass}>React</span>
        <span className={spanClass}>Spring</span>
        <span className={spanClass}>Bootstrap</span>
        <span className={spanClass}>Tailwind</span>
        <h2 className="text-white text-3xl md:text-5xl py-5 mt-5 mb-5">
          Database
        </h2>
        <span className={spanClass}>PostgreSQL</span>
        <h2 className="text-white text-3xl md:text-5xl py-5 mt-5 mb-5">Tool</h2>

        <span className={spanClass}>Git</span>
        <span className={spanClass}>Postman</span>
        <span className={spanClass}>GitHub</span>
      </div>
    </main>
  );
};

export default Stack;
