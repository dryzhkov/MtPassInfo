import * as React from "react";
import Header from "./common/Header";
import MtPassInfo from "./common/MtPassesInfo";

const MtPassesPage = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="jumbotron">
          <MtPassInfo />
      </div>
    </div>
  );
};

export {MtPassesPage};