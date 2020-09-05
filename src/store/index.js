import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
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
  }
})
