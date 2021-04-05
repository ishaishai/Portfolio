import "./projects.css";
import Project from "./Project";
import Dashboard from "../../assets/dashboard.svg";
import Portfolio from "../../assets/Portfolio.png";
import Thought from "../../assets/bubble-speech.png";
const Projects = () => {
  const myprojects = [
    {
      name: "Dashboard Generator",
      src: Dashboard,
      link: "http://185.60.170.80:5050",
    },
    {
      name: "Thoughts Wall",
      src: Thought,
      link: "https://thoughtswall.herokuapp.com",
    },
    {
      name: "Portfolio",
      src: Portfolio,
      link: "https://portfolio-6772a.web.app",
    },
  ];
  return (
    <div className="skills-container" id="Projects">
      <div className="about-title">
        Projects
        <div className="about-title-border"></div>
      </div>
      <div className="projects-subcontainer">
        {myprojects.map((item) => (
          <Project title={item.name} src={item.src} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
