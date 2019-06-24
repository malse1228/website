import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // goodsList: JSON.parse(localStorage.getItem("goodsList") || "[]")
  },
  mutations: {
    // addCart(state, payload) {
    //   state.goodsList.push(payload);
    // },
    // updateNum(state, payload) {
    //   state.goodsList[payload.index].num += payload.n;
    //   state.goodsList = JSON.parse(JSON.stringify(state.goodsList));

    // },
    // delCart(state, payload) {
    //   state.goodsList.splice(payload, 1);
    // }
  },
  actions: {
    //   addCart(context, payload) {
    //     var index = context.state.goodList.findIndex(obj => obj_id === payload._id);
    //     if (index > 1) {
    //       if (payload.n == 1) {
    //         context.commit("updateNum", { index, n: payload.n })
    //       } else {
    //         var i = context.state.goodsList(index).num - 1;
    //         if (i == 0) {
    //           context.commit("delCart", index);
    //         } else {
    //           context.commit("updateNum", { index, n: payload.n })
    //         }
    //       }
    //     } else {
    //       var obj = payload;
    //       obj.num = 1;
    //       context.commit("addCart", obj);
    //     }
    //   }
  }
})


// store.subscribe(function (mutations, state) {
//   localStorage.setItem("goodsList", JSON.stringify(state.goodList))
// })

export default store;
