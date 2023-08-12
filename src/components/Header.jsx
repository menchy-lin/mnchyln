import { useState, useRef, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // To handle clicks outside the menu and close it
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.classList.add("header-menu-open");
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.classList.remove("header-menu-open");
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.classList.remove("header-menu-open");
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header>
      {/* Background backdrop */}
      {isMenuOpen && <div className="header-menu-backdrop" />}

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
        <div>
          <Link to="/mnchyln">
            <img className="navbar-logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <FaTimes style={{ color: "#333" }} />
          ) : (
            <FaBars style={{ color: "#333" }} />
          )}
        </div>

        <div className="navbar-menu">
          <div className="navbar-item-column navbar-item-column-1">
            <div className="navbar-item-1">
              <ScrollLink
                className="resume"
                to="resume"
                smooth={true}
                duration={900}
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                Resume
              </ScrollLink>
            </div>
            <div className="navbar-item-2">
              <ScrollLink
                className="notify"
                to="contact"
                smooth={true}
                duration={900}
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                Notify Me
              </ScrollLink>
            </div>
          </div>
          <div className="navbar-item-column navbar-item-column-2">
            {isMenuOpen && (
              <div
                className={`header-close-icon ${isMenuOpen ? "active" : ""}`}
                onClick={handleMenuToggle}
              >
                <FaTimes
                  style={{
                    color: "var(--color-light-violet)",
                    fontSize: "1.7rem",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
