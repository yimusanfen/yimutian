<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="聊一聊" color="#333" />
            <van-goods-action-icon icon="phone-o" text="打电话" />
            <van-goods-action-icon :icon="icon" text="收藏" :color="color" @click='select'/>
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
          </van-goods-action>
    </div>
</template>

<script>
export default {
    data() {
        return {
            collect:false,
            icon:'like-o',
            color:''
            
        }
    },
    methods: {
        select(){
            this.collect = !this.collect
            if(this.collect){
                // this.Toast('提示内容');
                this.$toast('您已收藏成功，可在进货单内查看');
            }
        }
    },
    watch:{
        collect(newval,oldval){
            if(newval==true){
                this.icon = 'like';
                this.color = 'red' 
            }else{
                this.icon = 'like-o';
                this.color = ''
            }
            console.log(newval,oldval)
            console.log(this.icon,this.icon)
        }
    }
}
</script>

<style scoped>

</style>