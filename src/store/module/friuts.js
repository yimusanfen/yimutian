import {friutsfun} from "@/api/fsyapi/friutsapi.js"

  

export let zhuanqu={
    state:{
      arr:[]
    },
    getters:{

    },
    mutations:{
        datalist(state,payload){
           state.arr=payload
       }
    },
    actions:{
        zhuanqulist(context){
            friutsfun().then((ok)=>{
                console.log(ok)
                 //调用mutations修改state的数据"
               context.commit("datalist",ok.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}