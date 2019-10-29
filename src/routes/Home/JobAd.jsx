import React from "react";
import "../../components/Navigation/favicon.png";

const JobAd = ({ title, company, logoUrl, cities, countries }) => {
  function checkName(array) {
    if (array.length !== 0) {
      return array[0].name;
    }
    return "";
  }
  return (
    <div className="job-ad-wrapper">
      <img className="job-ad-img" src="favicon.png" alt="company logo" />
      <div className="left-wrapper">
        <div className="job-title">{title}</div>
        <div className="company-name">{company.name}</div>
      </div>
      <div className="right-wrapper">
        <div>{checkName(cities)}</div>
        <div>{checkName(countries)}</div>
      </div>
    </div>
  );
};

export default JobAd;
