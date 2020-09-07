<template>
    <div class="lunbo">
        <van-swipe @change="onChange" width="750"  autoplay="2000">
            <van-swipe-item v-for="(v,i) in obj.bigimg" :key="i">
                <img width="750" :src="obj.bigimg[i]" alt="">
            </van-swipe-item>
            <!-- <van-swipe-item>
                <img width="750" :src="newimg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img width="750" :src="newimg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img width="750" :src="newimg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img width="750" :src="newimg" alt="">
            </van-swipe-item> -->
            <template #indicator>
              <div class="custom-indicator">
                {{ current + 1 }}/{{obj.bigimg.length}}
              </div>
            </template>
          </van-swipe>
    </div>
</template>

<script>
export default {
    props:['obj'],
    data(){
        return {
            current:0
        };
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
    },
    computed:{
        newimg(){
            return '../../../'+ this.obj.smallimg
        }
    }
}
</script>

<style scoped>
    .lunbo{
        width: 100%;
        /* height: 3rem; */
        position: relative; 
        
    }
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 20px;
        background: rgba(0, 0, 0, 0.1);
        
    }
</style>