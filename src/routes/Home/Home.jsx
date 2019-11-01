import React from "react";
import "./style.scss";
import "../../components/Navigation/favicon.png";
import { Query } from "react-apollo";
import { JOBS } from "../AllJobs/graphql";
import JobAd from "./JobAd";
import TopNav from "../../components/Navigation/TopNav";
import Footer from "../../components/Navigation/Footer";
import SlideBar from "../../components/Navigation/SlideBar";
import JobLoader from "../../components/loaders/JobLoader";

const Home = () => {
  return (
    <div>
      <TopNav />
      <SlideBar />
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
                    key={job.id}
                    id={job.id}
                    jobSlug={job.slug}
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
      <Footer />
    </div>
  );
};

export default Home;
