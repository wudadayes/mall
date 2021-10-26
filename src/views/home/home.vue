<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <home-info :recommends="recommends"></home-info>
  </div>

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/homechildren/HomeSwiper";
import {getHomeMutiddta} from "@/network/home";
import HomeInfo from "@/views/home/homechildren/HomeInfo";


export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeInfo
  },
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMutiddta().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }

}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
