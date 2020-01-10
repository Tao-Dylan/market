 <template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>
 
 <script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "green"
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  created() {},
  mounted() {},
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : "";
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>
 
 <style scoped lang="less">
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
  text-align: center;
  img {
    width: 24px;
    height: 24px;
    margin: 3px;
    vertical-align: middle;
  }
  .active {
    color: green;
  }
}
</style>
 