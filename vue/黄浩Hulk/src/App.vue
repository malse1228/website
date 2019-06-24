<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="main-box"></router-view>
    </transition>
  </div>
</template>


<script>
  export default {
    watch: {
      "$route": function (to, from) {

        var toLength = to.path.split("/").length;
        var fromLength = from.path.split("/").length;
        console.log(toLength)
        console.log(fromLength);

        this.transitionName = toLength > fromLength ? 'slide-detail' : 'slide-list'
      }
    },
    data() {
      return {
        transitionName: "slide-detail"
      }
    }
  }
</script>


<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: rgb(92, 90, 87);
  }
</style>