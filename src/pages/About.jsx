import Button from "../components/Button";
import Indicator from "../components/Indicator";
import topTransition from "../components/topTransition";
import RandomScrollText from "../components/RandomText";
import { Link } from "react-router-dom";

const About = () => {
  const ImageWithTransition = topTransition(() => (
    <img src="./images/Scroll.jpg" alt="Profile" className="profile-image" />
  ));
  return (
    <div className="container">
      <div className="left">
        <div className="heading">
          <RandomScrollText text={"ABOUT"} />
        </div>
        <div className="main">
          <p>
            As a passionate second-year student at ICAT Design and Media
            College, I have honed my skills in UI/UX design over the past two
            years. Although I am still early in my career, my hands-on
            experience in designing has equipped me with a strong foundation in
            creating intuitive and aesthetically pleasing interfaces. I am eager
            to further develop my expertise and contribute to innovative
            projects that enhance user experiences.
          </p>
        </div>
        <Link to="/aboutme">
          <Button text="View more" />
        </Link>
      </div>
      <ImageWithTransition />
      <Indicator />
    </div>
  );
};

export default About;
