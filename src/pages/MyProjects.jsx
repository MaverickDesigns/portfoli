import Line from "../components/Line";
import ProjectCard from "../components/ProjectCard";
import "./MyProjects.css";

const MyProjects = () => {
  const projectArray = [
    {
      img: "images/extreame.jpg",
      FigmaURL:
        "https://www.figma.com/proto/n63W4IGj7kh6wk3Q8cv918/Untitled?page-id=0%3A1&node-id=1-24&node-type=FRAME&viewport=448%2C-100%2C0.19&t=z4utrWICjSXbNU0z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A24&show-proto-sidebar=1",
      projectTitle: "Extreme Cycle Design",
      projectType: "App UI Design",
    },
    {
      img: "images/safari.jpg",
      FigmaURL:
        "https://www.figma.com/proto/eY3wXEXEndfLymmzZpgj7P/Untitled?page-id=0%3A1&node-id=8-565&starting-point-node-id=8%3A565&t=6r38K7EKYR0Arheh-1",
      projectTitle: "Tata Car Design",
      projectType: "Web UI Design",
    },
    {
      img: "images/Fruti.jpg",
      FigmaURL:
        "https://www.figma.com/proto/jnc84Y9xciPfiZiWNPIcfg/Fruity-Fizz?page-id=0%3A1&node-id=41-88&scaling=contain&content-scaling=fixed&t=xHNkyixOKYxHC5H0-1",
      projectTitle: "Random",
      projectType: "UI Design",
    },
  ];
  return (
    <>
      <div className="box left">
        {projectArray.map((proj) => (
          <ProjectCard proj={proj} />
        ))}
      </div>
    </>
  );
};

export default MyProjects;
