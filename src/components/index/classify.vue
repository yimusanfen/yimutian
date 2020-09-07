<template>
<<<<<<< HEAD
<div class="classify">

    <Classifyzi v-for="(v,i) in this.$store.state.hxhome.arr.classify_arr" :key="i" :cass="v.cass" :name="v.name" class="zi" :to="v.path"></Classifyzi>

</div>
=======
    <div class="classify">
        <router-link class="classify-item" v-for="(v,i) in arr" :key="i" :to="v.path"><img :src="v.img"><p>{{v.name}}</p></router-link>
    </div>
>>>>>>> 2f6ab0eda520238e48f69772e2e21670f38b5beb
</template>

<script>
import Classifyzi from "&c/index/classifyzi.vue"
export default {
<<<<<<< HEAD
    components: {
        Classifyzi
    },
    mounted() {
        this.$store.dispatch("listact")
=======
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
>>>>>>> 2f6ab0eda520238e48f69772e2e21670f38b5beb
    },
}
</script>

<style scoped>
    /* .classify{
        width: 100%;
<<<<<<< HEAD
        height: 2rem;
=======
      
>>>>>>> 2f6ab0eda520238e48f69772e2e21670f38b5beb
        flex-flow: wrap;
        display: flex;
        background-color: #f2f2f2;
    }
    .classify-item{
        width: 20%;
<<<<<<< HEAD
    } */
    .classify {
    width: 100%;
    height: 3rem;
    display: flex;
    margin-top: .4rem;
    flex-flow: wrap;

}

.zi {
    width: 20%;
    height: 1.4rem;
}


</style>
=======
        text-align: center;
    }
    .classify-item img{width: 0.6rem;margin-left: 0.1rem;}
</style>
>>>>>>> 2f6ab0eda520238e48f69772e2e21670f38b5beb
