<template>
<div>
    <div class="null">
    </div>
    <div class="promise">
        <p>服务承诺</p>
        <span>商家已经加入买家保障计划</span>
        <i class="iconfont icon-iconfontjiantou5"></i>
    </div>
    <div class="btn">
        <div class="btn-one box">
            <em class="iconfont icon-duihao"></em>
            <p>72小时到货</p>
        </div>
        <div class="btn-two box">
            <em class="iconfont icon-duihao"></em>
            <p>及时回复</p>
        </div>
        <div class="btn-three box">
            <em class="iconfont icon-duihao"></em>
            <p>价格保真</p>
        </div>
        <div class="btn-four box">
            <em class="iconfont icon-duihao"></em>
            <p>足斤足两</p>
        </div>
    </div>
    <div class="btn-five">
        <em class="iconfont icon-duihao"></em>
        <p>48小时发货</p>
    </div>
    <div class="null">
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.null {
    width: 100%;
    height: 0.2rem;
    background-color: rgb(241, 241, 241)
}

.promise {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
}

.promise p {
    font-size: 0.3rem;
    font-weight: 800;
}

.promise span {
    color: rgb(205, 205, 205);
    margin-left: 0.2rem;
}

.promise i {
    margin-left: 2.5rem;
    color: rgb(205, 205, 205);
}

.btn {
    width: 100%;
    height: 0.6rem;
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
}

.btn .box {
    display: flex;
    align-items: center;
}

.btn .box p {
    font-size: 0.28rem;
}

.btn .box em {
    color: red;
}

.btn .btn-two {
    margin: 0.25rem;
}

.btn .btn-three {
    margin: 0.25rem;
}

.btn-five {
    width: 100%;
    height: 0.6rem;
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
}

.btn-five em {
    color: red;
}

.btn-five p {
    font-size: 0.28rem;
}
</style>
