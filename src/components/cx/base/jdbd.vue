<template>
<div>
    <div class="baseexample">
        <div class="lizi">
            <img src="./../../../../public/images/lizi.png" alt="" />
        </div>
        <div class="shopjieshao">
            <span style="font-size:.3rem">新疆喀什法兰西小西梅精品礼盒装，包航空费....</span><br />
            <br />
            <span style="color:red;font-size:0.3rem">买家保证</span><br />
            <br />
            <br />
            <div class="limaqiang1">
                <span style="color:red;font-size:0.3rem">￥16/斤</span>
                <div class="limaqiang">立马抢</div>
            </div>

        </div>
    </div>
    <div class="baseexample">
        <div class="lizi">
            <img src="./../../../../public/images/lajiao.png" alt="" />
        </div>
        <div class="shopjieshao">
            <span style="font-size:.3rem">【精选辣椒】货源充足，专业代办，诚信经营，欢迎来电....</span><br />
            <br />
            <span style="color:red;font-size:0.3rem">买家保证</span><br />
            <br />
            <br />
            <div class="limaqiang1">
                <span style="color:red;font-size:0.3rem">￥0.54/斤</span>
                <div class="limaqiang">立马抢</div>
            </div>

        </div>
    </div>
    <div class="baseexample">
        <div class="lizi">
            <img src="./../../../../public/images/dongzao.png" alt="" />
        </div>
        <div class="shopjieshao">
            <span style="font-size:.3rem">陕西大荔冬枣一件代发产地直发，带量谈价货源充足....</span><br />
            <br />
            <span style="color:red;font-size:0.3rem">买家保证</span><br />
            <br />
            <br />
            <div class="limaqiang1">
                <span style="color:red;font-size:0.3rem">￥16/斤</span>
                <div class="limaqiang">立马抢</div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "jdbd",
};
</script>

<style scoped>
.lizi>img {
    width: 2.5rem;
    height: 2.5rem;
}

.shopjieshao {
    float: right;
}

.baseexample {
    display: flex;
    border: 1px solid #ccc;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
}

.limaqiang {
    border: 1px solid red;
    width: 1rem;
    text-align: center;
    border-radius: 25px;
    background: red;
    font-size: 0.3rem;
    color: white;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

.limaqiang1 {
    display: flex;
    justify-content: space-between;

}
</style>
