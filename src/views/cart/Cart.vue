<template>
  <div id="cart">
    <!-- 购物车导航 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{ cartCount }})</div>
      </template>
    </nav-bar>

    <!-- 购物车商品类表滚动区域 -->
    <scroll class="content">
      <!-- 购物车商品列表 -->
      <cart-list></cart-list>
    </scroll>

    <!-- 底部汇总 -->
   
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CartList from "./childcomps/CartList";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>

<style scoped lang="less">
#cart {
  height: 100vh;
  .nav-bar {
    background-color: green;
    color: #fff;
  }
  .content {
    // background-color: pink;
    height: calc(100% - 95px);
    overflow: hidden;
  }
}
</style>
