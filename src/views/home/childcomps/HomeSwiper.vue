<template>
  <div class="home-swiper">
    <van-swipe :autoplay="3000" indicator-color="red" :loop="false">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
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
.home-swiper {
  img {
    width: 100%;
  }
}
</style>
