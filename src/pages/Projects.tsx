import homeP from "../assets/img/HomeP.jpg";
const projectList = [
  {
    id: "1",
    title: "Vetrina Segnali, Full stack web app",
    image: homeP,
    link: "https://segnaliart.vercel.app/",
    tags: ["TypeScript", "React", "Tailwind", "Java", "Spring", "PostgreSQL"],
    description:
      "L'obiettivo è stato sviluppare un sito vetrina completo per un negozio di artigianato, diviso in due applicativi distinti (Backend API e Frontend Client). Il sistema permette la gestione completa di un catalogo prodotti, categorie e upload di immagini, con un'area riservata protetta per l'amministrazione. L'avvio del db richiede circa 50 secondi.",
  },
];

const Projects = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      {" "}
      <h1 className="text-3xl md:text-5xl text-white mb-8">I miei progetti</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project) => (
          <div key={project.id} className="group flex flex-col">
            <div className="overflow-hidden rounded-lg border-2 border-white mb-4">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>

            <h2 className="text-white text-xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-white/70 text-sm mb-4">Tecnologie utilizzate</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs md:text-sm text-white px-3 py-1 border border-white/40 hover:bg-cyan-600 hover:border-cyan-600 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-white/70 text-sm my-4">{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
