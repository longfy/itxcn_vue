<template>
  <div class="container clearfix">
    <div style="margin: 20px 0;">
        <Banner></Banner>
    </div>
    <div class="content-wrap">
        <News></News>
    </div>
    <Aside></Aside>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Aside from '../components/Aside'
import News from '../components/News'

export default {
  name: 'home',
  components: {
    Banner, Aside, News
  }
}
</script>

<style scoped>
/**home**/
.content-wrap{
	width: 895px;
    float: left;
}
</style>
