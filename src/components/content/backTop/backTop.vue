<template>
  <div class="back-img">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
name: "backTop"

}
</script>

<style scoped>
.back-img {
  position: fixed;
  right: 20px;
  bottom: 100px;
  width: 80px;
  height: 80px;
  z-index: 10;
}
.back-img img {
  width: 80px;
  height: 80px;
}
</style>
