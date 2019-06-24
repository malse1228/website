<template>
    <div>
        <!-- <h2> guide -guide -guide </h2> -->
            <img :src="one" alt="" width=100 height=100>

        <mt-swipe :auto="4000" class="guide" :continuous="false" :show-indicators="false">
            <mt-swipe-item v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" class="g-img" @click="gotoHome(i)">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: 'guide',
        data() {
            return {
                one: require("@/assets/images/photo.png"),
                imgs: [
                    require("@/assets/images/15.jpg"),
                    require("@/assets/images/5.jpg"),
                    require("@/assets/images/2.jpg"),
                    require("@/assets/images/3.jpg"),
                ]
            }
        },
        methods: {
            gotoHome(id) {
                if (id == this.imgs.length - 1) {
                    this.$router.push({ name: 'home' })
                }
            }
        },
        mounted() {
            if (localStorage.visitCount) {
                localStorage.visitCount++;
                if (localStorage.visitCount > 3) {
                    this.$router.push({ name: 'home' })
                }
            } else {
                localStorage.visitCount = 1;
            }
        },
    }
</script>

<style scoped>
    .guide,
    .g-img {
        width: 100%;
        height: 100%;
    }
</style>