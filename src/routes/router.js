import React from 'react'

const Home = React.lazy(()=>import(/*webpackchunkname:Home*/'@/pages/Home' ))
const Dashboard = React.lazy(()=>import(/*webpackchunkname:Home*/'@/pages/Dashboard' ))

export default [
    {
      path: '/dashboard/workplace',
      exact: true,
      component: Home
    },
    {
      path: '/dashboard/analysis',
      exact: true,
      component: Dashboard
    }
]