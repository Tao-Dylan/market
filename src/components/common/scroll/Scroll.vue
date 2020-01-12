<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      scrollbar: true,
      click: true
    });
    // 监听滚动
    this.scroll.on("scroll", position => {
      // console.log(BScroll)
      this.$emit("scroll", position);
      // console.log(position);
    });
    // 监听上拉加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore");
      // console.log('上拉加载更多 ')
    });
  },
  methods: {
    scrollToElement(el, time = 300) {
      this.scroll.scrollToElement(el, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      // console.log('防抖函数功能正常')
      this.scroll.refresh()
    }
  }
};
</script>

<style scoped lang="less">
</style>
