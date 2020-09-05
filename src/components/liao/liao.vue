<template>
<div class="liao_head">
    <div class="liao_header">
        <span>聊生意</span>
        <span><i class="iconfont icon-wode"></i>加好友</span>
    </div>
    <input type="text" placeholder="搜索聊生意记录或联系人">
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.liao_head {
    width: 100%;

}

.liao_header {
    height: .8rem;
    display: flex;
    justify-content: center;
    font-size: .4rem;
    position: relative;
    align-items: center;
}

.liao_header span:nth-of-type(1) {
    font-weight: bolder;
}

.liao_header span:nth-of-type(2) {
    position: absolute;
    right: 0;
}

.liao_header span:nth-of-type(2) i {
    font-size: 29px;
    color: #000;
}

input {
    width: 100%;
    height: .7rem;
    text-align: center;
    border: none;
    background-color: #f2f2f2;
    border-radius: 10px;
    font-size: .28rem;
}
</style>
