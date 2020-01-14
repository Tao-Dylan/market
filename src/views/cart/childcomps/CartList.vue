<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>

<style scoped lang="less"></style>
