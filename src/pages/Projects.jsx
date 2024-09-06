import React from "react";
import Button from "../components/Button";
import Indicator from "../components/Indicator";
import "./Projects.css";
import topTransition from "../components/topTransition";
import RandomScrollText from "../components/RandomText";
import { Link } from "react-router-dom";

const Projects = () => {
  const ImageWithTransition = topTransition(() => (
    <img src="./images/Figma-img.jpg" alt="Profile" className="profile-image" />
  ));

  return (
    <div className="container">
      <div className="left">
        <div className="heading">
          <RandomScrollText text={"PROJECTS"} />
        </div>
        <div className="main">
          <p>
            Through two years of dedicated practice, my Figma designs showcase a
            blend of creativity and functionality, with a focus on user-centric
            experiences. I believe that{" "}
            <span>
              'Design is not just what it looks like and feels like. Design is
              how it works.' - Steve Jobs.
            </span>
          </p>
        </div>
        <Link to="/myprojects">
          <Button text="View my work" />
        </Link>
      </div>
      <ImageWithTransition />
      <Indicator />
    </div>
  );
};

export default Projects;
