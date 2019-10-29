import React from "react";
import { Link } from "react-router-dom";

const SlideBar = () => {
  return (
    <div>
      <div className="side-bar">
        <div className="side-bar-content">
          <Link to="/" className="side-bar-link">
            Home
          </Link>
          <Link to="/allJobs" className="side-bar-link">
            All jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
