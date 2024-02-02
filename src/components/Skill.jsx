import "./Skill.css";
import SKILL_ITEMS from "../data/constant";
import AOSAnimation from "./AOSAnimation";

export const Skill = () => {
  return (
    <>
      <AOSAnimation animation="fade-up" duration={2000} delay={100}>
        <div className="skill-item-container">
          {SKILL_ITEMS.map((skill_items) => {
            return (
              <div className="skill-item" key={skill_items.title}>
                <img
                  srcSet={`${skill_items.img} 320w, ${skill_items.img} 680w, ${skill_items.img}   960w, ${skill_items.img} 1980w`}
                  className="skill-img"
                  src={skill_items.img}
                  alt={skill_items.title}
                />
                {/* <h3 className="skill-title">{skill.title}</h3> */}
              </div>
            );
          })}
        </div>
      </AOSAnimation>
    </>
  );
};

export default Skill;
