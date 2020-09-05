import service from '@/utils/request.js'

export function listfun(){
	return new Promise((resolve,reject)=>{
		service.request({
			url:"/fsdata",
			method:"get"
		})
		.then((ok)=>{
			resolve(ok)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}
