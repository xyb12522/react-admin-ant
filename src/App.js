import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './pages/Home';

export default () => (
  <Router>
      <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" push />} />
          <Route path="/home" component={Home} />
          <Route path="/404" component={()=><div>---404---!</div>} />
          <Route path="/login" component={()=><div>---longin---!</div>} />
          <Route component={()=><div>---notfound--404---!</div>} />
      </Switch>
  </Router>
);
