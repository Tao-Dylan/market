<template>
  <div class="goods-item">
    <img @click="goodsItemClick" :src="goodsItem.show.img" alt />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  created() {
  },
  mounted() {},
  methods: {
goodsItemClick() {
  console.log('tiaozhuan ')
}
  }
};
</script>

<style scoped lang="less">
.goods-item {
  position: relative;
  padding-bottom: 45px;
  // background-color: red;
  img {
    width: 100%;
    border-radius: 8px;
  }
  .goods-info {
    position: absolute;
    left: 0;
    right: 0;
    margin: 5px 0;
    font-size: 12px;
    text-align: center;
    // background-color: pink;
    p {
      padding-bottom: 3px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .collect {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -15px;
        width: 13px;
        height: 13px;
        background: url("~assets/img/common/collect.svg");
        background-size: 13px
      }
    }
  }
}
</style>
