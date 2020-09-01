<template>
<div class="baseclassify">
    <div class="baseclassifya" v-for="(v,i) in arr" :key="i">
        <img :src="v.imgs"><br />
        <span>
            {{v.sg}}
        </span>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            arr: [{
                    sg: "水果基地",
                    imgs: "/images/shuiguo.png",
                },
                {
                    sg: "蔬菜基地",
                    imgs: "/images/shucai.png",
                },
                {
                    sg: "水产基地",
                    imgs: "/images/shuichan.png",
                },
                {
                    sg: "种苗基地",
                    imgs: "/images/zhongmiao.png",
                },
                {
                    sg: "菌菇基地",
                    imgs: "/images/jungu.png",
                },
            ],
        };
    },
};
</script>

<style scoped>
.baseclassify {
    width: 100%;
    height: 1.5rem;
    display: flex;

}

img {
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
}

.baseclassifya {
    flex: 1;
    text-align: center;

}
</style>
