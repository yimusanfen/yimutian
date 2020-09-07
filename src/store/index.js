import Vue from 'vue'
import Vuex from 'vuex'

import {resmodule} from './module/restaurant.js'
import {shangjia} from './module/shangjia.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    resmodule,
    shangjia
  }
})
