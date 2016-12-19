import * as React from "react";

export interface HelloProps { compiler: string; framework: string; };

export class Hello extends React.Component<HelloProps, undefined> {
  render() {
    return (
      <div className="jumbotron">
          <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      </div>
    );
  }
}