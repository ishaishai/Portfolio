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
      link: "https://matpash.evendigitals.com",
      alt: `Test Credentials: "tester"\n*limited access`,
    },
    {
      name: "Thoughts Wall",
      src: Thought,
      link: "https://thoughtswall.herokuapp.com",
      alt: null,
    },
    {
      name: "Doggie-Date",
      src: DogPlay,
      link: "null",
      alt: `React Native App in development\n*avaliable on meet`,
    },
    {
      name: "Portfolio",
      src: Portfolio,
      link: "https://portfolio-6772a.web.app",
      alt: null,
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
          <Project
            title={item.name}
            src={item.src}
            link={item.link}
            alt={item.alt}
            auth={item.auth}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
