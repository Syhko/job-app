import * as React from "react";
import "./style.scss";

const ApplyButton = ({ applyUrl }) => {
  return (
    <div className="apply-button-container">
      <button
        type="button"
        className="apply-button"
        onClick={() => window.open(`${applyUrl}`, "_blank")}
      >
        Apply!
      </button>
    </div>
  );
};

export default ApplyButton;
