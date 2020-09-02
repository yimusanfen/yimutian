import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {seckill} from './module/seckill.js'
import {under} from "./module/under.js"
import {underway} from "./module/underway.js"
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    seckill,
    under,
    underway
  }
})
