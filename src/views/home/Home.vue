<template>
  <div id="home">
    <!-- 标题栏 -->
    <nav-bar v-slot:center class="nav-bar">
      <div>购物街</div>
    </nav-bar>

    <tab-control
      v-show="isTabFixed"
      class="fixed"
      ref="tabControl2"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    />

    <!-- scroll滚动区域 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollPosition"
      :pull-up-load="true"
      @loadMore="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" />
      <!-- 推荐分类 -->
      <recommend-view :recommends="recommends" />
      <!-- 本周流行 -->
      <feature-view></feature-view>
      <!-- tabControl -->
      <tab-control
        ref="tabControl"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <!-- 商品展示 -->
      <goods-list :goods="showGoodType" />
    </scroll>

    <!-- 返回顶部箭头 -->
    <back-top v-show="isShowBackTop" @click.native="backClick" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import FeatureView from "./childcomps/FeatureView";

import { getHomeMultidate, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
import { backTopMixin } from "common/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  mixins: [backTopMixin],
  data() {
    return {
      // 轮播图图片
      banners: [],
      // 推荐数据图片
      recommends: [],
      // 主体图片数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      // 当前选中的类型
      currentType: "pop",
      // 返回顶部按钮显示
      isShowBackTop: false,
      // 默认滚动到1000位置返回顶部按钮显示
      showBackTopY: 1000,
      // 吸顶位置参数
      tabOffsetTop: 0,
      // 是否吸顶
      isTabFixed: false
    };
  },
  created() {
    // 请求轮播图推荐数据
    this.getHomeMultidate();
    // 请求主体图片数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听本周流行图片加载完成,利用防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  updated() {
    // 监听tabControl的吸顶offsetTop
    this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    // console.log(this.tabOffsetTop);
  },
  /*-----------------------------------  methods ---------------------------- */
  methods: {
    // 请求轮播图推荐数据
    getHomeMultidate() {
      getHomeMultidate().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    // 请求主体图片数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // 请求的图片数组
        const newImageList = res.data.data.list;
        this.goods[type].list.push(...newImageList);
        this.goods[type].page += 1;
        // console.log(this.goods);
      });
    },
    // 监听本周流行点击
    tabClick(index) {
      if (index === 1) {
        this.currentType = "new";
      } else if (index === 2) {
        this.currentType = "sell";
      } else {
        this.currentType = "pop";
      }
      // console.log(this.currentType)
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    // scroll区域监听滚动位置
    scrollPosition(position) {
      // 监听返回顶部按钮是否显示
      this.isShowBackTop = -position.y > this.showBackTopY;
      // 监听tabControl是否吸顶（position: fixed）
      this.isTabFixed = -position.y >= this.tabOffsetTop;
      // console.log(position.y)
    },
    // 监听上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      // 完成上拉加载更多
      this.$refs.scroll.finishPullUp();
      // console.log("上拉加载更多");
    }
  },
  /*--------------------------------- computed 计算属性 ---------------------------- */
  computed: {
    showGoodType() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>

<style lang="less" scoped>
#home {
  position: relative;
  height: 100vh;
  .nav-bar {
    color: white;
    font-weight: 700;
    background-color: var(--color-tint);
  }
  .fixed {
    position: relative;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>
