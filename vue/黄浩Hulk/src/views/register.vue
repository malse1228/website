<template>
    <div>

        <Head title="注册" :show="true"></Head>
        <mt-navbar v-model="selected">
            <mt-tab-item id="register"></mt-tab-item>
        </mt-navbar>
        <div>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="register">
                    <mt-field label="用户名" placeholder="输入用户名" type="text" v-model="register.username"
                        @blur="chkusername"></mt-field>
                    <mt-field label="密码" placeholder="输入密码" type="password" v-model="register.password"
                        style="margin-top: 20px;"></mt-field>
                    <mt-field label="确认密码" placeholder="输入确认密码" type="password" v-model="register.dbpwd"
                        style="margin-top: 20px;" @blur="chkpassword"></mt-field>
                    <mt-button type="danger" size="large" icon="login" @click="registerAction"
                        style="margin-top: 30px;">注册</mt-button>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data() {
            return {
                selected: "register",
                // login: {},
                register: {}
            }
        },
        methods: {
            chkusername() {
                if (this.register.username == "") {
                    this.register.username.tip = "用户名不能为空"
                } else {
                    this.$axios.post("/vue/register").then(res => {
                        if (res.data.type == 1) {
                            this.register.username.tip = "可以使用该用户名";
                        } else {
                            this.register.username.tip = "用户名已经存在";
                        }
                    })
                }
            },
            chkpassword() {
                if (this.register.password == "") {
                    this.register.password.tip = "不能为空";
                } else if (this.register.password != this.register.dbpwd) {
                    this.register.password.tip = "密码不一致"
                } else {
                    this.register.password.tip = "正确";
                }
            },
            registerAction() {
                this.$axios.post("/vue/register", this.register)
                    .then(res => {
                        if (!!res.data.type) {

                            this.$router.push({ name: 'login' });
                        } else {
                            this.$router.push({ name: 'register' });
                        }
                    })
            }
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