<template>
    <div class="classify">
        <router-link class="classify-item" v-for="(v,i) in arr" :key="i" :to="v.path"><img :src="v.img"><p>{{v.name}}</p></router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[
                {name:"餐厅食材",path:"/restaurant",img:"yaocai/zibu.jpg"},
                {name:"限时秒杀",path:"/miaosha",img:"yaocai/zibu.jpg"},
                {name:"拼工厂",path:"/pingongchang",img:"yaocai/zibu.jpg"},
                {name:"包基地",path:"/baojidi",img:"yaocai/zibu.jpg"},
                {name:"一件代发",path:"/yijiandaifa",img:"yaocai/zibu.jpg"},
                {name:"滋补药材",path:"/yaocai/",img:"yaocai/zibu.jpg"},
                {name:"农机农资",path:"/yijiandaifa",img:"yaocai/zibu.jpg"},
                {name:"补贴专区",path:"/yijiandaifa",img:"yaocai/zibu.jpg"},
                {name:"品质种苗",path:"/yijiandaifa",img:"yaocai/zibu.jpg"},
                {name:"最新资源",path:"/yijiandaifa",img:"yaocai/zibu.jpg"}
            ]
        }
    },
}
</script>

<style scoped>
    .classify{
        width: 100%;
      
        flex-flow: wrap;
        display: flex;
        background-color: #f2f2f2;
    }
    .classify-item{
        width: 20%;
        text-align: center;
    }
    .classify-item img{width: 0.6rem;margin-left: 0.1rem;}
</style>