import "./Resume.css";
import ResumeItem from "./ResumeItem";
import resume from "../assets/pdf/mgcm.pdf";

const Resume = () => {
  return (
    <section id="resume" className="resume-container">
      <div className="resume-list-container">
        <div className="resume-list">
          <ResumeItem />
        </div>
      </div>
      <div className="resume-download-container">
        <div className="resume-download">
          {/* <a
            href={resume}
            download="Download resume"
            target="_blank"
            rel="noreferrer"
            className="resume-download-link"
          >
            <span>Download Resume...</span>
          </a> */}
        </div>
        <div className="resume-download">
          <a
            href={resume}
            download="Download resume"
            target="_blank"
            rel="noreferrer"
            className="resume-download-link"
          >
            <span>View Resume...</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
