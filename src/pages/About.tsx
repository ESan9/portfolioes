import Foto_CV from "../assets/img/Foto_CV.jpg";
import Emanuele_Sanna_CV from "../assets/pdf/Emanuele_Sanna_CV.pdf";

const About = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      <div className="max-w-3xl">
        <img
          src={Foto_CV}
          alt="La mia immagine"
          className="w-50 border-5 border-white rounded-full"
          width="200"
          height="200"
        ></img>
        <h1 className="text-white text-3xl md:text-5xl py-5">
          Mi chiamo Emanuele.
        </h1>

        <h2 className="text-2xl text-white mb-5 leading-relaxed">
          Junior Developer con background in <strong>Consulenza ICT</strong>.
          <br />
        </h2>
        <p className="text-xl text-white mb-10 leading-relaxed">
          Considero la mia esperienza multidisciplinare come una serie di
          feature branch di Git: ogni percorso ha aggiunto valore e ha affinato
          le mie competenze. Oggi, tutto quel codice è stato mergiato nel main
          branch: la programmazione.
          <br />
          Il mio focus è <strong>scrivere codice pulito e mantenibile</strong>
          , partendo da un back end robusto e progettando interfacce utente
          intuitive e accessibili per il front end.
          <br />
          L'esperienza in consulenza mi ha allenato al{" "}
          <strong>problem solving</strong> e alla gestione delle scadenze in
          contesti complessi, skill indispensabili nel mestiere dello sviluppo.
          <br />
          Mi piace ascoltare e provare a comprendere il punto di vista della
          persona con cui parlo.
          <br />
          Penso che il <strong>team work</strong> sia fondamentale per
          raggiungere il miglior risultato possibile, attenuando i bias
          cognitivi di ognuno.
        </p>

        <span className="hover:bg-cyan-600 transition-colors text-sm md:text-xl text-white p-2 border-2">
          {" "}
          <a href={Emanuele_Sanna_CV}>Il mio CV </a>
        </span>
      </div>
    </main>
  );
};

export default About;
