import Vue from 'vue'
import Vuex from 'vuex'

import {resmodule} from './module/restaurant.js'
import {shangjia} from './module/shangjia.js'
Vue.use(Vuex)
import {mhome} from "./module/mhonme.js"
import {hxhome} from './module/hxhome.js'
import {seckill} from './module/seckill.js'
import {under} from "./module/under.js"
import {underway} from "./module/underway.js"
import {zhuanqu} from "./module/friuts.js"
import {tehui} from "./module/discounts.js"

import {linkdemoA} from "@/api/yaocaiApi_A.js"
export default new Vuex.Store({
  state: {
    objA:[],
  },
  mutations: {
    pageData_A(state,payload){
      state.objA=payload
    },
  },
  actions: {
    // 进行异步的请求
    vuexaxiosA(store){
      // 进行数据请求
      linkdemoA().then((ok)=>{
          console.log(ok.data)
          // 把数据存储到 state中，（必须通过mutations来进行修改）
      store.commit("pageData_A",ok.data)
      })
  },
  },
  modules: {
    resmodule,
    shangjia,
    mhome,
    hxhome,
    seckill,
    under,
    underway,
    zhuanqu,
    tehui
   
  }
})