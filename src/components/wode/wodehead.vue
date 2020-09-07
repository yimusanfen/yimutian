<template>
<div id="wode_head">
    <div class="wode_header">
        <img src="/images/touxiang.jpg">
        <span>我的</span>
        <i class="iconfont icon-liaotian"></i>
    </div>
    <div class="wode_xingxi">
        <img src="/images/touxiang.jpg">
        <div class="wode_shiming">
            <p>何啸</p>
            <p>其他身份|<span>陕西西安雁塔区</span></p>
        </div>

        <span class="wode_xi">完善资料85%></span>
    </div>
    <div class="wode_nav">
        <span>0我关注的</span>|<span>0关注我的</span>
    </div>
    <div class="wode_ren">
        <div class="wode_rz">
            <i class="iconfont icon-renzheng"></i>
            <span>我的认证</span>
        </div>
        <span>未实名></span>
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
#wode_head {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
}

.wode_header {
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #07bfa7;
}

.wode_header>img {
    width: .5rem;
    height: .5rem;
    border-radius: 50%;

}

.wode_header>span {
    font-size: .45rem;
    color: #ffffff;
}

.wode_header>i {
    font-size: .6rem;
    color: #ffffff;
}

.wode_xingxi {
    margin-top: 9.5%;
    width: 100%;
    height: 137px;
    background-color: #07bfa7;
    border-radius: 100%/43px;
    display: flex;
    text-align: center;
    align-items: center;
}

.wode_xingxi>img {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    margin-left: 20px;
}

.wode_shiming {
    text-align: left;
    margin-left: 20px;
}

.wode_shiming>p:nth-of-type(1) {
    font-size: 22px;
    font-weight: bolder;
    color: #ffffff;
    color: #ffffff;
}

.wode_shiming>p:nth-of-type(2) {
    font-size: 13px;
    color: #ffffff;
}

.wode_xi {
    margin-left: 36px;
    font-size: 14px;
    color: #ffffff;
}

.wode_nav {
    width: 95%;
    height: 70px;
    background-color: aqua;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .3rem;
}

.wode_ren {
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 55px;
    align-items: center;
    font-size: 18px;
}

.wode_rz {
    margin-right: 200px;

}

.icon-renzheng {
    font-size: 20px;
    margin-right: 10px;
}
</style>
