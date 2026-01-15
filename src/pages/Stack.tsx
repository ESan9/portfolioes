const Stack = () => {
  const spanClass =
    "hover:bg-cyan-600 transition-colors text-sm md:text-xl text-white p-2 border-2 mr-2 cursor-default";
  const h1Class = "text-white text-3xl md:text-5xl";
  const h2Class = "text-white text-2xl md:text-3xl py-8 mb-5";

  const stackMap = [
    {
      id: "1",
      name: "Linguaggi",
      value: ["TypeScript", "JavaScript", "Java", "CSS", "HTML"],
    },
    {
      id: "2",
      name: "Librerie e framework",
      value: ["React", "Spring", "Bootstrap", "Tailwind"],
    },
    {
      id: "3",
      name: "Database",
      value: ["PostgreSQL"],
    },
    {
      id: "4",
      name: "Tool",
      value: ["Git", "Postman", "GitHub"],
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      <div className="max-w-3xl">
        <h1 className={h1Class}>Il mio stack tecnologico</h1>
        {stackMap.map((stack) => (
          <div key={stack.id}>
            <h2 className={h2Class}>{stack.name}</h2>
            {stack.value.map((value) => (
              <span key={value} className={spanClass}>
                {value}
              </span>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Stack;
