import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Login from "@/pages/login/Login";

var token = true;
var role = true;

class Routes extends React.Component {
  state = {
    layoutNode: null
  };
  // componentWillMount() {
  //   const layoutNode = this.getUserInfo(menuList);
  //   this.setState({
  //     layoutNode,
  //   });
  // }
  getUserInfo(v) {
    console.log('kkkkk->', v);
    return new Promise((r, j)=>{
      if (v) {
        r(1);
      }
    });
  }
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/404" component={()=><div>---notfound--404---!</div>} />
            <Route
              path="/"
              render={() => {
                if (!token) {
                  return <Redirect to="/login" />;
                } else {
                  if (role) {
                    return <Layout />;
                  } else {
                    this.getUserInfo(token).then(() => {
                      this.setState({
                        layoutNode: <Layout />
                      });
                    });
                    return (this.state.layoutNode);
                  }
                }
              }}
            />
            {/* <Route component={()=><div>---notfound--404---!</div>} /> */}
        </Switch>
      </Router>
    )
  }
}
export default Routes;