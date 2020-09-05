import {shangjiareq} from '&a/kyw/shangjiaapi.js'
export let shangjia = {
    state:{
        sjarr:[]
    },
    mutations:{
        upsj(state,payload){
            state.sjarr = payload
        }
    },
    actions:{
        shangjia(context){
            shangjiareq().then((res)=>{
                console.log(res)
                context.commit('upsj',res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

}