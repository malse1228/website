<template>
    <div v-if="show">

        <Head title="商品分类" :show="true"></Head>
        <mt-navbar v-model="selected">
            <mt-tab-item :id="type.value" v-for="(type,i) in types" :key="i"> {{type.text}}</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="type.value" v-for="(type,i) in types" :key="i">
                <List :type="type" :allGoods="allGoods" :goods="allGoods.filter(item=>item.type.value==type.value)">
                </List>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    export default {
        name: "classify",
        data() {
            return {
                types: [],
                allGoods: [],
                show: false,
                selected: "teevee"
            }
        },
        created() {
            this.$axios.get("/vue/getGoodTypes").then(res => {
                this.types = res.data.result;
            })
        },
        mounted() {
            this.$axios.get("/vue/getGoods").then(res => {
                this.allGoods = res.data.result;
                this.$nextTick(() => {
                    this.show = true;
                })
            })
        }
    }

</script>