import Vue from 'vue'
import App from './App.vue'


import router from './router'
import store from './store'

Vue.config.productionTip = false;

import MintUI from "mint-ui";
Vue.use(MintUI);

import VueResource from "vue-resource";
Vue.use(VueResource);

import ajax from "@/utils/ajax";
Vue.prototype.$axios = ajax;

console.log("这是项目的启动的入口文件");

import Head from "@/components/head.vue";
Vue.component("Head", Head);
import Foot from "@/components/foot.vue";
Vue.component("Foot", Foot);
import Swipe from "@/components/swipe.vue";
Vue.component("Swipe", Swipe);
import SwipeItem from "@/components/swipe-item.vue";
Vue.component("SwipeItem", SwipeItem);
import List from "@/components/List.vue";
Vue.component("List", List);

import "@/styles/index.scss";

import { bus } from "@/utils/bus";

new Vue({
  router,
  store,
  mounted() {
    console.log("这是website项目的根实例");
  },
  watch: {
    '$route': function (to) {
      console.log(to);
      bus.$emit("changeActive", to.name);
    }
  },
  render: h => h(App)   //项目的根组件
}).$mount('#app')
