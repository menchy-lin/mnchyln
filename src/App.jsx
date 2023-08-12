import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Resume from "./components/Resume";
import ViewResume from "./components/ViewResume";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import ScrollButton from "./components/ScrollButton";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/myresume" element={<ViewResume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollButton />
    </Router>
  );
};

export default App;
