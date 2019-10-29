import React from "react";
import "./style.scss";
import Footer from "../../components/Navigation/Footer";
import TopNav from "../../components/Navigation/TopNav";
import ListContainer from "./ListContainer";
import DescriptionContainer from "./DescriptionContainer";

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
      <Footer />
    </>
  );
};

export default AllJobs;
