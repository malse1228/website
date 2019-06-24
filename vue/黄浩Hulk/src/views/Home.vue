<template>
  <div class="home">

    <Head title="首页" :show="true"></Head>

    <Demo></Demo>
    <Swipe id="banner" :swiperOptions="options">
      <SwipeItem v-for="(b,i) in banners" :key="i">
        <img :src="b" alt="" width="100%" height="300">
      </SwipeItem>
    </Swipe>
    <mt-navbar v-model="selected">
      <mt-tab-item :id="type.value" v-for="(type,i) in types" :key="i"> {{type.text}}</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="type.value" v-for="(type,i) in types" :key="i">
        <List :type="type" :allGoods="allGoods" :goods="allGoods.filter(item=>item.type.value==type.value)"> </List>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import Demo from '@/components/demo.vue';
  export default {
    name: 'classify',
    components: {
      Demo
    },
    data() {
      return {
        types: [],
        allGoods: [],
        selected: 'iphone',
        options: {
          loop: true,
          autoplay: true,
          speed: 1500,
        },
        banners:
          [
            require("@/assets/images/15.jpg"),
            require("@/assets/images/10.jpg"),
            require("@/assets/images/3.jpg"),
            require("@/assets/images/4.jpg"),
          ]
      }
    },
    created() {
      this.$axios.get("/vue/getGoodTypes")
        .then(res => {
          console.log(res);
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

<style scoped>
  .h-box {
    width: 2rem;
    height: 2rem;
    background: orange;
  }

  .home,
  .h-img {
    width: 100%;
    height: 100%;
  }
</style>