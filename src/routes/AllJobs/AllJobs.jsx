import React from "react";
import "./style.scss";
import Footer from "../../components/Navigation/Footer";
import TopNav from "../../components/Navigation/TopNav";
import ListContainer from "../QueryZone/ListContainer";
import DescriptionContainer from "../QueryZone/DescriptionContainer";

const AllJobs = () => {
  const [queryParams, setQueryParams] = React.useState([null, null]);
  return (
    <>
      <TopNav />
      <div className="container">
        <ListContainer handleClick={(...rest) => setQueryParams(rest[0])} />
        {queryParams[0] !== null && (
          <DescriptionContainer
            companySlug={queryParams[1]}
            jobSlug={queryParams[0]}
          />
        )}
      </div>
      <div className="footer-wrapper">
        <div className="footer-content">Powered by React and GraphQL API</div>
        <div className="footer-content">Made by Syhko</div>
      </div>
    </>
  );
};

export default AllJobs;
