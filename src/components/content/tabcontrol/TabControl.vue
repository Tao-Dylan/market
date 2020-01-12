<template>
  <div class="tab-control">
    <div
      :class="{active: index === currentIndex }"
      class="tab-control-item"
      v-for="(item,index) in titles"
      :key="index"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControol",
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    itemClick(index) {
      // console.log(index);
      this.currentIndex = index;
      this.$emit('tabClick', index)
    },
  }
};
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  .tab-control-item {
    flex: 1;
  }
  .active {
    span {
      color: green;
      padding: 5px;
      border-bottom: 3px solid green;
    }
  }
}
</style>
