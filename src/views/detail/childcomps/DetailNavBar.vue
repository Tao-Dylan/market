<template>
  <div class="detail-nav">
    <nav-bar>
      <template v-slot:left>
        <img @click="backClick" class="back" src="~assets/img/common/back.svg" alt />
      </template>
      <template v-slot:center>
        <div class="center-title">
          <div
            class="title-item"
            v-for="(item, index) in titles"
            :key="index"
            :class="{active: index === currentIndex}"
            @click="itemClick(index)"
          >{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  props: {
    currentIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  created() {},
  mounted() {},
  methods: {
    itemClick(index) {
      // this.currentIndex = index
      // console.log(index)
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped lang="less">
.back {
  width: 20px;
  height: 20px;
  margin-top: 12px;
}
.center-title {
  display: flex;
  font-size: 14px;
  .title-item {
    flex: 1;
  }
  .active {
    color: red;
  }
}
</style>
