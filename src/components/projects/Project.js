import { useState, useEffect } from "react";

const Project = (props) => {
  const [clickZone, setClickZone] = useState(false);

  useEffect(() => {
    console.log(clickZone);
  }, [clickZone]);
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
        >
          Tap To Open
        </div>
      ) : null}
    </div>
  );
};

export default Project;
