<template>
    <div class="box">
        <div class="box1"><p>今日爆款</p></div>
        <div class='box2'>
            <div><img :src="obj.img" alt=""></div>
            <div class='box3'>
                <p>{{obj.name}}</p>
                <div class="box4">
                    <span><h4>￥{{obj.price1 | filA}}</h4></span>
                    <span><p>{{obj.price2}}</p></span>
                    <span class="box5">
                        <div @click="fun">立马抢</div>
                        <!-- <router-link :to="{name:'shopping',params:{dahuang: obj}}"></router-link> -->
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            obj:{id:1,name:"[正常发货全国包邮]藏红花特级藏红花",price1:"66.00",txt1:"/件",price2:"75.00", price3:"1",txt2:"件起",dizhi:"湖北随州曾都区距离503公里",num1:"2874",num2:"15",num3:"1649",img:"../yaocai/baokuan1.jpg",
                text:"「藏红花回头客榜」",image:[{img1:"../yaocai/baokuan1.jpg"},{img1:"../yaocai/baokuan2.jpg"},]
            }
        }
    },
    filters:{
        filA(val){
            return val.substr(0,5)
        }
    },
    methods:{
        fun(){
            let data=JSON.stringify(this.obj);
            this.$router.push({name:'shopping',query:{dahuang:data}})
        }
    }
}
</script>

<style scoped>
.box{width: 100%;}
.box1{width: 100%;background-color: #aaa;padding-top:0.18rem}
.box1 p{font-size: 0.3rem;font-weight: bold;text-align: center;line-height: 0.7rem;}
.box2{width: 100%;display: flex;}
.box2 img{width: 1.5rem;height:1.5rem;margin-right: 0.07rem;}
.box3 p{font-size:0.2rem;margin-bottom: 0.2rem;line-height: 0.3rem;}
.box4{display: flex;line-height: 0.3rem;margin-top: 0.4rem;}
h4{font-size: 0.2rem;color:red;margin-right: 0.09rem;}
.box4 p{font-size: 0.15rem;color:#aaa;text-decoration:line-through;}
.box5{width: 0.8rem;height: 0.3rem;background:#ff4c76;text-align: center;border-radius: 0.18rem;color:#fff;margin-left: 0.08rem;}

</style>