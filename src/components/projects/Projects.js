import "./projects.css";
import Project from "./Project";
import Dashboard from "../../assets/dashboard.svg";
import Portfolio from "../../assets/Portfolio.png";
import Thought from "../../assets/bubble-speech.png";
import DogPlay from "../../assets/dog-face.svg";
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
      name: "Dogs-Play (in dev)",
      src: DogPlay,
      link: "https://dogs-play-bf278.web.app",
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
