import homeP from "../assets/HomeP.png";
const projectList = [
  {
    title: "Vetrina Segnali, Full stack web app",
    image: homeP,
    link: "https://segnaliart.vercel.app/",
    tags: ["TypeScript", "React", "Tailwind", "Java", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      {" "}
      <h2 className="text-3xl font-bold text-white mb-12">I miei progetti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, index) => (
          <div key={index} className="group flex flex-col">
            <div className="overflow-hidden rounded-lg border-2 border-white mb-4">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>

            <h3 className="text-white text-xl font-semibold mb-2">
              {project.title}
            </h3>

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
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
