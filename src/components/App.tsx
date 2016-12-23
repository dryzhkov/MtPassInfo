import * as React from "react";

export interface AppProps { children: React.Component<any, any> }

const App = (props: AppProps) => {
  return (
    <div className="container-fluid">
      {props.children}
    </div>
  );
};

export {App};