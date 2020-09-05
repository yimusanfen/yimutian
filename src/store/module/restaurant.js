import {salesreq} from '&a/kyw/resindexapi.js'
import {liebiaoreq} from '&a/kyw/liebiaoapi.js'
export let resmodule = {
    state: {
        resindex:[],
        liebiaoarr:[]
    },
    mutations: {
        upresindex(state,payload){
            state.resindex = payload
        },
        upliebiao(state,payload){
            state.liebiaoarr = payload
        }
    },
    actions: {
        salesrank(context){
            salesreq().then((res)=>{
                console.log(res)
                context.commit('upresindex',res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },
        liebiao(context){
            console.log("aaaa")
            liebiaoreq().then((res)=>{
                context.commit("upliebiao",res.data)
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}