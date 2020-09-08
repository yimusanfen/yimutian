import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //首页
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  //进货单
  {
    path: '/purchaselist',
    name: 'purchaselist',
    component: () => import('../views/purchaselist.vue')
  },
  //发现
  {
    path: '/discover',
    name: 'discover',
    component: () => import('../views/discover.vue')
  },
  //聊生意
  {
    path: '/talkbusiness',
    name: 'talkbusiness',
    component: () => import('../views/talkbusiness.vue')
  },
  //我的
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue')
  },
  //生意圈
  {
    path: '/businesscircle',
    name: 'businesscircle',
    component: () => import('../views/discover/businesscircle.vue')
  },
  //卖货
  {
    path: '/sell',
    name: 'sell',
    component: () => import('../views/index/maijia/shouye/sell.vue')
  },
  //餐厅食材
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('../views/index/classify/restaurant.vue')
  },
  //限时秒杀
  {
    path: '/miaosha',
    name: 'miaosha',
    component: () => import('../views/index/classify/miaosha.vue')
  },
  //拼工厂
  {
    path: '/pingongchang',
    name: 'pingongchang',
    component: () => import('../views/index/classify/pingongchang.vue')
  },
  //包基地
  {
    path: '/baojidi',
    name: 'baojidi',
    component: () => import('../views/index/classify/baojidi.vue')
  },
  //一件代发
  {
    path: '/yijiandaifa',
    name: 'yijiandaifa',
    component: () => import('../views/index/classify/yijiandaifa.vue')
  },
  // 水果基地
  {
    path: '/shuiguojidi',
    name: 'shuiguojidi',
    component: () => import( '../views/index/classify/shuiguojidi.vue')
  },
  // 品质店家
  {
    path: '/qualityshop',
    name: 'qualityshop',
    component: () => import( '../views/index/classify/qualityshop.vue')
  },
  // 产地找货
  {
    path: '/chandizhaohuo',
    name: 'chandizhaohuo',
    component: () => import( '../views/discover/chandizhaohuo.vue')
  },

  //餐厅食材【列表页】
  {
    path: '/liebiao/:index',
    name: 'liebiao',
    component: () => import( '../views/kyw/liebiao.vue')
  },
  //餐厅食材【详情页】
  {
    path: '/details/:value',
    name: 'details',
    component: () => import( '../views/kyw/details.vue')
  },
  //评价页面
  {
    path:'/evalpage/:evalobj/:isshow',
    name:'evalpage',
    component: () => import( '../views/kyw/evalpage.vue')
  },
  //购物页面
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop.vue')
  },
  {
    path: '/gongju',
    name: 'gongju',
    component: () => import('../views/index/maijia/gongju/gongju.vue')
  },
  //聊生意
  {
    path: '/liaoshengyi',
    name: 'liaoshengyi',
    component: () => import('../views/index/maijia/liaoshengyi/liaoshengyi.vue')
  },
  {
    path: '/wode',
    name: 'wode',
    component: () => import('../views/index/maijia/wode/wode.vue')
  },
  //测试1
  {
    path: '/ceshi',
    name: 'ceshi',
    component: () => import('../views/index/maijia/shouye/ceshi.vue')
  },
  //测试2
  {
    path: '/ceshi1',
    name: 'ceshi1',
    component: () => import('../views/index/maijia/shouye/ceshi2.vue')
  },
  //测试3
  {
    path: '/ceshi2',
    name: 'ceshi2',
    component: () => import('../views/index/maijia/shouye/ceshi3.vue')
  },
  //测试4
  {
    path: '/ceshi3',
    name: 'ceshi3',
    component: () => import('../views/index/maijia/shouye/ceshi4.vue')
  },
  //测试5
  {
    path: '/ceshi4',
    name: 'ceshi4',
    component: () => import('../views/index/maijia/shouye/ceshi5.vue')
  },

   //19.9专区
  {       
    path:"/zhuanqu",
    name:"zhuanqu",
    component:()=>import('../views/index/classify/miaoer/zhuanqu.vue'),
  },
  //特惠
  {
    path:"/tehui",
    name:"tehui",
    component:()=>import('../views/index/classify/miaoer/tehui.vue')
    
  },
  //详情页
  {
  path:"/details",
  name:"details", 
  component:()=>import('../views/index/classify/miaoer/details.vue')
},
  //排行榜

{
  path:"/example",
  name:"example", 
  component:()=>import('../views/index/classify/miaoer/example.vue')
},

  // 药材滋补
  {
    path: '/yaocai',
    name: 'yaocai',
    component: () => import( '../views/yaocai/yaocai.vue')
  },
  {
    path: '/yaocai_newsA',
    name: 'yaocai_newsA',
    component: () => import( '../views/yaocai/yaocai_newsA.vue')
  },
  {
    path: '/yaocai_newsB',
    name: 'yaocai_newsB',
    component: () => import( '../views/yaocai/yaocai_newsB.vue')
  },
// 购物车页面
{
  path: '/shopping',
  name: 'shopping',
  component: () => import( '../views/shopping.vue')
},
// 订单页
{
  path: '/orderForm/:xixi',
  name: 'orderForm',
  component: () => import( '../views/orderForm.vue')
},
// 搜索列表页
{
  path: '/yaocai_list',
  name: 'yaocai_list',
  component: () => import( '../views/yaocai/yaocai_list.vue')
},
{
  path: '/yaocai_listB',
  name: 'yaocai_listB',
  component: () => import( '../views/yaocai/yaocai_listB.vue')
},



  //重定向
  {
    path: '/',
    redirect: '/index'
  },
  //404
  {
    path: '*',
    name: 'none',
    component: () => import('../views/none404.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router