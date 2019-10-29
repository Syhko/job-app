import * as React from "react";
import "./style.scss";
import Description from "./Description";
import { Query } from "react-apollo";
import { JOB } from "./graphql";
import JobLoader from "../../components/loaders/JobLoader";

const QueryContainer = ({ companySlug, jobSlug }) => (
  <Query
    query={JOB}
    variables={{
      input: { companySlug: `${companySlug}`, jobSlug: `${jobSlug}` }
    }}
  >
    {({ loading, error, data }) => {
      if (loading)
        return (
          <div className="desc">
            <JobLoader />
          </div>
        );
      if (error) return <p>error on job details...</p>;
      const { job } = data;
      return (
        <Description
          title={job.title}
          companyName={job.company.name}
          description={job.description}
          applyUrl={job.applyUrl}
        />
      );
    }}
  </Query>
);
export default QueryContainer;
