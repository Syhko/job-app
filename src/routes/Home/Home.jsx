import React from "react";
import "./style.scss";
import "../../components/Navigation/favicon.png";
import { Query } from "react-apollo";
import { JOBS } from "../QueryZone/graphql";
import JobAd from "./JobAd";
import TopNav from "../../components/Navigation/TopNav";
import JobLoader from "../../components/loaders/JobLoader";

const Home = () => {
  return (
    <div>
      <TopNav />
      <div className="gradient">
        <div className="main-title">Find a job. Work with GraphQL!</div>
      </div>
      <div className="middle-box">
        <Query
          query={JOBS}
          variables={{
            input: { type: null, slug: null }
          }}
        >
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div style={{ height: "1300px" }}>
                  <JobLoader />
                </div>
              );
            if (error) return <p>error on job details...</p>;
            let { jobs } = data;
            jobs = jobs.slice(0, 10);
            return (
              <>
                {jobs.map(job => (
                  <JobAd
                    title={job.title}
                    company={job.company}
                    cities={job.cities}
                    countries={job.countries}
                  />
                ))}
              </>
            );
          }}
        </Query>
      </div>
      <div className="footer-wrapper">
        <div className="footer-content">Powered by React and GraphQL API</div>
        <div className="footer-content">Made by Syhko</div>
      </div>
    </div>
  );
};

export default Home;
