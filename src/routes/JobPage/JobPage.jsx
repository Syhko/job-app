import React from "react";
import "./style.scss";
import { Query } from "react-apollo";
import { JOB } from "../AllJobs/graphql";
import Markdown from "react-markdown";
import Footer from "../../components/Navigation/Footer";
import { Link } from "react-router-dom";
import SlideBar from "../../components/Navigation/SlideBar";
const JobPage = ({ ...props }) => {
  const { companySlug, jobSlug } = props.location.state;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="job-page-container">
      <SlideBar />
      <Query
        query={JOB}
        variables={{
          input: { companySlug, jobSlug }
        }}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div>
                <div className="polygon" />
                <div className="leaning-banner" />
                <div style={{ height: "100vh" }} />
              </div>
            );
          if (error) return <p>error on job details...</p>;
          let { job } = data;
          return (
            <>
              <div className="polygon" />
              <div className="leaning-banner">
                <div className="job-page-title">{job.title}</div>
                <div className="job-page-company">{job.company.name}</div>
              </div>
              <Markdown
                source={job.description}
                className="job-page-description"
              />
            </>
          );
        }}
      </Query>
      <Footer />
    </div>
  );
};

export default JobPage;
