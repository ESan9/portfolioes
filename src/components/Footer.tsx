import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-md text-white">
      <div className="flex gap-4 justify-center py-3">
        <span>
          <a href="https://www.linkedin.com/in/emanuelesanna/">
            <GrLinkedin className="text-white" size={"1.5rem"} />
          </a>
        </span>
        <span>
          <a href="https://github.com/ESan9">
            <GrGithub className="text-white" size={"1.5rem"} />
          </a>
        </span>
      </div>
      © {new Date().getFullYear()} Emanuele Sanna
    </footer>
  );
};

export default Footer;
