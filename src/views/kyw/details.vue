<template>
    <div class="details">
        <!-- 头部bar -->
        <div class="topbar">
            <van-tabs class="tab" v-model="active"  scrollspy sticky :color="color" :background="background" title-active-color="#01ac8c">
                <em slot="nav-left" class="iconfont icon-zuojiantou" @click="goback()"></em>
                <i slot="nav-right" class="iconfont icon-gouwuche" @click="cart()"></i>
                <strong slot="nav-right" class="iconfont icon-ziyuan" @click="showPopup()"></strong>
                <van-tab :title="toplist[0].title"  :badge="toplist[0].badge">
                     
                    <lunbo :obj="newobj"></lunbo>
                    <contop :obj="newobj"></contop>
                </van-tab>
                <van-tab :title="toplist[1].title"  :badge="toplist[1].badge">
                    <evaluate :evalobj="newmerch" isshow="4"></evaluate>

                </van-tab>
                <van-tab :title="toplist[2].title"  :badge="toplist[2].badge">
                   <merch :mer="newmerch"></merch>
                    
                </van-tab>
                <van-tab :title="toplist[3].title"  :badge="toplist[3].badge">
                    
                </van-tab>
            </van-tabs>
        </div>
        <gouwubar></gouwubar>
        <!-- 弹出层 -->
        <div class="over" v-show="show">
            <p>回到首页</p>
            <p>消息</p>
            <p>分享供应</p>
            <p>举报供应</p>
        </div>

        <!-- {{this.$store.state.shangjia.sjarr}} -->
        <!-- {{newmerch}} -->
    </div>
</template>
<!-- 单位：斤，克，件，只，KG，箱，袋，个，头，棵，盒，瓶 -->
<script>
import lunbo from '&c/index/details/lunbo.vue'
import contop from '&c/index/details/contop.vue'
import evaluate from '&c/index/details/evaluate.vue'
import merch from '&c/index/details/merch.vue'
import gouwubar from '&c/index/details/gouwubar.vue'
export default {
    components:{
        lunbo,
        contop,
        evaluate,
        merch,
        gouwubar
    },
    data() {
        return {
            active:1,
            toplist:[
                {title:"供应",badge:"",color:"#01ac8c"},
                {title:"评价",badge:"2",color:"#01ac8c"},
                {title:"详情",badge:"3",color:"#01ac8c"},
                {title:"推荐",badge:"4",color:"#01ac8c"},
            ],
            background:'opcity',
            color:"#01ac8c",
            lunbo:'<lunbo></lunbo>',
            show: false,
        }
    },
    methods: {
        goback(){
            this.$router.go(-1)
        },
        cart(){
            console.log("购物车")
        },
        
        showPopup() {
            this.show = !this.show;
        },
    },
    computed:{
        newobj(){
            return JSON.parse(this.$route.params.value)
        },
        newmerch(){
            return this.$store.state.shangjia.sjarr.filter(item=>item.merchantid==this.newobj.merchantid)
        }
    },
    created(){
        this.$store.dispatch('shangjia');
        //在页面加载时读取localStorage里的状态信息
        if(localStorage.getItem("data") ) { //判断data中是否有数据，有就存起来
            //replaceState替换数据 Object.assign合并对象
            this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("data"))))
        } 
        //在页面刷新时将vuex里的信息保存到localStorage里
        window.addEventListener("beforeunload",()=>{   //使用addEventListener监听页面刷新
            localStorage.setItem("data",JSON.stringify(this.$store.state))
        })
    },
}
</script>

<style scoped>
    .details{
        width: 100%;
    }
    em{
        width: 0.8rem;
        height: 0.8rem;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: .6rem;
        margin: 0.16rem 0.3rem 0 0.2rem;
        border-radius: 0.4rem;
        text-align: center;
        line-height: 0.8rem;
        color: white;
        
    }
    i,strong{
        width: 0.8rem;
        height: 0.8rem;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: .6rem;
        margin: 0.16rem 0.3rem 0 0.2rem;
        border-radius: 0.4rem;
        text-align: center;
        line-height: 0.8rem;
        color: white;

    }
    .over{
        width: 2rem;
        position: fixed;
        top: 1rem;
        right: 0.2rem;
        padding: 0 0.2rem;
        background-color: white;
    }
    .over p{
        width: 95%;
        margin: 0 auto;
        padding: 0.2rem 0;
        border-bottom: 1px solid #ccc;
    }
</style>