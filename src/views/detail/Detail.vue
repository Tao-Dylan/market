<template>
  <div id="detail">
    <!-- 详情页导航 -->
    <detail-nav-bar
      ref="detailNav"
      class="detail-nav scrollToTitle"
      @titleClick="titleClick"
      :current-index="currentIndex"
    />

    <!--  scroll滚动区域 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <!-- 轮播图 -->
      <detail-swiper :swiper-image="swiperImage" />
      <!-- 商品基本信息 -->
      <detail-base-info :goods-info="goods" />
      <!-- 商家信息 -->
      <detail-shop-info :shop-info="shopInfo" ref="shopInfo" />
      <!-- 商品详情信息 -->
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <!--商品参数信息  -->
      <detail-param-info
        :param-info="paramsInfo"
        class="scrollToTitle"
        ref="paramInfo"
      />
      <!-- 评论信息 -->
      <detail-comment-info
        :comment-info="commentInfo"
        class="scrollToTitle"
        ref="commentInfo"
      />
      <!-- 推荐商品展示 -->
      <goods-list
        :goods="recommendList"
        class="scrollToTitle"
        ref="recommendList"
      />
    </scroll>
    <!-- 底部栏 -->
    <detail-bottom-bar @addToCart="addToCart"/>
    <!-- 返回顶部箭头 -->
    <back-top v-show="isShowBackTop" @click.native="backClick" />
  </div>
</template>

<script>
import DetailNavBar from "./childcomps/DetailNavBar";
import DetailSwiper from "./childcomps/DetailSwiper";
import DetailBaseInfo from "./childcomps/DetailBaseInfo";
import DetailShopInfo from "./childcomps/DetailShopInfo";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";
import DetailParamInfo from "./childcomps/DetailParamInfo";
import DetailCommentInfo from "./childcomps/DetailCommentInfo";
import DetailBottomBar from "./childcomps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";

import { backTopMixin } from "common/mixin";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  mixins: [backTopMixin],
  data() {
    return {
      // 商品id
      iid: null,
      // 轮播图图片
      swiperImage: [],
      // 商品详情信息
      goods: {},
      // 商家信息
      shopInfo: {},
      // 商品信息
      detailInfo: {},
      // 商品参数信息
      paramsInfo: {},
      // 评论信息
      commentInfo: {},
      // 推荐商品展示信息
      recommendList: [],
      // 导航栏选项滚动到的 offsetTop 高度
      themeTops: [],
      // 当前显示导航栏的index
      currentIndex: 0
    };
  },
  created() {
    this._getDetail();
    this._getRecommend();
  },
  mounted() {},
  updated() {
    console.log(this.currentIndex);
  },
  methods: {
    // 获取导航title的内容对应的高度
    _getOffsetTop() {
      // this.themeTops = [];
      this.themeTops.push(this.$refs.detailNav.$el.offsetTop);
      this.themeTops.push(this.$refs.paramInfo.$el.offsetTop);
      this.themeTops.push(this.$refs.commentInfo.$el.offsetTop);
      this.themeTops.push(this.$refs.recommendList.$el.offsetTop);
      console.log(this.themeTops);
    },

    // 获取详情数据
    _getDetail() {
      // 获取路由的查询字符串即商品 id
      const iid = this.$route.params.iid;
      this.iid = iid;

      // 请求相关数据
      getDetail(iid).then(res => {
        const data = res.data.result;
        // console.log(data);
        // 轮播图信息
        this.swiperImage = data.itemInfo.topImages;

        // 商品简要信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 商家信息
        this.shopInfo = new Shop(data.shopInfo);

        // 商品详情信息
        this.detailInfo = data.detailInfo;
        // console.log(this.detailInfo)

        // 获取尺寸数据
        this.paramsInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        // 获取评论数据
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },

    // 获取推荐数据
    _getRecommend() {
      getRecommend().then(res => {
        this.recommendList = res.data.data.list;
        // console.log(res)
        // console.log(this.recommendList)
      });
    },

    // 监听商品详情信息图片加载
    imageLoad() {
      // console.log("--------");
      this.$refs.scroll.refresh();
      this._getOffsetTop();
    },

    // 监听导航栏点击到对应的位置
    titleClick(index) {
      const scrollToTitle = Array.from(
        document.getElementsByClassName("scrollToTitle")
      );
      const el = scrollToTitle[index];
      this.$refs.scroll.scrollToElement(el, 300);
    },
    // 监听滚动到的位置
    contentScroll(position) {
      //[0, 5447, 6250, 6466]
      this.isShowBackTop = -position.y > this.showBackTopY;

      const positionY = -position.y + 44;
      const themeTopsList = this.themeTops;
      const themeLength = themeTopsList.length;
      if (positionY >= themeTopsList[themeLength - 1]) {
        this.currentIndex = themeLength - 1;
      } else if (positionY >= themeTopsList[themeLength - 2]) {
        this.currentIndex = themeLength - 2;
      } else if (positionY >= themeTopsList[themeLength - 3]) {
        this.currentIndex = themeLength - 3;
      } else {
        this.currentIndex = themeLength - 4;
      }
    },
    // 监听添加购物车
    addToCart() {
      console.log('添加购物车')
    }
  }
};
</script>

<style scoped lang="less">
#detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 9;
  .content {
    height: calc(100% - 93px);
    background-color: #fff;
    overflow: hidden;
  }
}
</style>
