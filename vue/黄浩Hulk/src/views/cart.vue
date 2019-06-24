<template>
    <div>

        <Head title="购物车" :show="true"></Head>
        <table>
            <tr>
                <!-- <td>序号</td>
                <td>选中</td>
                <td>商品名称</td>
                <td>商品价格</td>
                <td>数量</td>
                <td>小计</td>
                <td>删除</td> -->
            </tr>
            <tr v-for="(good,i) in goods" :key="i">
                <td>{{i+1}}</td>
                <td><input type="checkbox" v-model="good.check"></td>
                <td>{{good.title}}</td>
                <td><img :src="'https://zuozhaoxi.com/base/img/3.jpg'" alt="" width="100" height="50"></td>
                <td>{{good.price}}</td>
                <td><input type="number" v-model="good.count"></td>
                <td>{{good.price * good.count}}</td>
                <td><button @click="goods.splice(i,1)">X</button></td>
            </tr>
        </table>
        <div>
            <p><label for="quan">全选/反选</label><input v-model="quan" id="quan" type="checkbox"></p>
            <p>总价格 {{total}}</p>
            <p>数量总计{{all}}</p>
            <mt-button @click="delSelect">删除选中</mt-button>
        </div>
    </div>

</template>
<script>
    
    export default {
        name: "cart",
        data() {
            return {
                goods: [],
                all: 0
            }
        },
        methods: {
            delSelect() {
                this.goods = this.goods.filter(item => !item.check)
            }
        },
        computed: {
            quan: {
                get() {
                    var flag = true;
                    this.goods.forEach((item) => {
                        if (!item.check) {
                            flag = false;
                        }
                    });
                    return flag;
                },
                set(val) {
                    console.log(val);
                    this.goods = this.goods.map((item) => {
                        item.check = val;
                        return item;
                    })
                }
            },
            total() {
                var total = 0;
                this.goods.forEach((item) => {
                    if (item.check) {
                        total += item.price * item.count;
                    }
                })
                return total;
            },
        },
        watch: {
            goods: {
                deep: true,//深度监听
                handler(newVal) {
                    console.log(newVal);
                    var all = 0;
                    this.goods.forEach((item) => {
                        if (item.check) {
                            all += item.count * 1;
                        }
                    })
                    this.all = all;
                }

            }
        },
        mounted() {
            document.querySelectorAll("title")[0].innerHTML = this.title;
            this.goods.forEach((item) => {
                if (!item.check) {
                    this.all += item.count * 1;
                }
            })
        }
    }
</script>
<style scoped>
    .static {
        width: 120px;
        height: 120px;
        margin: 10px;
    }

    tr td {
        border: 2px solid #333;
        text-align: center;
    }
</style>