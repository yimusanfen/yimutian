import service from '&u/request.js'
/**
 * 首页  餐厅食材 销量排行榜请求
 */
export function salesreq(){
    return new Promise((resolve,reject)=>{
        service.request({
            url:"res/index/sales",
            method:"get"
        }).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}