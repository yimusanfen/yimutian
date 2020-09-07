import {jypjfun} from '&a/jypj.js';


export let mjyxq={
	state:{
		
	},
	getters:{
		
	},
	mutations:{
		
	},
	actions:{
		jypjact(){
			jypjfun()
			.then((ok)=>{
				console.log(ok)
			})
			.catch((err)=>{
				console.log(err)
			})
		}
	}
}