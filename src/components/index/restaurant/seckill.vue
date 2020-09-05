<template>
<div>
    <div class="item" v-for="(v,i) in newarr" :key="i" @click="todetail(v)">
        <img :src="v.smallimg" />
        <div class="item-right">
            <span class="tit">{{v.title}}</span>
            <p class="an">{{v.address}}</p>
            <div class="box">
                <div> <span class="nu">{{v.newprice}}</span>
                    <p class="dis">{{v.oldprice}}</p>
                </div>
                <div><span class="clic">去抢购</span></div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    props:['newarr'],
    filters: {
        titlesub(val) {
            return val.substr(0, 18)
        }
    },
    methods: {
        todetail(val){
            val = JSON.stringify(val)
            this.$router.push({name:'details',params:{value:val}})
        }
    },
}
</script>

<style scoped>
.item {
    width: 90%;
    height: 3rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.1rem;
    margin: 0.2rem 0;
    padding: 0.1rem;
    margin-left: 0.25rem;
    border-radius: 0.2rem;
}

.item img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.2rem;
}

.tit {
    font-size: 0.3rem
}

.an {
    font-size: .12rem;
    color: gray;
    margin-right: 2rem;
    margin-bottom: 0.5rem
}

.nu {
    font-size: 0.4rem;
    color: red;

}

.dis {
    font-size: 0.12rem;
    margin-right: 0.5rem;
    text-decoration: line-through;
}

.clic {

    width: .2rem;
    height: .3rem;
    background-color: hotpink;
    padding: 0.2rem 0.3rem;
    margin-left: 1.2rem;
    border-radius: 0.1rem;

}

.item-right {
    position: relative
}

.box {
    display: flex;
}
</style>
