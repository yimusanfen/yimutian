import service from "../utils/request.js"
// import { resolve, reject } from "core-js/fn/promise"
export function listfun(){
    return new Promise((resolve,reject)=>{
        service.request({
            url:"/home/listdata",
            method:"get"
        }).then((ok)=>{
            resolve(ok )
        }).catch((err)=>{
            reject(err)
        })
    })
}