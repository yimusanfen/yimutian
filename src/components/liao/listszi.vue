<template>
<div class="promote_nav" @click="fun()">
    <i :class="icon" :style="{backgroundColor:color}"></i>
    <div class="promote_da">
        <p>{{title}}</p>
        <p>{{small}}</p>
        <div class="promote_bao">{{date}}</div>
    </div>

</div>
</template>

<script>
export default {
    props: ["id", "icon", "title", "small", "date", "color", "path"],
    methods: {
        fun() {
            this.$router.push({
                path: this.path,
                query: {
                    id: this.id
                }
            })
        }
    }
}
</script>

<style scoped>
.promote_nav {
    width: 100%;
    display: flex;
    position: relative;
    margin: .2rem 0;
}

.promote_nav i {
    padding: .1rem;
    background-color: #bce5c7;
    font-size: .8rem;
    border-radius: 10px;
    color: #ffffff;
    margin-left: 21px;
    width: 54px;
    text-align: center;
}

.box1 {
    margin: .25rem 0;
}

.promote_bao {
    position: absolute;
    right: 22px;
    top: 19px;
    width: 1.2rem;
    height: .5rem;

    text-align: center;
    line-height: .5rem;

}

.promote_da {
    padding-top: .3rem;

}

.promote_da p:nth-of-type(1) {
    font-size: .3rem;
    font-weight: bolder;

}

.promote_da p:nth-of-type(2) {
    font-size: .25rem;
    color: #666666;
}
</style>
