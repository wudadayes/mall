<template>
<!--  <div class="tabbar-item">首页</div>-->

  <div class="tabbar-item" @click="isClick">
    <div v-if="!isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot name='tabbar-icon-active'></slot>
    </div>
    <div :style="activeClass">
      <slot name="tabbar-text"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default: 'red'
    }
  },
  computed:{
    isActive() {
      return this.$route.path == this.path
    },
    activeClass() {
      return this.isActive? {color:this.activeColor} : {}
    }
  },
  data() {
    return{
      // isActive: true
    }
  },
  methods:{
    isClick() {
      // console.log(1848)
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 2px;
  margin-bottom: 2px;
}
.active {
  color:red;
}
.test {
  font-size: 14px;
}
</style>
