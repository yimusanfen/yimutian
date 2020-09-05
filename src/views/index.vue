<template>
    <div>
        <topBar></topBar>
        <classify></classify>
        <h2>首页</h2>
        
        <bottomBar></bottomBar>
        
    </div>
    
</template>

<script>
import bottomBar from '&c/index/bottomBar.vue'
import topBar from '&c/index/topBar.vue'
import classify from '&c/index/classify.vue'
export default {
    components:{
        bottomBar,
        topBar,
        classify
    }
}
</script>

<style scoped>

</style>