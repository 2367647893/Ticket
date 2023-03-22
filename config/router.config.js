export default [
  // 配置路由
  // {
  //   path: '/user',
  //   routes: [
  //     { path: '/user/login', component: './login', title: '登录' },
  //     { path: '/user/login', component: './login', title: '登录' },
  //   ],
  // },

  // 配置路由
  {
    path: '/',
    component:'@/layouts/BasicLayout',//布局组件
    // wrappers:['@/'],//路由守卫
    routes: [
      { path: '/', component: './home', title: '首页' },
      { path: '/user', component: './user', title: '我的' },
      { path: '/login', component: './login', title: '登录' },
      { path: '/register', component: './register', title: '注册' },
      { path: '/services', component: './servicess', title: '客服' },
      { path: '/orderList', component: './orderList', title: '订单' },
    ],
  },
]
