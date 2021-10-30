<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="show"
            :pull-up-load="true"
            @pullingUp="getMOre">
      <home-swiper :banners="banners"/>
      <home-info :recommends="recommends"></home-info>
      <feature-views></feature-views>
      <tab-control
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabclick="tabChange">
      </tab-control>
      <!--    <good-list :goodlist="showGoods"></good-list>-->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backtotop" ref="back" v-show="isShow"></back-top>
  </div>

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/homechildren/HomeSwiper";
import HomeInfo from "@/views/home/homechildren/HomeInfo";
import FeatureViews from "./homechildren/FeatureViews";
import TabControl from "../../components/content/TabControl/TabControl";
// import GoodList from "@/components/content/goods/GoodList";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/scroll";
import backTop from "@/components/content/backTop/backTop";

import {getHomeMutiddta,getHomeGoods} from "@/network/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeInfo,
    FeatureViews,
    TabControl,
    GoodsList,
    Scroll,
    backTop
    // GoodList
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType:'pop',
      isShow:false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  created() {
      this.getHomemMuti();
      this.getHomeBuys('pop');
      this.getHomeBuys('new');
      this.getHomeBuys('sell');
  },
  methods:{
    getHomemMuti() {
      getHomeMutiddta().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeBuys(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.page[type].page +=1
        this.$refs.scroll.finishPullUp();
      })

    },
    backtotop() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
    show(position){
      if (-position.y > 1000) {
        this.isShow = true
      }else {
        this.isShow = false
      }
    },
    tabChange(key) {
      switch (key){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    getMOre() {
      this.getHomeBuys(this.currentType);
      this.$refs.scroll.scroll.refresh();
    }
  }

}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  position: fixed;
  background-color: var(--color-tint);
  color: #ffffff;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
