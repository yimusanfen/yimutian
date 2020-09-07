<template>
<div>

    <div class="item" v-for="(v,i) in  newarr" :key="i">
        <img :src="v.img" />
        <div class="item-right">
            <span class="tit">{{v.title}}</span>
            <p class="an">{{v.annotation}}</p>
            <div class="box">
                <div> <span class="nu">{{v.num}}</span>
                    <p class="dis">{{v.discounts}}</p>
                </div>
                <div><span class="clic">{{v.click}}</span></div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        newarr() {
            return this.$store.state.under.obj.filter((item) => {
                return item.catid == 2
            })
        }
    },
    filters: {
        titlesub(val) {
            return val.substr(0, 18)
        }
    }
}
</script>

<style>
.item {
    width: 90%;
    height: 3rem;
    background-color: honeydew;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.1rem;
    margin: 0.2rem 0;
    padding: 0.1rem;
    margin-left: 0.25rem
}

.item img {
    width: 2.5rem;
    height: 2.5rem;
}

.tit {
    font-size: 0.3rem
}

.an {
    font-size: .12rem;
    color: gray;
    margin-right: 2rem;
    margin-bottom: 0.5rem
}

.nu {
    font-size: 0.4rem;
    color: red;

}

.dis {
    font-size: 0.1rem;

    text-decoration: line-through;
}

.clic {

    width: .2rem;
    height: .3rem;
    background-color: red;
    padding: 0.2rem 0.3rem;
    margin-left: 1.2rem;
    border-radius: 0.1rem;
    font-size: 0.3rem;
    color: #fff
}

.item-right {
    position: relative
}

.box {
    display: flex;
}
</style>
