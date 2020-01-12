<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
              <img :src="item.image" alt />
      <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
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
.recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  border-bottom: 8px solid #eee;
  .recommend-item {
    flex: 1;
    margin: 10px 0 20px 0;
    
  }
  img {
    width: 65px;
    height: 65px;
    margin-bottom: 5px;

  }
}
</style>
