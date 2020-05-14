import React from 'react'

const Home = React.lazy(()=>import(/*webpackchunkname:Home*/'@/pages/Home' ))
const Dashboard = React.lazy(()=>import(/*webpackchunkname:Home*/'@/pages/Dashboard' ))
const Not404 = React.lazy(()=>import(/*webpackchunkname:Home*/'@/pages/error/404' ))

export default [
    {
      path: '/home',
      exact: true,
      component: Home
    },
    {
      path: '/dashboard/workplace',
      exact: true,
      component: Home
    },
    {
      path: '/dashboard/analysis',
      exact: true,
      component: Dashboard
    },
    {
      path: '/error/404',
      exact: true,
      component: Not404
    }
]