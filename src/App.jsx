import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { PortfolioProvider } from "./store/PortfolioStore";
import AboutMe from "./pages/AboutMe";
import Line from "./components/Line";
import MyProjects from "./pages/MyProjects";

const App = () => {
  return (
    <PortfolioProvider>
      <Router>
        <Navbar />
        <div className="parent">
          <div className="left">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/myprojects" element={<MyProjects />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="right">
            <DynamicLine />
          </div>
        </div>
      </Router>
    </PortfolioProvider>
  );
};

const DynamicLine = () => {
  const location = useLocation();
  const showLines = location.pathname !== "/myprojects";

  return showLines ? (
    <>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </>
  ) : null;
};

export default App;
