import Vue from 'vue'
import Vuex from 'vuex'

import {resmodule} from './module/restaurant.js'
import {shangjia} from './module/shangjia.js'
Vue.use(Vuex)
import {mhome} from "./module/mhonme.js"
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    resmodule,
    shangjia,
    mhome
  }
})
