import service from '#2/request.js';

//首页的数据请求
export function listfun() {
    return new Promise((resolve, reject) => {
        service.request({
            url: '/xiaoming',
            method: 'get'
        }).then((ok) => {
            resolve(ok)
        }).catch((err) => {
            reject(err)
        })
    })
}