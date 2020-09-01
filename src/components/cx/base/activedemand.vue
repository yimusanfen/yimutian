<template>
<div class="activedemand">
    <div class="demodiv">
        <span>畅销榜</span>
    </div>

    <div class="bd">
        <div @click="cur('Jdbd')">基地榜单</div>
        <div @click="cur('Yzjd')">优质基地</div>
        <component :is="current"></component>
    </div>
</div>
</template>

<script>
import Jdbd from "&c/cx/base/jdbd.vue";
import Yzjd from "&c/cx/base/yzjd.vue";
export default {
    components: {
        Jdbd,
        Yzjd,
    },
    data() {
        return {
            current: 'Jdbd'
        }
    },
    methods: {
        cur(s) {
            this.current = s
        }
    }
};
</script>

<style scoped>
.demodiv {
    text-align: center;
    font-size: 0.4rem;
    font-weight: normal;
}
</style>
