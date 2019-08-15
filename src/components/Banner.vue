<template>
  <section class="banner">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(item, index) in bannerInfo" :key="index">
        <a href>
          <img :src="item" alt />
        </a>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
Vue.use(Carousel).use(CarouselItem);
export default {
  name: "Banner",
  props: {
    bannerInfo: {
      default: [],
      type: Array
    }
  }
};
</script>

<style scoped>
.el-carousel__item a {
  width: 100%;
}
</style>
