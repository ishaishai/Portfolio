import "./skills.css";
import SkillsSet from "../../assets/Skillsset.svg";
const Skills = () => {
  return (
    <div className="skills-container" id="Skills">
      <div className="about-title">
        Skills
        <div className="about-title-border"></div>
      </div>
      <div className="skills-subcontainer">
        <div className="skills-info">
          <div className="skills-info-title">Skills Set</div>
          <div className="skills-info-subtitle">Frontend & Backend</div>
          <div className="skills-info-details">
            HTML, CSS, Javascript, Node.js, React, Redux and Hooks.
          </div>

          <div className="skills-info-subtitle">Databases</div>
          <div className="skills-info-details">
            Relational Databases: MySQL, PostgreSQL and SQLite
            <br />
            Non Relational Databases: MongoDB
          </div>
          <div className="skills-info-subtitle">Other Skills</div>
          <div className="skills-info-details">C, C++, Java</div>
        </div>
        <img src={SkillsSet} className="skills-img" />
      </div>
    </div>
  );
};

export default Skills;
