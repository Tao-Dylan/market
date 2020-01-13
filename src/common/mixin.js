import { POP, NEW, SELL } from "./const";

export const backTopMixin = {
  data: function() {
    return {
      isShowBackTop: false,
      // 默认滚动到1000位置返回顶部按钮显示
      showBackTopY: 1000
    };
  },
  methods: {
    // backTop: function() {
    //   this.$refs.scroll.scrollTo(0, 0, 300);
    // },
    // 监听回到顶部按钮
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
};

export const tabControlMixin = {
  data: function() {
    return {
      currentType: POP
    };
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
      console.log(this.currentType);
    }
  }
};
