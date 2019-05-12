<template>
  <div>
    <article class="excerpt clearfix" v-for="(item, index) in pics" :key="index">
      <div class="pic">
        <a href="#"><img :src='item' /></a>
      </div>
      <header>
        <h2><a href="#">实例！众安保险PC官网改版总结！</a></h2></header>
      <p class="note">从早几年前移动互联网大行其道，到如今VR/AR逐渐进入大家的视野，回过头看，PC端的网页设计和体验作为一个“旧课题”似乎不再是企业和设计的核心问题。但是，我们真如想象中那样远离电脑了么？</p>
      <p class="e-ft">
        <span class="muted"><a href="#"><i class="iconfont icon-atm"></i>陌北默</a></span>
        <span class="muted"><i class="iconfont icon-shijian"></i>07-27</span>
        <span class="muted"><i class="iconfont icon-browse"></i>458浏览</span>
        <span class="muted"><i class="iconfont icon-code"></i>0</span>
        <span class="muted"><i class="iconfont icon-shoucang1"></i>登录收藏</span>
      </p>
    </article>
  </div>
</template>

<script>
import '../assets/fonts/iconfont.css'
import { getArticleList } from '../utils/api.js'
export default {
  name: 'News',
  data() {
    return {
      pics: [
        require('../assets/images/pic_01.png'),
        require('../assets/images/pic_02.png'),
        require('../assets/images/pic_03.png'),
        require('../assets/images/pic_04.png'),
        require('../assets/images/pic_05.gif'),
        require('../assets/images/pic_06.png'),
        require('../assets/images/pic_07.png'),
        require('../assets/images/pic_08.png'),
      ]
    }
  },
  beforeCreate() {
    getArticleList()
  },
}
</script>

<style scoped>
.excerpt{
	background-color: #fff;
  padding: 20px 20px 20px 231px;
  margin-bottom: 1px;
  position: relative;
  border-left: solid 4px #fff;
}
.excerpt:hover{
  background-color: #fafff8;
  border-left-color: #81c53f;
}
.excerpt .pic{
float: left;
  width: 200px;
  margin-left: -220px;
  margin-top: 0px;
  text-align: center;
  position: relative;
}
.excerpt .pic a:hover img{
  opacity: 0.8;
  filter: alpha(opacity=20);
}
.excerpt header{
margin: 5px 40px 5px 0;
}
.excerpt header h2{
  display: inline;
  font-size: 16px;
  margin: 0;
  font-weight: bold;
  position: relative;
  top: 1px;
  line-height: 25px;
}
.excerpt .note {
  margin-bottom: 20px;
  color: #888;
  font-size: 14px;
  line-height: 24px;
}
.excerpt .e-ft, .excerpt .e-ft a, .excerpt .e-ft .muted {
  color: #d1d1d1;
}
.excerpt .e-ft .muted{
	margin-right: 20px;
}
.excerpt .e-ft .muted i{
	margin-right: 3px;
}
</style>
