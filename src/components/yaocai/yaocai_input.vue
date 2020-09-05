<template>
    <div>
        <div class="box" >
            <el-autocomplete ref="aaa"  v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect">
             
            </el-autocomplete>
            <p @click="fun()">搜索</p>
            
        </div>
       
    </div>
</template>

<script>
export default {
    props:["KKK"],
    data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null,
        num:[],
        aa:''
      };
    },
    methods: {
        loadAll() {
                return [
                    { "value": "天麻"},
                    { "value": "枸杞"},
                    { "value": "人参"},
                    { "value": "三七"},
                    { "value": "灵芝"},
                    { "value": "冬虫夏草"},
                ];
        },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 1000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      fun(){
        this.aa=this.$refs.aaa.value
        this.num = this.KKK.filter(item=>item.sou==this.aa)
        // console.log(this.num)
        let data=JSON.stringify(this.num);
        this.$router.push({name:"yaocai_listB",query:{xixi:data,dahuang:this.aa}})
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
   
    },
    computed:{
		arrB(){
			return this.WWW.filter(item=>item.sign2=='B')
		},
		arrC(){
			return this.WWW.filter(item=>item.sign2=='C')
		},
		arrD(){
			return this.WWW.filter(item=>item.sign2=='D')
		},
	}
}
</script>

<style scoped>
    .box{display: flex;}
.el-autocomplete{width: 70%;margin-left: 0.25rem;}
.box p{width: 0.7rem;height:0.4rem;background-color: green;font-size: 0.25rem;line-height: 0.4rem;text-align:center;
        border-radius: 0.2rem;color: #fff;
}
</style>