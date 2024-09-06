import Button from "../components/Button";
import Indicator from "../components/Indicator";
import "./Home.css";
import topTransition from "../components/topTransition";
import RandomScrollText from "../components/RandomText";

const Home = () => {
  const ImageWithTransition = topTransition(() => (
    <img src="./images/image.jpg" alt="Profile" className="profile-image" />
  ));
  return (
    <div className="container">
      <div className="left">
        <div className="heading">
          <RandomScrollText text={"PORTFOLIO"} />
        </div>
        <div className="main">
          <h1>Taha</h1>
          <h1>Deesawala</h1>
        </div>
        <div className="sub-main">UI/UX Designer</div>
      </div>
      <ImageWithTransition />
      <Indicator />
    </div>
  );
};

export default Home;
