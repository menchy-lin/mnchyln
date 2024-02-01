import { useState } from "react";
import logo from "../assets/img/logo.png";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <div>
          <Link to="/">
            <img className="navbar-logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          {/* {isMenuOpen ? (
            <FaTimes style={{ color: "#dedede" }} />
          ) : (
            <FaBars style={{ color: "#dedede" }} />
          )} */}
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <ScrollLink
              className="resume"
              to="resume"
              smooth={true}
              duration={900}
            >
              Resume
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink
              className="notify"
              to="contact"
              smooth={true}
              duration={900}
            >
              Notify Me
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
