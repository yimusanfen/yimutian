<template>
<div>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(v,i) in this.$store.state.hxhome.arr.carousel_arr" :key="i">
            <img :src="v.img">
        </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
export default {

    mounted() {
        this.$store.dispatch("listact")
    },
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.el-carousel__container {
    height: 1.8rem;
    border-radius: 10px;
}

.el-carousel__indicators--outside {
    display: none;
}

.el-carousel--horizontal {
    border-radius: 10px;
}

img {

    height: 1.8rem;
}
</style>
