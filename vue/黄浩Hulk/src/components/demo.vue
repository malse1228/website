<template>
    <div>
        <div class="box">
            {{word}}
        </div>
        <!-- <p><input type="text" v-model="word"></p> -->
        <!-- <button @click="change">refs 去实现父修改子组件</button> -->
        <Child ref="one" msg="this is props" :word="word" v-on:sendparent="getWord">
            <div slot="msg">
                <h3 v-for="(a,i) in arr" :key="i">{{a}}</h3>
            </div>
        </Child>
    </div>
</template>


<script>
    import Child from "./child.vue";
    export default {
        methods: {
            change() {
                this.$refs.one.count += 10;
            },
            getWord(data) {
                console.log(data);
                this.word = data;
            }
        },
        data() {
            return {
                word: "",
                arr: ['', '']
            }
        },
        components: {
            Child
        }
    }

</script>
<style lang="css" scoped>
    h2 {
        color: orange;
    }
</style>