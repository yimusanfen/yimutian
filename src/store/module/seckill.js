import{listfun} from "@/api/fsyapi/listapi.js"

export let seckill={
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
                //调用mutations修改state的数据"
                context.commit("uplist",ok.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}