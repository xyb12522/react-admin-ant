import React from 'react';
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import routeList from "@/routes/router";

class Content extends React.Component {
  render() {
    return (
      <>
      <Switch>
        <Redirect exact from="/" to="/dashboard/analysis" />
        {routeList.map((route) => {
          console.log(route.path);
          return (
            <Route
              
              path={route.path}
              key={route.path}
              component={route.component}
            />
          );
        })}
        {/* <Redirect to="/error/404" /> */}
        <Route component={()=><div>---notfound--404--son-!</div>} />
      </Switch>
      </>
    )
  }
}
export default withRouter(Content);