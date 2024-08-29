import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import face from "../assets/face.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const allNavLinks = () => {
    return location.pathname === "/" ? (
      <>
        <Link to="/new">New Task</Link>
        <Link to="/task">All Task</Link>
      </>
    ) : location.pathname === "/task" ? (
      <Link to="/new">New Task</Link>
    ) : location.pathname === "/new" ? (
      <Link to="/task">All Task</Link>
    ) : location.pathname === "/new" || location.pathname === "/edit" ? (
      <Link to="/task">All Task</Link>
    ) : null;
  };

  return (
    <div className="nav-con">
      <nav className="d-flex align-items-center justify-content-between">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="inner-nav d-flex align-items-center justify-content-between">
          {allNavLinks()}
          <img src={face} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
