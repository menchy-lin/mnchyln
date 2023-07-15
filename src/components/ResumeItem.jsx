import "./ResumeItem.css";
import RESUME_ITEM from "../data/constant";
import AOSAnimation from "./AOSAnimation";

export const ResumeItem = () => {
  return (
    <>
      <AOSAnimation animation="fade-up" duration={2000} delay={100}>
        <div className="resume-item-container">
          {RESUME_ITEM.map((resumeItem) => {
            return (
              <div className="resume-item" key={resumeItem.title}>
                <img
                  className="resume-img"
                  src={resumeItem.img}
                  alt={resumeItem.title}
                />
                <h3 className="resume-title">{resumeItem.title}</h3>
              </div>
            );
          })}
        </div>
      </AOSAnimation>
    </>
  );
};

export default ResumeItem;
