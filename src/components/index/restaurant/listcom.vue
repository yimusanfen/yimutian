<template>
    <div class="listcom">
        <div class="item" v-for="(v,i) in newarr" :key="i">
            <van-card
            num="1"
            :price="v.newprice"
            :desc="v.address"
            :title="v.title"
            :thumb="v.smallimg"
            >
            <template #tags>
                <van-tag plain type="danger">{{v.rights[0]}}</van-tag>
                <van-tag plain type="danger">{{v.rights[1]}}</van-tag>
            </template>
            <template #footer>
                <van-button size="mini">去购买</van-button>
            </template>
            </van-card>
        </div>
        
    </div>
</template>

<script>
export default {
    props:['num'],
    computed:{
        newarr(){
            return this.$store.state.resmodule.resindex.filter((item)=>{
                return item.categoryid == this.num
            })
        }
    }
}
</script>

<style scoped>
    .listcom{
        width: 95%;
        font-size: 75px;
        
        margin: auto ;
    }
    .item{
        margin: 0.2rem;
        background-color: white;
    }
</style>