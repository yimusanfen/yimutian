<template>
<div class="tehui">

    <div v-for="(v,i) in newarr" :key="i" class="tehuione">
        <img :src="v.img">
        <div class="tehuione-right">
            <p>{{v.title}}</p>
            <span>{{v.address}}</span>
            <div class="tehuione-bottom">
                <div class="tehuione-bottom-left">
                    <p>{{v.newprice}}</p>
                    <span>{{v.oldprice}}</span>
                </div>
                <p class="pur">{{v.purchase}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        newarr() {
            return this.$store.state.tehui.arr.filter((item) => {
                return item.catid == 5
            })
        }
    },
}
</script>

<style scoped>
.tehui {
    background: rgb(241, 241, 241);
}

.tehui h1 {}

.tehuione {
    width: 96%;
    height: 3rem;
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin-left: 2%;
    border-radius: 0.2rem;
    margin-bottom: 0.4rem;
}

.tehuione img {
    width: 35%;
    height: 2.4rem;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    border-radius: 0.2rem;
}

.tehuione-right {
    margin-left: 0.1rem;
    margin-right: 0.2rem;
    margin-top: 0.2rem;

}

.tehuione-right p {
    font-size: 0.3rem;
}

.tehuione-right span {
    font-size: 0.1rem;

}

.tehuione-bottom {
    display: flex;
    justify-content: space-between;
}

.tehuione-bottom-left p {
    font-size: 0.4rem;
    color: red;
    font-weight: 800;
    margin-top: 0.4rem;
}

.tehuione-bottom-left span {
    text-decoration: line-through;
}

.tehuione-bottom .pur {
    font-size: 0.3rem;
    color: #fff;
    margin-top: 0.5rem;
    background-color: red;
    padding: 0.15rem 0.4rem;
    border-radius: 0.3rem;

}
</style>
