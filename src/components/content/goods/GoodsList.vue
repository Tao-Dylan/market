<template>
  <div class="good-list">
    <goods-list-item
      class="item"
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.goods);
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.good-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
  .item {
    width: 48%;
  }
}
</style>
