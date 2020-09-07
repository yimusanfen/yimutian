<template>
<div class="zii">
    <router-link :to="to">
        <div class="redio">
            <i :class="cass"></i>
        </div>

        <br>
        <span>{{name}}</span>
    </router-link>

</div>
</template>

<script>
export default {
    components: {},
    props: ["name", "cass", "to"]
};
</script>

<style scoped>
.zii {
    text-align: center;

}

i {
    font-size: .57rem;
    color: #ffffff;
}

.redio {
    width: .77rem;
    height: .77rem;
    border-radius: .25rem .25rem .25rem .25rem;
    background-color: red;
    text-align: center;
    margin: 0 auto;
    line-height: .77rem;
}

span {
    color: #3F3F3F;
}
</style>
