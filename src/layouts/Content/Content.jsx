import React, { Suspense } from 'react';
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import routeList from "@/routes/router";
import Loading from '@/components/loading/Loading';

class Content extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          {routeList.map((route) => {
            // console.log(route.path);
            return (
              <Route
                exact
                path={route.path}
                key={route.path}
                component={route.component}
              />
            );
          })}
          {/* 整个页面404 */}
          {/* <Redirect to="/404" /> */}
          {/* 子路由页面404 */}
          <Redirect to="/error/404" />
          {/* <Route component={()=><div>---notfound--404--son-!</div>} /> */}
        </Switch>
      </Suspense>
    )
  }
}
export default withRouter(Content);