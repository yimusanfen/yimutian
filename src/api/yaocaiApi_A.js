import service from "@/utils/request.js"

// import url from "./url/index.js"

export function linkdemoA(){
    return new Promise((resolve,reject)=>{
        service.request({
            url:"/yaocaiA/meiren",
            method:"get"
        }).then((ok)=>{
            resolve(ok)
            console.log(ok)
        }).catch((err)=>{
            reject(err)
        })
    })
}