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
      auth: { user: "tester", pass: "tester" },
      alt: `If you'are a visitor please be advised to use the following credentials to log-in (Username and password as 'tester')`,
    },
    {
      name: "Thoughts Wall",
      src: Thought,
      link: "https://thoughtswall.herokuapp.com",
      auth: null,
      alt: null,
    },
    {
      name: "Dogs-Play (in dev)",
      src: DogPlay,
      link: "https://dogs-play-bf278.web.app",
      auth: null,
      alt: null,
    },
    {
      name: "Portfolio",
      src: Portfolio,
      link: "https://portfolio-6772a.web.app",
      auth: null,
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
