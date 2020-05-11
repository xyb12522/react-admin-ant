import React from "react";
/**
 * BrowserRouter 相当于vue里的history
 * HashRouter 相当于vue里的hash
 */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
  NavLink
} from "react-router-dom";
import Home from './Home';
import About from './About';
import './home.css';
import Dashboard from './Dashboard';
import List from './List';
export default class Index extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about/12345/中文可以吗" activeClassName="selected">About</NavLink></li>
            <li><NavLink to={{
                  pathname: "/dashboard",
                  datas: {name: 'jack'}
                }} activeClassName="selected">Dashboard</NavLink></li>
            <li><NavLink to="/list" activeClassName="selected">List</NavLink></li>
          </ul>
          <hr />
          <Switch>
            <Redirect from='/haha' to='/list'/>
            <Route exact path="/" component={Home}/>
            <Route strict path="/about/:id/:text" component={About}/>
            <Route strict path="/dashboard" component={Dashboard}/>
            <Route strict path="/list" component={List}/>
            <Route component={()=><div>哦豁，404喽！</div>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}