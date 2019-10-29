import * as React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import "./favicon.png";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const TopNav = () => {
  const [scrollPosition, setScrollPosition] = React.useState(true);
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;
      if (isTop !== scrollPosition) {
        setScrollPosition(isTop);
        console.log(scrollPosition);
      }
    });
  });

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={0}
      transitionLeaveTimeout={100}
    >
      {scrollPosition && (
        <div className="header-top">
          <Link className="header-link" to="/">
            <img className="logo" src="favicon.png" alt="graphql react" />
            <div className="title">GraphQL Jobs</div>
          </Link>
          <Link className="header-link-alt" to="/allJobs">
            <div>See all jobs</div>
          </Link>
        </div>
      )}
      {!scrollPosition && (
        <div className="header-scrolled">
          <Link className="header-link" to="/">
            <img className="logo" src="favicon.png" alt="graphql react" />
            <div className="title">GraphQL Jobs</div>
          </Link>
          <Link className="header-link-alt" to="/allJobs">
            <div>See all jobs</div>
          </Link>
        </div>
      )}
    </ReactCSSTransitionGroup>
  );
};

export default TopNav;
