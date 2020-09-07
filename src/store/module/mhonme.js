import {listfun} from "&a/homeapi.js"
export let mhome={
    state:{
        obj:[]
    }, 
    getters:{

    },
    mutations:{
        uplist(state,payload){
            state.obj=payload
        }
    },
    actions:{
        listact(context){
            listfun().then((ok)=>{
                console.log(ok)
                context.commit("uplist",ok.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}