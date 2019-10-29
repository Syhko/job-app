import * as React from "react";
import "./style.scss";
import JobTicket from "./JobTicket";
import Description from "./Description";
import { Query } from "react-apollo";
import { JOBS } from "./graphql";
import ListLoader from "../../components/loaders/ListLoader";

const QueryContainer = ({ handleClick }) => {
  const [query, setQuery] = React.useState("");

  return (
    <div className="list">
      <div className="input-wrapper">
        <input
          className="search-input"
          placeholder="Look for a job..."
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <Query
        query={JOBS}
        variables={{
          input: { type: null, slug: `${query}` }
        }}
      >
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
