import * as React from "react";
import Header from "./common/Header";

export interface AppProps { children: React.Component<any, any>; }

const App = (props: AppProps) => {
  return (
    <div className="container-fluid">
      <Header />
      {props.children}
    </div>
  );
};

export {App};