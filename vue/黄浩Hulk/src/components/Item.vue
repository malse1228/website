<template>
    <div class="item-move">
        <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}" class="item">
            <img :src="good.img" alt="" width="100%" height="240px">
            <h2 class="h2">{{good.name}}</h2>
            <h2>¥RMB{{good.price}}</h2>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: "item",
        props: ["good"]
    }
</script>

<style scoped>
    .item {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: block;
        border-bottom: 2px dotted darkgoldenrod;
    }

    .h2 {
        height: 40px;
        line-height: 40px;
        color: black;
        font-size: .3rem;
    }

    .item-move {
        animation: bounceIn .8s;
    }
</style>