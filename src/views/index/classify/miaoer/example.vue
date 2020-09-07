<template>
<div>
    <div class="top-title">
        <em class="iconfont icon-zuojiantou" @click="goback()"></em>
        <p>大闸蟹排行榜</p>
        <div class="exam">
            <span>畅销榜</span>
            <strong>回头客榜</strong>
        </div>
        <b>根据近15天销量，成交额等数据每天更新</b>
    </div>
    <div>
        <zi v-for="(v,i) in arr" :key="i" :img="v.img" :title="v.title" :price="v.price" :address="v.address" :safeguard="v.safeguard" :newprice="v.newprice" :year="v.year" :brand="v.brand"></zi>
    </div>
</div>
</template>

<script>
import zi from "./zi.vue"
export default {
    components: {
        zi
    },
    methods: {
        goback() {
            this.$router.go(-1)
        },
    },
    data() {
        return {
            arr: [{
                    img: "images/img/list1.jpg",
                    title: "江苏高淳固城湖大闸蟹河蟹母1两8母-5两活(死蟹包赔)",
                    price: "50/斤",
                    address: "江苏南京",
                    safeguard: "买家保障",
                    newprice: "￥6.50/斤",
                    year: "3年",
                    brand: "潜江怡品汇小龙虾"
                },
                {
                    img: "images/img/list3.jpg",
                    title: "江苏高淳固城湖大闸蟹河蟹母1两8母-5两活(死蟹包赔)",
                    price: "50/斤",
                    address: "江苏南京",
                    safeguard: "买家保障",
                    newprice: "￥6.50/斤",
                    year: "3年",
                    brand: "潜江怡品汇小龙虾"
                },
                {
                    img: "images/img/list4.jpg",
                    title: "江苏高淳固城湖大闸蟹河蟹母1两8母-5两活(死蟹包赔)",
                    price: "50/斤",
                    address: "江苏南京",
                    safeguard: "买家保障",
                    newprice: "￥6.50/斤",
                    year: "3年",
                    brand: "潜江怡品汇小龙虾"
                },
                {
                    img: "images/img/list5.jpg",
                    title: "江苏高淳固城湖大闸蟹河蟹母1两8母-5两活(死蟹包赔)",
                    price: "50/斤",
                    address: "江苏南京",
                    safeguard: "买家保障",
                    newprice: "￥6.50/斤",
                    year: "3年",
                    brand: "潜江怡品汇小龙虾"
                },
                {
                    img: "images/img/list6.jpg",
                    title: "江苏高淳固城湖大闸蟹河蟹母1两8母-5两活(死蟹包赔)",
                    price: "50/斤",
                    address: "江苏南京",
                    safeguard: "买家保障",
                    newprice: "￥6.50/斤",
                    year: "3年",
                    brand: "潜江怡品汇小龙虾"
                },
                {
                    img: "images/img/list7.jpg",
                    title: "江苏高淳固城湖大闸蟹河蟹母1两8母-5两活(死蟹包赔)",
                    price: "50/斤",
                    address: "江苏南京",
                    safeguard: "买家保障",
                    newprice: "￥6.50/斤",
                    year: "3年",
                    brand: "潜江怡品汇小龙虾"
                },
            ]
        }
    }
}
</script>

<style scoped>
.top-title {
    width: 100%;
    height: 3.2rem;
    background-color: red;
    position: sticky;
    top: 0
}

.top-title em {
    font-size: 0.5rem;
    color: #fff;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
}

.top-title p {
    font-size: 0.6rem;
    color: #fff;
    margin-left: 23%;
    margin-top: 0.4rem;
}

.top-title .exam {
    display: flex;
    justify-content: center;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
}

.top-title .exam span {
    font-size: 0.3rem;
    background-color: #fff;
    padding: 0.05rem 0.3rem;
    border-radius: 0.3rem;
    color: pink;
}

.top-title .exam strong {
    font-size: 0.3rem;
    background-color: red;
    padding: 0.05rem 0.3rem;
    border-radius: 0.3rem;
    color: #fff;
    border: 1px solid #fff;
    margin-left: 0.2rem;
}

.top-title b {
    margin-left: 13%;
    font-size: 0.3rem;
    color: rgb(246, 246, 246);

}
</style>
