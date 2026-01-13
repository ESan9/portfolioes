const Contact = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const user = "sanna950";
    const domain = "gmail.com";
    const subject = "Info dal sito";

    window.location.href = `mailto:${user}@${domain}?subject=${encodeURIComponent(
      subject
    )}`;
  };

  return (
    <div className="py-12 px-4 mx-auto max-w-3xl text-center">
      <h2 className="mb-4 text-3xl font-extrabold text-white">Contattami</h2>
      <p className="mb-8 text-white">
        Clicca il tasto qui sotto per scrivermi direttamente.
      </p>

      <button
        onClick={handleEmailClick}
        className="inline-flex items-center px-6 py-3 text-white rounded-full font-medium border-2 border-white hover:bg-cyan-600 transition-all cursor-pointer"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Invia una mail
      </button>
    </div>
  );
};

export default Contact;
