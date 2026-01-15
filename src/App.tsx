import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Stack from "./pages/Stack";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-project">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
