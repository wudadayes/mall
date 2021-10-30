<template>
  <div class="tab-control">
    <div v-for="(item,key) in titles"
         :key="key"
         class="control-item"
         :class="{active:key == currentIndex}"
         @click="tabclick(key)"
    >
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return{
      currentIndex : 0,
    }
  },
  methods:{
    tabclick(key) {
      this.currentIndex = key;
      this.$emit('tabclick',key)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.control-item {
  flex: 1;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 10px;
}
.control-item span {
  padding: 5px;
}
.active{
  color: red;
}
.active span {

  border-bottom: 3px solid red;
}
</style>
