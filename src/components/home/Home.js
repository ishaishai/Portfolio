import "./home.css";
import workspace from "../../assets/Workspace.jpg";
import { BsArrowDown } from "react-icons/bs";

const Home = () => {
  return (
    <div id="Home" className="home-container">
      <div className="home-segment">
        <span className="home-title-first">Hi. </span>
        I'm Ishai.
        <div className="home-scroll">
          <a href="#About">
            Scroll <br />
            <br />
            down
            <BsArrowDown />
          </a>
        </div>
      </div>
      <div className="home-segment">
        <img className="home-img" src={workspace} />
      </div>
    </div>
  );
};

export default Home;
