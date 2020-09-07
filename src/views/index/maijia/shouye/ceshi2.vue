<template>
<div>
    <div @click="fun()">></div>
    测试2：{{this.$route.query.id}}
</div>
</template>

<script>
export default {
    methods: {
        fun() {
            this.$router.go(-1)
        }
    },
}
</script>

<style>

</style>
