import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
const AOSAnimation = ({ children, animation, duration = 500, delay = 0 }) => {
  useEffect(() => {
    AOS.init({
      duration,
      delay,
    });
    AOS.refresh();
  }, [delay, duration]);

  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};

export default AOSAnimation;
