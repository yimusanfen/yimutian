import service from '&u/request.js'
/**
 * 商品评价请求
 */

export function shangjiareq(){
    return new Promise((resolve,reject)=>{
        service.request({
            url:"/res/details/eval",
            method:"get"
        }).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}