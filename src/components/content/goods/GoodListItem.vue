<template>
  <div>
      <img :src="gooditems.show.img" alt="">
      <div>
        <p>{{gooditems.title}}</p>
        <span>{{gooditems.price}}</span>
        <span>{{gooditems.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props:{
    gooditems:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
