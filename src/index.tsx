import * as React from "react";
import { render } from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import HomePage from './components/HomePage';
import {MtPassesPage} from './components/MtPassesPage';

export interface AppProps { children: React.Component<any, any> }

const App = (props: AppProps) => {
  return (
    <div className="container-fluid">
      {props.children}
    </div>
  );
};

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="passes" component={MtPassesPage}/>
        </Route>
    </Router>,
    document.getElementById("app")
);