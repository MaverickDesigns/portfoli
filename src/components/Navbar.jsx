import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import "./Navbar.css";
import PortfolioContext from "../store/PortfolioStore";

const Navbar = () => {
  let { setTab } = useContext(PortfolioContext);
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="nav-link nav-link-icon"
        onClick={() => setTab("Home")}
      >
        <IoHomeSharp />
      </Link>
      <Link to="/about" className="nav-link" onClick={() => setTab("About")}>
        About
      </Link>
      <Link
        to="/projects"
        className="nav-link"
        onClick={() => setTab("Projects")}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className="nav-link"
        onClick={() => setTab("Contact")}
      >
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;