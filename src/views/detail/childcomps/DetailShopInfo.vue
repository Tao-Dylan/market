<template>
  <div class="shop-info">
    <!-- 商家图片顶部 -->
    <div class="shop-top">
      <img :src="shopInfo.logo" alt="" />
      <span class="shop-title">{{ shopInfo.name }}</span>
    </div>
    <!-- 商家信息中部 -->
    <div class="shop-middle">
      <!-- 左边信息 -->
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shopInfo.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shopInfo.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <!-- 右边信息 -->
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 商家区域底部 -->
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter: function(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped lang="less">
.shop-info {
  padding: 10px;
  // background-color: pink;
  .shop-top {
    display: flex;
    line-height: 45p;
    align-items: center;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .shop-title {
      margin-left: 10px;
      vertical-align: center;
    }
  }
  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
    .shop-middle-item {
      flex: 1;
    }
    .shop-middle-left {
      display: flex;
      justify-content: space-evenly;
      color: #333;
      text-align: center;
      font-size: 14px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      .sells-count,
      .goods-count {
        font-size: 18px;
      }
      .sells-text,
      .goods-text {
        margin-top: 10px;
        font-size: 12px;
      }
    }
    .shop-middle-right {
      font-size: 13px;
      color: #333;
      table {
        width: 120px;
        margin-left: 30px;
        td {
          padding: 5px 0;
        }
        .score {
          color: #5ea732;
        }
        .score-better {
          color: #f13e3a;
        }
        .better {
          span {
            background-color: #5ea732;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
    .enter-shop {
      display: inline-block;
      font-size: 14px;
      background-color: #f2f5f8;
      width: 150px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 10px;
    }
  }
}
</style>
