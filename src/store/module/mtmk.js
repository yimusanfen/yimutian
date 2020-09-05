import {listfun} from '&a/mt.js'

export let mtdmk={
	state: {
		arr1:[]
	},
	mutations: {
		uplist(state,payload){
			state.arr1=payload;
		}
	},
	actions: {
		listact(context){
			listfun()
			.then((ok)=>{
				console.log(ok);
				
				context.commit("uplist",ok.data);
				
				console.log(ok.data);
			})
			.catch((err)=>{
				console.log(err)
			})
		}
	},
	getters:{
		
	}
}