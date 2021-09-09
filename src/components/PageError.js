import React from "react";

import "./styles/PageError.css";
import Error3 from "../images/error-503.svg";

function PageError(props) {
  return (
    <div className="PageError">
      <img className="logo505" src={Error3} alt="Error 505" />
    </div>
  );
}

export default PageError;
