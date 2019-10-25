import * as React from "react";
import "./style.scss";
import JobTicket from "./JobTicket";
import Description from "./Description";
import { Query } from "react-apollo";
import { JOBS } from "./graphql";
import ListLoader from "../loaders/ListLoader";

const QueryContainer = ({ handleClick }) => {
  return (
    <div className="list">
      <Query query={JOBS}>
        {({ loading, error, data }) => {
          if (loading) return <ListLoader />;
          if (error) return <p>error while loading jobs...</p>;
          return (
            <>
              {data.jobs.map(job => (
                <JobTicket
                  key={job.id}
                  title={job.title}
                  jobSlug={job.slug}
                  companySlug={job.company.slug}
                  cities={job.cities}
                  companyName={job.company.name}
                  handleClick={(...rest) => handleClick(rest)}
                />
              ))}
            </>
          );
        }}
      </Query>
    </div>
  );
};

export default QueryContainer;
