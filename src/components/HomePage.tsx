import * as React from "react";
import Header from "./common/Header";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="jumbotron">
          <h1>Hello from 1 and 2!</h1>
      </div>
    </div>
  );
};

export default HomePage;