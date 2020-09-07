import service from "@/utils/request.js"
/**
 * 这是秒杀的数据请求
 * 
 * 
 * 
 */
export function discountsfun(){
    return new Promise((resolve,reject)=>{
        service.request({
            url:"/tehui/discounts",
            method:"get"
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })
    })
}