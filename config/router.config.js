export default [
  
  // 注册路由
  {
    path: '/register',
    routes: [
      { path: '/register', component: './register', title: '注册' },
    ],
  },

  // 登录路由
  {
    path: '/login',
    routes: [
      { path: '/login', component: './login', title: '登录' },
    ],
  },

  // 全部咨询路由
  {
    path: '/info',
    routes: [
      { path: '/info', component: './info', title: '全部咨询' },
    ],
  },

  // 底部切换路由
  {
    path: '/',
    component: '@/layouts/BasicLayout',//布局组件
    // wrappers:['@/'],//路由守卫
    routes: [
      { path: '/', component: './home', title: '首页' },
      { path: '/user', component: './user', title: '我的' },
      { path: '/services', component: './servicess', title: '客服' },
      { path: '/orderList', component: './orderList', title: '订单' },
    ],
  },
]
