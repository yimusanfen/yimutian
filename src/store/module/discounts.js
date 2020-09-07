import {discountsfun} from "@/api/fsyapi/discountsapi.js"

  

export let tehui={
    state:{
      arr:[]
    },
    getters:{

    },
    mutations:{
        dislist(state,payload){
           state.arr=payload
       }
    },
    actions:{
        tehuilist(context){
            discountsfun().then((ok)=>{
                console.log(ok)
                 //调用mutations修改state的数据"
               context.commit("dislist",ok.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}