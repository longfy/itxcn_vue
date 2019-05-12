<template>
  <aside class="sidebar">
    <div class="widget d_postlist">
      <h3 class="widget_tit">精选文章</h3>
      <ul class="clearfix">
        <li v-for="(item, index) in pics" :key="index">
          <a href="#">
            <div class="pic"><img :src='item' /></div>
            <h4>实例！众安保险PC官网改版总结！</h4>
            <p>
              <span class="muted">2015-06-06</span>
              <span class="muted">4条评论</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
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
  }
}
</script>

<style scoped>
.sidebar{
	width: 290px;
	float: right;
	position: relative;
}
.widget {
  clear: both;
  margin-bottom: 10px;
  background-color: #fff;
}
.widget h3 {
  position: relative;
  margin: 0;
  line-height: 16px;
  padding: 11px 15px 10px;
  font-size: 16px;
  font-weight: normal;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}
.d_postlist li a {
  padding: 10px 15px 10px 105px;
  border-bottom: solid 1px #eee;
  border-left: 3px solid transparent;
  margin-left: -3px;
  overflow: hidden;
  position: relative;
  display: block;
  font-size: 14px;
}
.d_postlist li a:hover {
  background-color: #fafff8;
  border-left-color: #81c53f;
}
.d_postlist .pic {
  float: left;
  margin-left: -90px;
}
.d_postlist .pic img {
  width: 80px;
  height: 55px;
}
.d_postlist h4 {
  font-weight: normal;
  margin-top: -2px;
}
.d_postlist .muted {
  margin-right: 20px;
  font-size: 12px;
  color: #999;
}
</style>
