import * as React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import {App} from './components/App';
import {HomePage} from './components/HomePage';
import {MtPassesPage} from './components/MtPassesPage';

export interface RoutesProps { history: any }

const Routes = (props: RoutesProps) => {
  return (
    <Router history={props.history}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="Passes" component={MtPassesPage}/>
        </Route>
    </Router>
  );
};

export {Routes};