import profile from "../assets/img/h-rmbg-w-effect.png";
import "./About.css";
import { useState, useEffect } from "react";

const About = () => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Delay the removal of initial font size to ensure proper loading
    const timeout = setTimeout(() => {
      setInitialLoad(false);
    }, 100);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className="about-container">
        <div className="about-border">
          <div className="about-tag-container">
            <div className="about-tag">
              <span className="about-tag-1">Graphic</span> &
              <span className="about-tag-2">Web</span>{" "}
            </div>
            <div
              className={`about-dev-container ${
                initialLoad ? "about-dev-initial-load" : ""
              }`}
            >
              <svg className="about-svg" viewBox="0 0 1160 200">
                <symbol id="s-text">
                  <text textAnchor="middle" x="50%" y="80%" fontSize="128px">
                    Designer
                  </text>
                </symbol>
                <g className="g-ants">
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                </g>
              </svg>
            </div>
          </div>
          <div className="about-img-container">
            <img
              className="about-img-profile"
              src={profile}
              alt="My image profile"
            />
            <div className="about-name">
              <div className="noisy">Martin Glenn Marmol</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
