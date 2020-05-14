export default [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "DashboardOutlined",
    children: [
      {
        title: "分析页",
        path: "/dashboard/analysis",
        icon: "",
        roles:["admin"]
      },
      {
        title: "监控页",
        path: "/dashboard/monitor",
        icon: "",
        roles:["guest"]
      },
      {
        title: "工作台",
        path: "/dashboard/workplace",
        icon: "",
        roles:["admin"]
      }
    ]
  },
  {
    title: "个人页",
    path: "/person",
    icon: "UserOutlined",
    children: [
      {
        title: "个人中心",
        path: "/account/center",
        icon: "",
        roles:["admin"]
      },
      {
        title: "个人设置",
        path: "/account/settings",
        icon: "",
        roles:["guest"]
      },
    ]
  },
  {
    title: "表单页",
    path: "/form",
    icon: "FormOutlined",
    children: [
      {
        title: "基础表单",
        path: "/form/basic-form",
        icon: "",
        roles:["admin"]
      },
      {
        title: "分步表单",
        path: "/form/step-form",
        icon: "",
        roles:["guest"]
      },
      {
        title: "高级表单",
        path: "/form/advanced-form",
        icon: "",
        roles:["admin"]
      }
    ]
  },
  {
    title: "列表页",
    path: "/list",
    icon: "TableOutlined",
  },
  {
    title: "详情页",
    path: "/detail",
    icon: "ProfileOutlined",
  },
  {
    title: "结果页",
    path: "/result",
    icon: "CheckCircleOutlined",
  },
  {
    title: "异常页",
    path: "/warn",
    icon: "WarningOutlined",
  },
  {
    title: "图形编辑器",
    path: "/shape",
    icon: "HighlightOutlined",
  }
];