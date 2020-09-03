<template>
<div class="topbar">
    <em class="iconfont icon-zuojiantou" @click="goback()"></em>
    <span>{{title}}</span>
    <i class="iconfont icon-fanhui" @click="share()"></i>
</div>
</template>

<script>
export default {
    props: ["title"],
    methods: {
        goback() {
            this.$router.go(-1);
        },
        share() {
            this.$emit('pao', true)
        }
    },
}
</script>

<style scoped>
.topbar {
    width: 100%;
    height: 1.2rem;
    display: flex;
    background-color: #ff4135;
    align-items: center;
    justify-content: space-between;
    color: white;
    z-index: 1;
}

em,
i {
    font-size: .6rem;
}

em {
    margin-left: .2rem;
}

i {
    margin-right: .2rem;
}

span {
    font-size: .4rem;
    font-weight: bolder;
}
</style>
