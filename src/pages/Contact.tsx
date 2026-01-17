import { MdMail } from "react-icons/md";

const Contact = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const user = "sanna950";
    const domain = "gmail.com";
    const subject = "Info dal sito";

    window.location.href = `mailto:${user}@${domain}?subject=${encodeURIComponent(
      subject,
    )}`;
  };

  return (
    <main className="py-12 px-4 mx-auto max-w-3xl text-center">
      <h2 className="mb-4 text-3xl font-extrabold text-white">Contattami</h2>
      <p className="mb-8 text-white">
        Clicca il tasto qui sotto per scrivermi direttamente.
      </p>

      <button
        onClick={handleEmailClick}
        className="inline-flex items-center px-6 py-3 text-white rounded-full font-medium border-2 border-white hover:bg-cyan-600 transition-all cursor-pointer"
      >
        <MdMail className="mx-2" />
        Invia una mail
      </button>
    </main>
  );
};

export default Contact;
