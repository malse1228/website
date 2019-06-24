<template>
    <div>

        <Head title="登录" :show="true"></Head>
        <mt-navbar v-model="selected">
            <mt-tab-item id="login"></mt-tab-item>
        </mt-navbar>
        <div class="login">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="login">
                    <mt-field label="用户名" placeholder="请输入用户名" type="text" v-model="login.username"></mt-field>
                    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="login.password"
                        style="margin-top: 20px;"></mt-field>
                    <mt-button type="default" size="large" icon="login" @click="loginAction" style="margin-top: 30px;">
                        登录</mt-button>
                    <mt-button type="danger" size="large" icon="login" @click="registerAction"
                        style="margin-top: 30px;">注册
                    </mt-button>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                selected: "login",
                login: {},
                // register: {}
            }
        },
        methods: {
            loginAction() {
                this.$axios.post("/vue/login", this.login)
                    .then(res => {
                        console.log(res);
                        if (!!res.data.type) {
                            sessionStorage.userInfo = JSON.stringify({ token: res.data.token });
                            this.$router.push({ name: 'my' });
                        } else {
                            sessionStorage.removeItem('userInfo');
                        }
                    })
            },
            registerAction() {
                this.$router.push({ name: "register" })
            },
        }
    }
</script>

<style scoped>
    .l-box {
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px;
    }
</style>