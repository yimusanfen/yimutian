import {
    listfun
} from '@/api/hxhomeapi.js'
export let hxhome = {
    state: {
        arr: []
    },
    getters: {},
    mutations: {
        uplist(state, payload) {
            state.arr = payload
        }
    },
    actions: {
        listact(context) {
            listfun().then((ok) => {
                console.log(ok)
                context.commit("uplist", ok.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}