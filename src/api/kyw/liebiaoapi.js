import service from '&u/request.js'
/**
 * 首页  餐厅食材  topcon列表
 */
export function liebiaoreq(){
    return new Promise((resolve,reject)=>{
        service.request({
            url:"res/index/topcon/liebiao",
            method:"get"
        }).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}