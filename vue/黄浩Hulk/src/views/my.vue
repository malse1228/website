<template>
    <div>

        <Head title="我的"></Head>
        <div v-if="isLogin">
            <uploadImg class="um"></uploadImg>
            <div class="nr">
                <h2>欢迎回来</h2>
                <mt-button type="default" @click="gotoZhuxiao" class="zxbtn">注销</mt-button>
            </div>
        </div>
        <div v-else>
            <mt-button type="default" @click="gotoLogin">马上登录</mt-button>
            <mt-button type="danger" @click="gotoRegister">注册</mt-button>
        </div>
        <div>
            <mt-cell title="我的订单" label="" is-link></mt-cell><br>
            <mt-cell title="会员中心" label="" is-link></mt-cell><br>
            <mt-cell title="服务中心" label="" is-link></mt-cell><br>
            <mt-cell title="商城之家" label="" is-link></mt-cell><br>
            <mt-cell title="更多功能" label="" is-link></mt-cell><br>
            <mt-cell title="设置" label="" is-link></mt-cell><br>
        </div>
    </div>
</template>
<script>
    import { Indicator, Toast } from 'mint-ui';
    import uploadImg from "@/components/uploadImg.vue";
    import { Cell } from 'mint-ui';
    export default {
        data() {
            return {
                isLogin: sessionStorage.userInfo,
                options: {
                    loop: true,
                    autoplay: true,
                    speed: 1500,
                },
            }
        },
        methods: {
            gotoLogin() {
                this.$router.push({ name: 'login' })
            },
            gotoRegister() {
                this.$router.push({ name: "register" })
            },
            gotoZhuxiao() {
                this.$router.push({ name: "login" })
            }
        },
        components: {
            uploadImg
        },
        mounted() {
            // Indicator.open({
            //     text: "加载中...",
            //     spinnerType: "triple-bounce"
            // });
            // this.$axios.get("/vue/movie", {
            //     params: {
            //         limit: 8
            //     }
            // }).then(res => {
            //     console.log(res);
            //     setTimeout(() => {
            //         Indicator.close();
            //         Toast({
            //             message: "请求成功",
            //             iconClass: 'icon iconfont icon-success',
            //             duration: 500
            //         });
            //     }, 1000);


            //将回调延迟到下次dom 更新循环之后执行 在修改数据之后立即使用它,然后等待dom更新
            // this.$nextTick(() => {
            //     // this.mv = res.data.result;
            //     console.log("下一次dom 更新之后再执行 promise")
            // })
            // })
        }
    }

</script>

<style scoped>
    div {
        overflow: hidden;
    }

    .um {
        float: left;
        margin-top: 10px;
    }

    .nr {
        float: left;
        margin: 30px;
        font-size: 25px;
    }

    .zxbtn {
        width: 100px;
        margin-top: 20px;

    }
</style>