import { useState, useEffect } from "react";

const Project = (props) => {
  const [clickZone, setClickZone] = useState(false);

  return (
    <div className="project-container">
      <div className="project-title">{props.title}</div>
      <div
        className="project-img"
        style={{ filter: clickZone ? "opacity(0.2)" : "opacity(1)" }}
        onMouseEnter={() => setClickZone(!clickZone)}
      >
        <img src={props.src ? props.src : null} />
      </div>
      {clickZone ? (
        <div
          className="project-description"
          onMouseLeave={() => setClickZone(!clickZone)}
          onClick={() => {
            window.location.href = props.link;
          }}
        >
          {props.title !== "Doggie-Date" && "Tap To Open"}
          {props.alt && <div className="project-alt">{props.alt}</div>}
        </div>
      ) : null}
    </div>
  );
};

export default Project;
