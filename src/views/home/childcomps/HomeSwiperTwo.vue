<template>
  <div class="slide-banner">
    <div class="banner-wrapper">
      <div class="slide-banner-scroll" ref="slide">
        <div class="slide-banner-wrapper">
          <div class="slide-item page1">page 1</div>
          <div class="slide-item page2">page 2</div>
          <div class="slide-item page3">page 3</div>
          <div class="slide-item page4">page 4</div>
        </div>
      </div>
      <div class="docs-wrapper">
        <span
          class="doc"
          v-for="(item, index) in 4"
          :key="index"
          :class="{'active': currentPageIndex === index}"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      slide: null,
      currentPageIndex: 0,
      playTimer: 1
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    clearTimeout(this.playTimer);
    this.slide.destroy();
  },
  methods: {
    init() {
      clearTimeout(this.playTimer);
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        slide: {
          loop: true,
          threshold: 100
        },
        useTransition: true,
        momentum: false,
        bounce: false,
        stopPropagation: true,
        probeType: 2
      });
      this.slide.on("scrollEnd", this._onScrollEnd);

      this.slide.on("slideWillChange", page => {
        this.currentPageIndex = page.pageX;
      });
    },
  }
};
</script>

<style lang="less">
.slide-banner {
  .banner-wrapper {
    position: relative;
  }

  .slide-banner-scroll {
    min-height: 1px;
    overflow: hidden;
  }

  .slide-banner-wrapper {
    height: 200px;
    white-space: nowrap;
    font-size: 0;

    .slide-item {
      display: inline-block;
      height: 200px;
      width: 100%;
      line-height: 200px;
      text-align: center;
      font-size: 26px;

      &.page1 {
        background-color: #95b8d1;
      }

      &.page2 {
        background-color: #dda789;
      }

      &.page3 {
        background-color: #c3d899;
      }

      &.page4 {
        background-color: #f2d4a7;
      }
    }
  }

  .docs-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);

    .doc {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;

      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>
