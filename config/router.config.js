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

  // 车票页
  {
    path: '/query',
    routes: [
      { path: '/query', component: './query', title: '车票' },
    ],
  },

  // 车票详情
  {
    path: '/ticket',
    routes: [
      { path: '/ticket', component: './ticket', title: '车票详情' },
    ],
  },

  // 订单填写
  {
    path: '/order',
    routes: [
      { path: '/order', component: './order', title: '订单填写' },
    ],
  },

  // 乘客列表
  {
    path: '/passengers',
    routes: [
      { path: '/passengers', component: './passengers', title: '乘客列表' },
    ],
  },

  // 新增乘客
  {
    path: '/passengerDetail',
    routes: [
      { path: '/passengerDetail', component: './passengerDetail', title: '新增乘客' },
    ],
  },

  // 订单详情
  {
    path: '/orderDetail',
    routes: [
      { path: '/orderDetail', component: './orderDetail', title: '订单详情' },
    ],
  },

  // 设置
  {
    path: '/setting',
    routes: [
      { path: '/setting', component: './setting', title: '设置' },
    ],
  },
   // 设置
   {
    path: '/servicess',
    wrappers: ['./auth'],//路由守卫
    routes: [
      { path: '/servicess', component: './servicess', title: '客服' },
    ],
  },

  
  // 底部切换路由
  {
    path: '/',
    component: '@/layouts/BasicLayout',//布局组件
    wrappers: ['./auth'],//路由守卫
    routes: [
      { path: '/', component: './home', title: '首页' },
      { path: '/user', component: './user', title: '我的' },
      // { path: '/services', component: './servicess', title: '客服' },
      { path: '/orderList', component: './orderList', title: '订单' },
    ],
  },
]
