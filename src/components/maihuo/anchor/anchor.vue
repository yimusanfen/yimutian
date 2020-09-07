<template>
<div class="anchor_head_a">
    <div class="anchor_head">
        <div id="anchor_div_1">活动报名</div>
        <div id="anchor_div_2">开店宝权益</div>
        <div id="anchor_div_3">实力认证</div>
        <div id="anchor_div_4">推广营销</div>
        <div id="anchor_div_5">工具大全</div>
        <div id="anchor_div_6">致富经</div>
        <div id="anchor_div_7">生意学院</div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.anchor_head_a {

    position: sticky;
    top: 2.2rem;
    left: 0;
    right: 0;
    z-index: 9999;

}

.anchor_head {

    background-color: skyblue;
    display: flex;

    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
}

.anchor_head>div {
    font-size: 0.3rem;
    padding: 0.2rem 0.5rem;
    background-color: #cccccc;
    color: #6d6d6d;
}

#anchor_div_7 {
    margin-right: 0.5rem;
}
</style>
