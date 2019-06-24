<template>
    <div>

        <Head title="商品搜索" :show="true"></Head>
        <mt-search v-model.lazy="keyword" cancel-text="取消" placeholder="搜索">
            <List :goods="goods" @changegoods="getNewGoods"></List>
        </mt-search>
    </div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                keyword: "",
                goods: []
            }
        },
        methods: {
            getNewGoods(data) {
                console.log(data);
                this.goods = data;
            }
        },
        watch: {
            keyword(newVal) {
                console.log(newVal);
                this.$axios.get("/vue/getGoods", {
                    params: {
                        keyword: newVal
                    }
                }).then(res => {
                    this.goods = res.data.result;
                })
            }
        }
    }
</script>

<style scoped>
    .mint-search {}
</style>