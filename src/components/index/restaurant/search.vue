<template>
    <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" :placeholder="search">
        <slot name="keyword"></slot>
    </div>
</template>

<script>
export default {
    props:['search']
}
</script>

<style scoped>
    .search{
        width: 100%;
        height: 1.2rem;
        position: relative;
        background-color: #ff4135;
        margin: auto;
        text-align: center;
        padding-top: .2rem;
    }
    input{
        width: 90%;
        height: 0.6rem;
        border-radius: 0.3rem;
        text-indent: 35%;
        font-size: .3rem;
        border: none;
    }
    i{
        position: absolute;
        font-size: .4rem;
        left: 1.6rem;
        top: 0.3rem;
    }
</style>