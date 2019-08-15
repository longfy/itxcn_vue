<template>
  <div class="container clearfix">
    <div style="margin: 20px 0;">
      <Banner :bannerInfo="bannerInfo"></Banner>
    </div>
    <div class="content-wrap">
      <News :newsInfo="newsInfo"></News>
    </div>
    <Aside :asideInfo="newsInfo"></Aside>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Aside from "@/components/Aside";
import News from "@/components/News";

export default {
  name: "home",
  components: {
    Banner,
    Aside,
    News
  },
  data() {
    return {
      bannerInfo: [
        require("@/assets/images/banner1.jpg"),
        require("@/assets/images/banner2.gif"),
        require("@/assets/images/banner3.jpg")
      ],
      newsInfo: [
        require("@/assets/images/pic_01.png"),
        require("@/assets/images/pic_02.png"),
        require("@/assets/images/pic_03.png"),
        require("@/assets/images/pic_04.png"),
        require("@/assets/images/pic_05.gif"),
        require("@/assets/images/pic_06.png"),
        require("@/assets/images/pic_07.png"),
        require("@/assets/images/pic_08.png")
      ]
    };
  }
};
</script>

<style scoped>
/**home**/
.content-wrap {
  width: 895px;
  float: left;
}
</style>
