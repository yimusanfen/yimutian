import service from '@/utils/request.js';
export function jypjfun() {
	return new Promise((resolve, reject) => {
		service.request({
			url: "/jypjdata",
			method: "get"
		}).then((ok) => {
			resolve(ok);
		}).catch((err) => {
			reject(err);
		})
	})
}
