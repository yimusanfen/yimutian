<template>
<div class="nov_head">
    <div class="nov_head_1">
        <i class="iconfont icon-yptc"></i>
        <span>新手任务</span>
    </div>
    <div class="nov_head_2">
        <p class="nov_p_1">发现第一个供应</p>
        <p class="nov_p_2">不会发布不用怕,点击这里查看教程></p>
        <span>去发布</span>
    </div>

    <div class="nov_head_2 ss">
        <p class="nov_p_1">完成实人认证</p>
        <p class="nov_p_2">只要完成实人认证，供应才会有曝光</p>
        <span>去认证</span>
    </div>
</div>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style scoped>
.nov_head {
    width: 100%;
    margin-top: .15rem;
    border: 1px solid #cccccc;
    border-radius: 10px;
}

.nov_head_1 {
    width: 7.24rem;
    height: .8rem;

    margin: 0 auto;
    line-height: .8rem;
}

.nov_head_1 i {
    font-size: .4rem;
    color: #afc437;
    margin-right: .2rem;
}

.nov_head_1 span {
    font-weight: bolder;
    font-size: .4rem;
}

.nov_head_2 {
    width: 7.24rem;
    height: 1rem;

    margin: 0 auto;
    position: relative;
    padding-top: .15rem;
}

.nov_head_2 span {
    position: absolute;
    right: .3rem;
    bottom: .2rem;
    padding: .15rem .3rem;
    background-color: #fe6d00;
    border-radius: 25px;
    color: #ffffff;
}

.nov_p_1 {
    font-size: .3rem;

}

.nov_p_2 {
    font-size: .25rem;
    color: #ccc;
}

.ss {
    border-top: 1px solid #cccccc;
}
</style>
