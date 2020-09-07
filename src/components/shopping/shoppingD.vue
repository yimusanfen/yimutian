<template>
    <div class="box">
        <van-swipe @change="onChange" >
            <van-swipe-item v-for="(v,i) in EEE" :key="i"><img :src="v.img1" alt=""></van-swipe-item>
            
            <template #indicator>
              <div class="custom-indicator">
                {{ current + 1 }}/{{EEE.length}}
              </div>
            </template>
          </van-swipe>
    </div>
</template>

<script>
export default {
  props:["EEE"],
    data() {
    return {
      current: 0,
    }
  },
 
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
}
</script>

<style scoped>
    .box{margin-top: 0.4rem;}
    .van-swipe-item{height: 2rem;}
    .van-swipe-item img{width: 100%;height: 100%;}
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>