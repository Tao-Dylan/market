<template>
  <div class="detail-swiper">
    <van-swipe :autoplay="3000" indicator-color="red" :loop="false">
      <van-swipe-item v-for="(item, index) in swiperImage" :key="index">
        <img class="img" :src="item" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    swiperImage: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.van-swipe {
  height: 300px;
  .img {
    width: 100%;
  }
}
</style>

