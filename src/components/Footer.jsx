import "./Footer.css";
import { TbNoCopyright } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-sub-container">
        <TbNoCopyright color="#373636" fontSize="18px" fontWeight="900" />
        <span>
          Made by <span className="footer-text-violet">mnchyln</span>. 2023.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
