<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";

// import HomeSwiperTwo from "views/home/childcomps/HomeSwiperTwo";

export default {
  name: "app",
  components: {
    MainTabBar,
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
