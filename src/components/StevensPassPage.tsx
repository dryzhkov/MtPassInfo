import * as React from "react";
import Header from "./common/Header";
import MtPassInfo from "./common/MtPassInfo";

const StevensPassPage = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="jumbotron">
          <h1>Stevens Pass</h1>
          <MtPassInfo id="10" />
      </div>
    </div>
  );
};

export default StevensPassPage;