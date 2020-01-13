<template>
  <div class="base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <!-- 标题 -->
    <div class="title">{{ goodsInfo.title }}</div>
    <!-- 价格信息 -->
    <div class="price-info">
      <span class="new-price">{{ goodsInfo.newPrice }}</span>
      <span class="old-price">{{ goodsInfo.oldPrice }}</span>
      <span class="discount">{{ goodsInfo.discount }}</span>
    </div>
    <!-- 销量信息 -->
    <div class="info-other">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</span>
    </div>
    <!-- 服务信息 -->
    <div class="info-service">
      <div
        class="info-service-item"
        v-for="index in goodsInfo.services.length - 1"
        :key="index"
      >
        <div class="item">
          <img :src="goodsInfo.services[index - 1].icon" alt="" />
          <span>{{ goodsInfo.services[index - 1].name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {}
};
</script>

<style scoped lang="less">
.base-info {
  // background-color: pink;
  padding: 10px;
  color: #999;
  .title {
    color: #222;
    font-size: 13px;
  }
  .price-info {
    // background-color: pink;
    margin: 10px 0;
    .new-price {
      font-size: 24px;
      color: var(--color-high-text);
    }
    .old-price {
      font-size: 12px;
      text-decoration: line-through;
    }
    .discount {
      margin-left: 5px;
      border-radius: 8px;
      color: #fff;
      font-size: 15px;
      padding: 2px 5px 2px 10px;
      background-color: var(--color-high-text);
    }
  }
  .info-other {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 5px;
    justify-content: space-between;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
  }
  .info-service {
    display: flex;
    line-height: 50px;
    color: #222;
    justify-content: space-between;
    .item {
      flex: 1;
      img {
        position: relative;
        padding-right: 2px;
        top: 2px;
        width: 14px;
        height: 14px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
