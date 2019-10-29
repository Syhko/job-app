import * as React from "react";
import "./style.scss";

const JobTicket = ({
  key,
  title,
  companyName,
  jobSlug,
  companySlug,
  handleClick,
  cities
}) => {
  function cityName() {
    if (cities.length !== 0) {
      return " - " + cities[0].name;
    }
    return "";
  }
  return (
    <div className="ticket" onClick={() => handleClick(jobSlug, companySlug)}>
      <p className="ticket-job-text">{title}</p>
      <p className="ticket-company-text">
        {companyName}
        {cityName()}
      </p>
    </div>
  );
};

export default JobTicket;
