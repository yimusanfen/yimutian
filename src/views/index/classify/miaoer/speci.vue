<template>
<div>
    <div class="item">
        <p>{{weight}}</p>
        <span>{{price}}</span>

    </div>
</div>
</template>

<script>
export default {
    props: ["weight", "price"]

}
</script>

<style scoped>
.item {
    width: 85%;
    height: 0.7rem;
    display: flex;
    align-items: center;
    margin-left: 15%;
    justify-content: space-around;
    background-color: #fff;
}

.item p {
    font-size: 0.3rem;
}

.item span {
    font-size: 0.3rem;
}
</style>
