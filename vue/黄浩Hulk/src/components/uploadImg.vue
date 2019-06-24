<template>
    <div>
        <div id="photo">
            <img :src="via" alt="上传头像" @click.stop="uploadImg" class="tou">
            <input type="file" ref="one" accept="image/*" @change="uploading" class="hiddenInput">
        </div>
    </div>
</template>

<script>
    export default {
        name: "avatar",
        data() {
            return {
                via: ""
            }
        },
        mounted() {
            if (localStorage.via) {
                this.via = localStorage.via;
            } else {
                this.via = require("@/assets/images/photo.png");
            }
        },
        methods: {
            uploadImg() {
                this.$refs.one.click();
            },
            uploading() {
                console.log("准备上传");
                let file = this.$refs.one.files[0];
                let data = new FormData();
                data.append("avatar", file);

                this.$axios({
                    url: "/vue/uploadAvatar",
                    method: "POST",
                    contentType: false,
                    processData: false,
                    data: data
                }).then(res => {
                    console.log(res);
                    this.via = res.data.avatarurl.replace(/public/, '');
                    localStorage.via = this.via;
                })
            }
        }
    }

</script>
<style scoped>
    .tou {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
    }

    .hiddenInput {
        display: none;
    }
</style>