<template>
  <div id="app">
    <Navbar />
    <transition name="slide" mode="out-in">
      <router-view class="page"></router-view>
    </transition>
    <Footbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footbar from "./components/Footbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footbar
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>