import "./projects.css";
import Project from "./Project";
import Dashboard from "../../assets/dashboard.svg";
import Portfolio from "../../assets/Portfolio.png";
import Thought from "../../assets/bubble-speech.png";
const Projects = () => {
  const myprojects = [
    { name: "Dashboard Generator", src: Dashboard },
    { name: "Thoughts Wall", src: Thought },
    { name: "Portfolio", src: Portfolio },
  ];
  return (
    <div className="skills-container" id="Projects">
      <div className="about-title">
        Projects
        <div className="about-title-border"></div>
      </div>
      <div className="projects-subcontainer">
        {myprojects.map((item) => (
          <Project title={item.name} src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
