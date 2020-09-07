<template>
    <div class="classify">
        <router-link class="classify-item" v-for="(v,i) in arr" :key="i" :to="v.path">{{v.name}}</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[
                {name:"餐厅食材",path:"/restaurant"},
                {name:"限时秒杀",path:"/miaosha"},
                {name:"拼工厂",path:"/pingongchang"},
                {name:"包基地",path:"/baojidi"},
                {name:"一件代发",path:"/yijiandaifa"},
                {name:"滋补药材",path:"/yijiandaifa"},
                {name:"农机农资",path:"/yijiandaifa"},
                {name:"补贴专区",path:"/yijiandaifa"},
                {name:"品质种苗",path:"/yijiandaifa"},
                {name:"最新资源",path:"/yijiandaifa"},
            ]
        }
    },
}
</script>

<style scoped>
    .classify{
        width: 100%;
        height: 2rem;
        flex-flow: wrap;
        display: flex;
    }
    .classify-item{
        width: 20%;
    }
</style>