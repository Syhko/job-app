import * as React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import "./favicon.png";

const TopNav = () => {
  return (
    <div className="header-top">
      <Link className="header-link" to="/">
        <img className="logo" src="favicon.png" alt="graphql react" />
        <div className="title">GraphQL Jobs</div>
      </Link>
    </div>
  );
};

export default TopNav;
