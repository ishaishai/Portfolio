import "./about.css";
import Worker from "../../assets/Worker.svg";
const About = () => {
  return (
    <div className="about-container" id="About">
      <div className="about-title">
        About
        <div className="about-title-border"></div>
      </div>
      <div className="about-subcontainer">
        <img src={Worker} className="about-img" />
        <div className="about-info">
          <div className="about-info-title">I'm Ishai Yaish.</div>
          Web Apps Developer
          <div className="about-info-details">
            Ambitious B.sc Computer Science graduate and a Full Stack Engineer,
            looking for a backend/frontend/full-stack position.
            <br />
            feel free to walk around and visit my github page also.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
