import "./Skill.css";
import ResumeItem from "./SkillItem";
// import resume from "../assets/pdf/mgcm.pdf";
// import AOSAnimation from "./AOSAnimation";

const Skill = () => {
  return (
    <section id="skill" className="skill-container">
      <div className="skill-sub-container">
        <div className="skill-list-container">
          <div className="skill-list">
            <ResumeItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
