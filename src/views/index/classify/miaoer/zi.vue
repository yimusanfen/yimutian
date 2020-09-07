<template>
<div>
    <div>
        <div class="example">
            <img :src="img">
            <div class="example-right">
                <p class="example-right-one">{{title}}</p>
                <span class="example-right-two">{{price}}</span>
                <i class="example-right-three">{{address}}</i><br>
                <strong class="example-right-four">{{safeguard}}</strong>
                <p class="example-right-five">{{newprice}}</p>
                <span class="example-right-six">{{year}}</span>
                <strong class="example-right-seven">{{brand}}</strong>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ["img", "title", "price", "address", "safeguard", "newprice", "year", "brand"]
}
</script>

<style scoped>
.example {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;

}

.example img {
    width: 35%;
    height: 2.6rem;
    margin-left: 0.2rem;
}

.example-right {
    margin-left: 0.2rem;
}

.example-right-one {
    font-size: 0.3rem;
    font-weight: 800;
}

.example-right-two {
    color: rgb(171, 171, 171);
}

.example-right-three {
    color: rgb(171, 171, 171);
}

.example-right-four {
    color: rgb(254, 104, 31);
}

.example-right-five {
    font-size: 0.4rem;
    color: red;
    font-weight: 800;
    margin-top: 0.2rem;
}

.example-right-six {
    color: red;
}

.example-right-seven {
    color: rgb(171, 171, 171);
    margin-left: 0.2rem;
}
</style>
