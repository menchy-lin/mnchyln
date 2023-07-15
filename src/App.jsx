import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollButton from "./components/ScrollButton";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/mnchyln" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollButton />
    </Router>
  );
};

export default App;
