export default [
  // 配置路由
  {
    path: '/user',
    routes: [
      { path: '/user/login', component: './login', title: '登录' },
    ],
  },

  // 配置路由
  {
    path: '/',
    component:'@/layouts/BasicLayout',//布局组件
    // wrappers:['@/'],//路由守卫
    routes: [
      { path: '/', component: './detail', title: '通知公告' },
      { path: '/imobx', component: '@/pages/imobx', title: 'imobx' },
    ],
  },
]
