import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {mtdmk} from "./module/mtmk.js"

export default new Vuex.Store({
 
  modules: {
	mtdmk
  }
})
