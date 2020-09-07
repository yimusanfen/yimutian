<template>
<div>
    <div class="feige">
        <span @click="fun()"> ＜ </span>
        <p>飞鸽找货</p>
    </div>
    <van-search v-model="value" shape="round" background="#FFC422" placeholder="找资源" />
    <div class="shuiguofenfei">
        <div v-for="(v,i) in arr" :key="i" class="fenglei1">
            <img :src="v.img">
            <span>{{v.size}}</span>
        </div>
    </div>
    <img src="/images/xiguadaiban.png" style="width:100%">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="/images/swipe1.png" style="width:100%"></van-swipe-item>
        <van-swipe-item><img src="/images/swipe2.png" style="width:100%"></van-swipe-item>
        <van-swipe-item><img src="/images/swipe3.png" style="width:100%"></van-swipe-item>

    </van-swipe>
    <div v-for="(v, i) in this.$store.state.mhome.obj" :key="i" class="title-big">
        <img :src="v.img" />
        <div class="title-left">
            <p>{{v.title}}</p>
            <div class="title-right">
                <span class="pri"> {{v.price}}</span>
                <span class="rob"> {{v.rob}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import {
    Swipe,
    SwipeItem
} from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import {
    Toast
} from 'vant';
export default {
    methods: {
        fun() {
            this.$router.go(-1)
        },
        onSearch(val) {
            Toast(val);
        },
        onCancel() {
            Toast('取消');
        },
    },
    data() {
        return {
            value: '',
            arr: [{
                    img: "/images/fenglei1.png",
                    size: "时令水果"
                },
                {
                    img: "/images/fenglei2.png",
                    size: "新鲜蔬菜"
                }, {
                    img: "/images/fenglei3.png",
                    size: "动植物苗"
                }, {
                    img: "/images/fenglei4.png",
                    size: "禽畜蛋肉"
                }, {
                    img: "/images/fenglei5.png",
                    size: "绿化苗木"
                }, {
                    img: "/images/fenglei6.png",
                    size: "中药原材"
                }, {
                    img: "/images/fenglei7.png",
                    size: "冻货水产"
                }, {
                    img: "/images/fenglei8.png",
                    size: "花卉盆景"
                }, {
                    img: "/images/fenglei9.png",
                    size: "粮油植物"
                }, {
                    img: "/images/fenglei10.png",
                    size: "全部种类"
                },
            ]
        };
    },
    mounted() {
        this.$store.dispatch("listact");
    },

}
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

.fenglei1>img {
    width: 1.4rem;

}

.fenglei1 {
    margin: 0 0.1rem;
    width: 17%;

}

.feige {
    width: 100%;
    height: 1.2rem;
    display: flex;
    background: #FFC422;
    color: white;
}

.feige>span {
    font-size: 0.7rem;
}

.feige>p {
    line-height: 1rem;
    font-size: 0.7rem;
    padding-left: 0.3rem;
}

.shuiguofenfei {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    text-align: center;
    font-size: 0.3rem;
}

.title-big {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid gainsboro;
    padding: 0.3rem 0rem;
}

.title-big img {
    width: 2rem;
    height: 2rem;
    margin-left: 0.2rem;
}

.title-left {
    width: 5rem;
    height: 3rem;
    margin-left: 0.2rem;
}

.title-left p {
    font-size: 0.3rem;
}

.title-right {
    width: 4.5rem;
    display: flex;
    justify-content: space-between;

}

.pri {
    font-size: 0.4rem;
    margin-top: 0.7rem;
    color: red;
    font-weight: 700
}

.rob {
    font-size: 0.3rem;
    color: white;
    margin-top: 0.5rem;
    background-color: skyblue;
    padding: 0.15rem 0.4rem;
    border-radius: 0.3rem;
}
</style>
