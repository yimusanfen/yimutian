<template>
  <div>

    <div class="box1"><span class="el-icon-back box3" @click="fun()"></span>餐馆</div>
    <div class="box2">
      <van-tabs v-model="active" scrollspy sticky>
        <van-tab title="优选人参">
          <Yc_newB1 :VVV="arrA"></Yc_newB1>
        </van-tab>
        <van-tab title="优选枸杞">
          <Yc_newB2 :VVV="arrB"></Yc_newB2>
        </van-tab>
        <van-tab title="优选燕窝">
          <Yc_newB3 :VVV="arrC"></Yc_newB3>
        </van-tab>
        <van-tab title="其他推荐">
          <Yc_newB4 :VVV="arrD"></Yc_newB4>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import Yc_newB1 from "./yc_newB1.vue"

  import Yc_newB2 from "./yc_newB2.vue"
  import Yc_newB3 from "./yc_newB3.vue"
  import Yc_newB4 from "./yc_newB4.vue"
  export default {
    props: ["CCC"],
    components: {
      Yc_newB1, Yc_newB2, Yc_newB3, Yc_newB4
    },

    methods: {
      fun() {
        this.$router.go(-1)
      }
    },
    computed: {
      arrA() {
        return this.CCC.filter(item => item.sign2 == 'E')
      },
      arrB() {
        return this.CCC.filter(item => item.sign2 == 'B')
      },
      arrC() {
        return this.CCC.filter(item => item.sign2 == 'C')
      },
      arrD() {
        return this.CCC.filter(item => item.sign2 == 'D')
      },
    }

  }
</script>

<style scoped>
  .box1 {
    width: 100%;
    background-color: black;
    padding-left: 0.1rem;
    position: fixed;
    top: 0;
  }

  .box1 {
    font-size: 0.3rem;
    font-weight: bold;
    color: #fff;
    line-height: 0.5rem;
    text-align: center;
  }

  .box2 {
    width: 100%;
    margin-top: 0.5rem;
  }

  .box3 {
    position: relative;
    color: #fff;
    top: 0.05rem;
    left: -1.3rem;
    font-size: 0.4rem;
  }
</style>