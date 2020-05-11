import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Mobile from './lists/Mobile';
import Pc from './lists/Pc';
export default class List extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink to="/list" activeClassName="selected">手机端</NavLink></li>
            <li><NavLink to="/list/pc" activeClassName="selected">PC端</NavLink></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/list" component={Mobile}/>
            <Route exact path="/list/pc" component={Pc}/>
            {/* <Route component={()=><div>子路由的404！</div>}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}