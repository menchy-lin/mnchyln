import "./Footer.css";
import { TbNoCopyright } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-sub-container">
        <TbNoCopyright className="footer-copyright-icon" />
        <span>
          Made by <span className="footer-text-violet">mnchyln</span>. 2023.
        </span>
      </div>
      <div className="footer-sub-container">
        <a
          href="https://icons8.com/"
          target="_blank"
          rel="noreferrer"
          className="footer-icons8"
        >
          icons8
        </a>
      </div>
    </footer>
  );
};

export default Footer;
