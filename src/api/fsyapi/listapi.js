import service from "@/utils/request.js"
/**
 * 这是秒杀的数据请求
 * 
 * 
 * 
 */
export function listfun(){
    return new Promise((resolve,reject)=>{
        service.request({
            url:"/over/list",
            method:"get"
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })
    })
}