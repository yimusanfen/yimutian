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




export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
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