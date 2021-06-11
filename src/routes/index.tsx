import * as React from 'react';
import { Redirect, Router, Switch, Route, IndexRoute } from 'react-router-dom';
import Recommend from '../pages/Recommend';
import Singers from '../pages/Singers';
import Rank from '../pages/Rank';

class Routes extends React.Component {
   render() {
    return (
      <Switch>
        <Route path="/recommend" component={Recommend} />
        <Route path="/rank" component={Rank} />
        <Route path="/singers" component={Singers} />
        <Redirect from="/" to="/recommend" />
      </Switch>
    );
  }
}

export default Routes;
