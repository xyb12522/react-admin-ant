import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '@/pages/layout/Layout';
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
      <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
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
            {/* <Route exact path="/" render={() => <Redirect to="/home" push />} />
            <Route path="/" component={Layout} />
            <Route path="/404" component={()=><div>---404---!</div>} />
            <Route path="/login" component={()=><div>---longin---!</div>} /> */}
            <Route component={()=><div>---notfound--404---!</div>} />
        </Switch>
      </Router>
      </Suspense>
    )
  }
}
export default Routes;