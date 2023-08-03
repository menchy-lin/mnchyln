import { useState, useEffect } from "react";
import arrowUpViolet from "../assets/img/arrow-up-violet.png";

import "./ScrollButton.css";

const ScrollButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <img
      className={`btn-style ${showTopBtn ? "show" : ""}`}
      onClick={goToTop}
      src={arrowUpViolet}
    />
  );
};

export default ScrollButton;
