<template>
  <section class="banner">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(item, index) in pics" :key="index">
        <a href="">
          <img :src="item" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      pics: [
        require('../assets/images/banner1.jpg'),
        require('../assets/images/banner2.gif'),
        require('../assets/images/banner3.jpg'),
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item a {
  width: 100%;
}
</style>
