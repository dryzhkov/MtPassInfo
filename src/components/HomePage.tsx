import * as React from "react";
import MtPassInfo from "./common/MtPassesInfo";

const HomePage = () => {
  const mtPassFilter = [5, 10, 11]; // Mt. Pass IDs for Crystal, Snoq, and Stevens
  return (
    <div className="jumbotron">
      <h1>Crystal, Snoqualmie, Stevens</h1>
      <MtPassInfo mtPassFilter={mtPassFilter} />
    </div>
  );
};

export {HomePage};