import Header from "./Header";
import About from "./About";
import Skill from "./Skill";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <About />
      <Skill />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
