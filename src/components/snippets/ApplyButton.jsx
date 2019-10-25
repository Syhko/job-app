import * as React from "react";
import "./style.scss";

const ApplyButton = ({ applyUrl }) => {
  return (
    <button
      type="button"
      className="apply-button"
      onClick={() => window.open(`${applyUrl}`, "_blank")}
    >
      Apply!
    </button>
  );
};

export default ApplyButton;
