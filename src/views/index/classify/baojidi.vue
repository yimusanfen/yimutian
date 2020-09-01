<template>
<div class="abcde">
    <Basetop />
    <div class="baseimg">
        <img src="../../../../public/images/huoyuan.png" />
    </div>
    <Baseclassify />
    <Activedemand />
</div>
</template>

<script>
import Basetop from "&c/cx/base/basetop.vue";
import Baseclassify from "&c/cx/base/baseclassify.vue"
import Activedemand from "&c/cx/base/activedemand.vue"
export default {
    components: {
        Basetop,
        Baseclassify,
        Activedemand,
    },
};
</script>

<style scoped>
.abcde {
    overflow: hidden;
}

.baseimg>img {
    width: 100%;
    height: 100%;
}
</style>
