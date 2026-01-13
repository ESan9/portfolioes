import Foto_CV from "../assets/Foto_CV.png";
const cvFoto = {
  image: Foto_CV,
};

const About = () => {
  return (
    <div className="min-h-screen bg-project">
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="max-w-3xl">
          <img
            src={cvFoto.image}
            alt="La mia immagine"
            className="w-50 border-5 border-white rounded-full"
          ></img>
          <h1 className="text-white text-3xl md:text-5xl py-5">
            Mi chiamo Emanuele.
          </h1>

          <p className="text-xl text-white mb-10 leading-relaxed py-5">
            Junior Developer con background in <strong>Consulenza ICT</strong>.
            <br />
            Dopo un percorso non lineare ho scoperto quanto sia soddisfacente
            sviluppare.
            <br />
            Il mio focus è <strong>scrivere codice pulito e mantenibile</strong>
            , partendo da un back end robusto e progettando interfacce utente
            intuitive e accessibili per il front end.
            <br />
            L'esperienza in consulenza mi ha allenato al{" "}
            <strong>problem solving</strong> e alla gestione delle scadenze in
            contesti complessi, skill indispensabili nel mestiere dello
            sviluppo.
            <br />
            Mi piace ascoltare e provare a comprendere il punto di vista della
            persona con cui parlo.
            <br />
            Penso che il <strong>team work</strong> sia fondamentale per
            raggiungere il miglior risultato possibile, attenuando i bias
            cognitivi di ognuno.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
