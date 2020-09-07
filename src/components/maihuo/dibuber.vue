<template>
<div>
    <router-view />
    <van-tabbar route>
        <van-tabbar-item replace to="/sell" icon="home-o">
            买货
        </van-tabbar-item>
        <van-tabbar-item replace to="/gongju" icon="apps-o">
            工具
        </van-tabbar-item>
        <van-tabbar-item replace to="/liaoshengyi" icon="chat-o" badge="99+">
            聊生意
        </van-tabbar-item>
        <van-tabbar-item replace to="/wode" icon="manager-o" dot>
            我的
        </van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
