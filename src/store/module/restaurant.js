import {salesreq} from '&a/kyw/resindexapi.js'
export let resmodule = {
    state: {
        resindex:[]
    },
    mutations: {
        upresindex(state,payload){
            state.resindex = payload
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
        }
    }
}