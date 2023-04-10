export default {
  // 企业微信sdk配置参数获取
  getQywxConfig: '/wechat/auth/wechat_js_sdk',

  // 判断当前账号是否授权过企微
  checkQywxAuthorize: '/wechat/auth/get_authorizer_id',

  // 
  categoryList: '/Home/Apis/sampleList',

  // 注册接口
  register: '/api/auth/register',

  // 登录接口
  login: '/api/auth/login',

  // 主页出行快讯数据
  travelList: '/api/rest/travelList',

  // 车票数据 
  queryList: '/api/rest/query',

  // 车票详情
  ticketList: '/api/rest/ticket',

  // 乘客列表
  passengersList:'api/rest/passengers',

  // 订单列表
  orderList:'/api/rest/orderList',
}
