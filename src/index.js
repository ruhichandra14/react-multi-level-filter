import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/header";
import LoginComponent from "./components/login";

const FilterApp = () => {
  return (
        <React.Fragment>
          <HeaderComponent/>
          <LoginComponent/>
        </React.Fragment>
  ) 
};

ReactDOM.render(<FilterApp />, document.getElementById("app"));